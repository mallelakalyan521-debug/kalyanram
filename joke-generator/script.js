// Joke Generator App using Jokes API

const jokeContent = document.getElementById('joke-content');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const shareBtn = document.getElementById('share-btn');
const historyList = document.getElementById('history-list');
const loader = document.getElementById('loader');
const categoryButtons = document.querySelectorAll('.category-btn');

let currentJoke = '';
let selectedCategory = 'any';
let jokeHistory = [];
const maxHistory = 10;

// Load history from localStorage
function loadHistory() {
    const saved = localStorage.getItem('jokeHistory');
    if (saved) {
        jokeHistory = JSON.parse(saved);
        updateHistoryDisplay();
    }
}

// Save history to localStorage
function saveHistory() {
    localStorage.setItem('jokeHistory', JSON.stringify(jokeHistory));
}

// Fetch joke from API
async function fetchJoke() {
    try {
        generateBtn.disabled = true;
        loader.style.display = 'block';
        jokeContent.innerHTML = '';

        let url = 'https://official-joke-api.appspot.com/random_joke';

        // Set URL based on selected category
        if (selectedCategory !== 'any') {
            url = `https://official-joke-api.appspot.com/jokes/${selectedCategory}/random`;
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        let joke;
        const data = await response.json();

        // Handle array response (some endpoints return arrays)
        if (Array.isArray(data)) {
            joke = data[0];
        } else {
            joke = data;
        }

        // Format joke
        if (joke.setup && joke.punchline) {
            currentJoke = `${joke.setup}\n${joke.punchline}`;
            jokeContent.innerHTML = `
                <div>
                    <div class="setup">${escapeHtml(joke.setup)}</div>
                    <div class="punchline">${escapeHtml(joke.punchline)}</div>
                </div>
            `;
        } else if (joke.joke) {
            currentJoke = joke.joke;
            jokeContent.innerHTML = `<p>${escapeHtml(joke.joke)}</p>`;
        }

        // Add to history
        addToHistory(currentJoke);
        loader.style.display = 'none';
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeContent.innerHTML = '<p>Oops! Failed to load joke. Please try again!</p>';
        showNotification('Failed to load joke. Please check your internet connection.', 'error');
        loader.style.display = 'none';
    } finally {
        generateBtn.disabled = false;
    }
}

// Add joke to history
function addToHistory(joke) {
    jokeHistory.unshift({
        joke: joke,
        timestamp: new Date().toLocaleTimeString()
    });

    // Keep only recent jokes
    if (jokeHistory.length > maxHistory) {
        jokeHistory.pop();
    }

    saveHistory();
    updateHistoryDisplay();
}

// Update history display
function updateHistoryDisplay() {
    if (jokeHistory.length === 0) {
        historyList.innerHTML = '<p class="empty-message">No jokes yet. Generate one!</p>';
        return;
    }

    historyList.innerHTML = jokeHistory.map((item, index) => `
        <div class="history-item">
            <button class="delete-btn" onclick="deleteHistoryItem(${index})">Delete</button>
            <strong>${item.timestamp}</strong>
            <p>${escapeHtml(item.joke.substring(0, 60))}...</p>
        </div>
    `).join('');
}

// Delete history item
function deleteHistoryItem(index) {
    jokeHistory.splice(index, 1);
    saveHistory();
    updateHistoryDisplay();
}

// Copy joke to clipboard
function copyJoke() {
    if (!currentJoke) {
        showNotification('No joke to copy!', 'error');
        return;
    }

    navigator.clipboard.writeText(currentJoke).then(() => {
        showNotification('Joke copied to clipboard! 📋');
    }).catch(() => {
        showNotification('Failed to copy joke', 'error');
    });
}

// Share joke
function shareJoke() {
    if (!currentJoke) {
        showNotification('No joke to share!', 'error');
        return;
    }

    if (navigator.share) {
        navigator.share({
            title: 'Check out this joke!',
            text: currentJoke
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy to clipboard
        copyJoke();
        showNotification('Fallback: Joke copied to clipboard! You can paste it anywhere.');
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Category button event listeners
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Update selected category
        selectedCategory = btn.getAttribute('data-category');
    });
});

// Event listeners
generateBtn.addEventListener('click', fetchJoke);
copyBtn.addEventListener('click', copyJoke);
shareBtn.addEventListener('click', shareJoke);

// Load history on page load
window.addEventListener('load', () => {
    loadHistory();
    // Auto-load a joke on page load
    fetchJoke();
});

// Keyboard shortcut: Press 'Enter' to get a new joke
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !generateBtn.disabled) {
        fetchJoke();
    }
});