# 😂 Random Joke Generator

A fun and interactive web application that generates random jokes using the [Official Joke API](https://official-joke-api.appspot.com/). Get a laugh anytime, anywhere!

## ✨ Features

### 🎯 Main Features
- **Random Joke Generator** - Get unlimited random jokes with a single click
- **Category Filtering** - Filter jokes by category:
  - Any (all jokes)
  - General
  - Programming
  - Knock-Knock
- **Copy to Clipboard** - Easily copy jokes to share
- **Share Joke** - Share jokes directly (web share API support)
- **Joke History** - View your last 10 jokes with timestamps
- **Persistent Storage** - History saved in localStorage
- **Real-time Loading** - Loading spinner while fetching
- **Error Handling** - Graceful error messages
- **Keyboard Shortcut** - Press Enter to get a new joke

### 🎨 Design Features
- Beautiful gradient UI with modern styling
- Smooth animations and transitions
- Fully responsive design (mobile, tablet, desktop)
- Professional card-based layout
- Interactive buttons with hover effects
- Custom scrollbar styling
- Toast notifications

## 📁 Files

- `index.html` - Main HTML structure
- `styles.css` - Complete styling and responsive design
- `script.js` - JavaScript functionality with API integration
- `README.md` - This file

## 🚀 How to Use

1. Open `index.html` in your web browser
2. Click **"Get Random Joke"** button to load a joke
3. Use category buttons to filter jokes by type
4. Click **"Copy Joke"** to copy to clipboard
5. Click **"Share Joke"** to share (on supported devices)
6. View your recent jokes in the history section
7. Press **Enter** key as a keyboard shortcut

## 🌐 API Used

**Official Joke API**: https://official-joke-api.appspot.com/

### Endpoints Used:
- `https://official-joke-api.appspot.com/random_joke` - Get a random joke
- `https://official-joke-api.appspot.com/jokes/{category}/random` - Get a random joke by category

### Available Categories:
- `general` - General jokes
- `programming` - Programming jokes
- `knock-knock` - Knock-knock jokes

## 💾 Local Storage

The app uses browser's localStorage to save:
- Last 10 jokes viewed
- Timestamps for each joke

## 📱 Responsive Design

- **Desktop** - Full layout with all features
- **Tablet** - Optimized grid layout
- **Mobile** - Single column layout with touch-friendly buttons

## 🎮 Keyboard Shortcuts

- **Enter** - Get a new random joke
- **Click buttons** - Copy, share, or generate new jokes

## 🔒 Security

- XSS protection with HTML escaping
- Safe DOM manipulation
- Secure clipboard API usage
- Error boundaries for API failures

## 📊 Features Breakdown

### Joke Display
- Shows jokes in setup/punchline format
- Handles both formats and single-line jokes
- Auto-loads on page refresh
- Smooth fade-in animations

### Category System
- Easy category switching
- Active state indication
- Responsive button grid
- All categories available

### History Tracking
- Shows last 10 jokes
- Displays timestamp for each joke
- Delete individual jokes
- Persists across sessions
- Scrollable history list

### User Feedback
- Loading spinner during API calls
- Toast notifications for actions
- Error messages for failures
- Disabled buttons during loading

## 🎯 Future Enhancements

- Add more joke categories
- Favorite jokes collection
- Export jokes as PDF
- Dark mode toggle
- Joke ratings/likes
- Search functionality
- Multiple language support

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No dependencies, pure JS
- **Fetch API** - For API calls
- **LocalStorage API** - For data persistence
- **Web Share API** - For native sharing

## 📝 License

Free to use and modify for personal or commercial projects.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

---

**Made with ❤️ for joke lovers everywhere! 😂**