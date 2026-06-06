// Shopping cart management
let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCartDisplay();
    alert(`${itemName} added to cart!`);
}

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>No items added yet</p>';
        totalSpan.textContent = '0';
        return;
    }

    let cartHTML = '<ul>';
    let total = 0;

    cart.forEach((item, index) => {
        cartHTML += `<li>${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})" style="color: red; cursor: pointer; border: none; background: none; font-weight: bold;">✕</button></li>`;
        total += item.price;
    });

    cartHTML += '</ul>';
    cartItemsDiv.innerHTML = cartHTML;
    totalSpan.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function scrollToOrder() {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.order-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (cart.length === 0) {
                alert('Please add items to your cart first!');
                return;
            }

            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const phone = form.querySelector('input[type="tel"]').value;
            const address = form.querySelector('textarea').value;

            const orderDetails = `
Order Confirmation!

Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}

Items:
${cart.map(item => `- ${item.name}: ₹${item.price}`).join('\n')}

Total: ₹${cart.reduce((sum, item) => sum + item.price, 0)}

Your order will be delivered by drone in 10-15 minutes!
Thank you for choosing Air Dosa! 🚁🍲
            `;

            alert(orderDetails);
            
            // Reset form and cart
            form.reset();
            cart = [];
            updateCartDisplay();
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});