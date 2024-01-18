// Dummy data
const coffeeData = [
    { name: 'Espresso', price: '$2.50', rating: '⭐⭐⭐', location: 'Café A', image: 'images/1.jpeg' },
    { name: 'Latte', price: '$4.00', rating: '⭐⭐⭐⭐', location: 'Café B', image: 'images/2.jpeg' },
    { name: 'Cappuccino', price: '$3.75', rating: '⭐⭐⭐', location: 'Café C', image: 'images/3.jpeg' },
    { name: 'Americano', price: '$3.00', rating: '⭐⭐⭐⭐', location: 'Café D', image: 'images/4.jpg' },
    { name: 'Mocha', price: '$4.50', rating: '⭐⭐⭐⭐', location: 'Café E', image: 'images/5.jpg' },
    { name: 'Flat White', price: '$4.25', rating: '⭐⭐⭐⭐⭐', location: 'Café F', image: 'images/6.jpg' },
    { name: 'Macchiato', price: '$3.25', rating: '⭐⭐', location: 'Café G', image: 'images/7.jpeg' },
    { name: 'Affogato', price: '$5.00', rating: '⭐⭐⭐⭐⭐', location: 'Café H', image: 'images/8.jpeg' },
    { name: 'Irish Coffee', price: '$6.50', rating: '⭐⭐⭐⭐', location: 'Café I', image: 'images/9.jpg' },
    { name: 'Turkish Coffee', price: '$14.75', rating: '⭐⭐⭐⭐⭐', location: 'Café J', image: 'images/10.jpeg' },
    { name: 'U.K Coffee', price: '$9.50', rating: '⭐⭐⭐⭐', location: 'lotus city', image: 'images/11.jpeg' },
    { name: 'Black Coffee', price: '$10.75', rating: '⭐⭐⭐⭐', location: 'los vegas', image: 'images/12.jpeg' },
  ]
  

// Function to filter cards based on search and price range
function filterCards() {
    const searchValue = document.getElementById('coffeeSearch').value.toLowerCase();
    const priceFilter = document.getElementById('priceFilter').value;
  
    const filteredCoffee = coffeeData.filter(coffee => {
      const matchesSearch = coffee.name.toLowerCase().includes(searchValue);
      
      // Convert price to a numeric value for comparison
      const coffeePrice = parseFloat(coffee.price.replace('$', ''));
  
      // Check for price range based on the selected filter
      let matchesPrice = true;
      if (priceFilter === '1-5') {
        matchesPrice = coffeePrice >= 1 && coffeePrice <= 5;
      } else if (priceFilter === '5-10') {
        matchesPrice = coffeePrice > 5 && coffeePrice <= 10;
      } else if (priceFilter === '10+') {
        matchesPrice = coffeePrice > 10;
      }
  
      return matchesSearch && matchesPrice;
    });
  
    renderCoffeeCards(filteredCoffee);
  }
  

// Function to render coffee cards dynamically
function renderCoffeeCards(coffeeArray) {
    const coffeeCardsSection = document.getElementById('coffeeCards');
    coffeeCardsSection.innerHTML = '';

    coffeeArray.forEach(coffee => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = coffee.image; // Replace with actual image source

        const name = document.createElement('div');
        name.innerHTML = `${coffee.name} ☕`;

        const price = document.createElement('div');
        price.innerHTML = `${coffee.price} 💲`;

        const rating = document.createElement('div');
        rating.innerHTML = `${coffee.rating} ⭐`;

        const location = document.createElement('div');
        location.innerHTML = `${coffee.location} 📍`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(rating);
        card.appendChild(location);

        coffeeCardsSection.appendChild(card);
    });
}

// Initial rendering
renderCoffeeCards(coffeeData);

// Event listeners for input and select changes
document.getElementById('coffeeSearch').addEventListener('input', filterCards);
document.getElementById('priceFilter').addEventListener('change', filterCards);
