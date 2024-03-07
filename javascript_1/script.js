// Constants
const MAX_CANDLES = 4;

// Function to display a popup when "Shop Now" button is clicked
function displayPopup(candleName) {
  alert("You clicked Shop Now for " + candleName);
}

// Function to load candles
function loadCandles() {
  // Simulated candle data
  const candles = [
    { name: 'Candle Name 1', description: 'Description of the first candle.', image: 'candle1.jpg' },
    { name: 'Candle Name 2', description: 'Description of the second candle.', image: 'candle2.jpg' },
    { name: 'Candle Name 3', description: 'Description of the third candle.', image: 'candle3.jpg' },
    { name: 'Candle Name 4', description: 'Description of the fourth candle.', image: 'candle4.jpg' }
  ];

  // Select the featured candles section
  const featuredCandlesSection = document.getElementById('featured-candles');

  // Clear the featured candles section
  featuredCandlesSection.innerHTML = '';

  // Loop through candles and add them to the featured candles section
  for (let i = 0; i < Math.min(candles.length, MAX_CANDLES); i++) {
    const candle = candles[i];

    // Create candle element
    const candleDiv = document.createElement('div');
    candleDiv.classList.add('candle');

    // Create candle image
    const candleImg = document.createElement('img');
    candleImg.src = candle.image;
    candleImg.alt = candle.name;

    // Create candle name
    const candleName = document.createElement('h3');
    candleName.textContent = candle.name;

    // Create candle description
    const candleDescription = document.createElement('p');
    candleDescription.textContent = candle.description;

    // Create "Shop Now" button
    const shopNowBtn = document.createElement('button');
    shopNowBtn.textContent = 'Shop Now';
    shopNowBtn.addEventListener('click', function() {
      displayPopup(candle.name);
    });

    // Append elements to candle div
    candleDiv.appendChild(candleImg);
    candleDiv.appendChild(candleName);
    candleDiv.appendChild(candleDescription);
    candleDiv.appendChild(shopNowBtn);

    // Append candle div to featured candles section
    featuredCandlesSection.appendChild(candleDiv);
  }
}

// Load candles on page load
window.onload = function() {
  loadCandles();
};

// Change color on mouseover
document.getElementById('about-us').onmouseover = function() {
  this.style.color = 'red';
};

// Function to handle button click
function handleClick() {
  const element = document.getElementById('main-heading');
  if (element.style.color === 'blue') {
    element.style.color = 'black';
  } else if (element.style.color === 'black' || element.style.color === '') {
    element.style.color = 'blue';
  }
}

// Set interval to change button color every second
let intervalId;
document.getElementById('change-color-btn').onclick = function() {
  if (!intervalId) {
    intervalId = setInterval(handleClick, 1000);
  }
};

// Clear interval after 5 seconds
setTimeout(function() {
  clearInterval(intervalId);
}, 5000);
