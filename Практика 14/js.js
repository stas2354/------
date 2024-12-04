const postersData = [
    { id: 1, title: "«Властелин колец: Братство Кольца»", image: "Властелин.jpeg", available: 10, cost: 500 },
    { id: 2, title: "«Гарри Поттер и Тайная комната»", image: "Гарри.jpeg", available: 5, cost: 600 },
    { id: 3, title: "«Мстители: Финал»", image: "1.jpeg", available: 0, cost: 700 },
    { id: 4, title: "Нарния", image: "Нарния.jpg", available: 3, cost: 400 },
    { id: 5, title: "«Хоббит, или Туда и обратно»", image: "4674.jpg", available: 3, cost: 400 },
    { id: 6, title: "«Унесённые призраками»", image: "maxresdefault.jpg", available: 3, cost: 400 },
    { id: 7, title: "ОНО", image: "MV.jpg", available: 3, cost: 400 },
    { id: 8, title: "«Один дома»", image: "67.jpeg", available: 3, cost: 400 },
];

let cart = [];
let cartCount = 0;

function createPoster(poster) {
    const posterDiv = document.createElement('div');
    posterDiv.classList.add('col-md-4', 'mb-4', 'poster-card');
    posterDiv.innerHTML = `
        <div class="card">
            <img src="${poster.image}" class="card-img-top" alt="${poster.title}">
            <div class="card-body">
                <h5 class="card-title">${poster.title}</h5>
                <p class="card-text">Доступно: <span id="availability-${poster.id}">${poster.available}</span></p>
                <button class="btn btn-primary buy-ticket-button" data-poster-id="${poster.id}">Купить билет</button>
            </div>
        </div>
    `;
    return posterDiv;
}

function updateAvailability(posterId, newAvailability) {
    const availabilitySpan = document.getElementById(`availability-${posterId}`);
    if (availabilitySpan) {
        availabilitySpan.textContent = newAvailability;
    } else {
        console.error(`Element with ID "availability-${posterId}" not found.`);
    }
}

function handleBuyTicket(posterId) {
    const poster = postersData.find(p => p.id === posterId);
    if (!poster) {
        console.error("Poster not found:", posterId);
        return;
    }
    if (poster.available > 0) {
        poster.available--;
        updateAvailability(posterId, poster.available);
        addToCart(poster);
        updateCartCount();
        updateCartSum();
        updatePosters();
    } else {
        alert("Билеты на этот фильм закончились!");
    }
}

function updateCartCount() {
    const cartCountElement = document.getElementById('total-items');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    } else {
        console.error("cart-count element not found!");
    }
}

function addToCart(poster) {
    const existingItem = cart.find(item => item.id === poster.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        poster.quantity = 1;
        cart.push(poster);
    }
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear the cart items container

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Ваша корзина пуста.</p>';
        document.getElementById('total-items').textContent = 0;
        document.getElementById('total-sum').textContent = 0;
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('card', 'mb-2');
        itemDiv.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">Количество: ${item.quantity} x ${item.cost} руб. = ${item.quantity * item.cost} руб.</p>
            </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    updateCartCount(); // Update the cart count after rendering items
}


function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('total-items').textContent = totalItems;
}

function updateCartSum() {
    let totalSum = 0;
    cart.forEach(item => {
        totalSum += item.quantity * item.cost;
    });
    document.getElementById('total-sum').textContent = totalSum;
}

function clearCart() {
    cart = [];
    localStorage.removeItem('shoppingCart');
    updateCartDisplay();
    updateCartSum();
    cartCount = 0;
    updateCartCount();
}

function updatePosters() {
    postersContainer.innerHTML = '';
    postersData.forEach(poster => {
        const posterElement = createPoster(poster);
        postersContainer.appendChild(posterElement);
    });
    postersContainer.querySelectorAll('.buy-ticket-button').forEach(button => {
        button.addEventListener('click', () => {
            const posterId = parseInt(button.dataset.posterId, 10);
            handleBuyTicket(posterId);
        });
    });
}

const postersContainer = document.getElementById('posters-container');
if (postersContainer) {
    updatePosters();
    const clearCartButton = document.getElementById('clear-cart');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', clearCart);
    } else {
        console.error("'clear-cart' button element not found!");
    }
} else {
    console.error("'posters-container' element not found in the HTML!");
}