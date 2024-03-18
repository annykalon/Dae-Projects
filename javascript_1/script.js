// Constants
const MAX_DISPLAYED_CANDLES = 4; // Maximum number of candles to display

// Function to display a popup when "Shop Now" button is clicked
function displayShopPopup(candleName) {
  alert("You clicked Shop Now for " + candleName);
}

// Function to load candles
function loadCandles() {
  // Simulated candle data
  const candlesData = [
    { name: 'Serenity', description: 'A calming blend of lavender and vanilla.', image: 'candle1.jpg' },
    { name: 'Tranquility', description: 'Fresh scent of eucalyptus and mint.', image: 'candle2.jpg' },
    { name: 'Harmony', description: 'Warm cinnamon and apple for a cozy atmosphere.', image: 'candle3.jpg' },
    { name: 'Bliss', description: 'Delicate rose and jasmine for a romantic mood.', image: 'candle4.jpg' }
  ];

  // Select the featured candles section
  const featuredCandlesSection = document.getElementById('featured-candles');

  // Clear the featured candles section
  featuredCandlesSection.innerHTML = '';

  // Loop through candles data and add them to the featured candles section
  for (let i = 0; i < Math.min(candlesData.length, MAX_DISPLAYED_CANDLES); i++) {
    const candleData = candlesData[i];

    // Create candle element
    const candleDiv = document.createElement('div');
    candleDiv.classList.add('candle');

    // Create candle image
    const candleImg = document.createElement('img');
    candleImg.src = candleData.image;
    candleImg.alt = candleData.name;

    // Create candle name
    const candleName = document.createElement('h3');
    candleName.textContent = candleData.name;

    // Create candle description
    const candleDescription = document.createElement('p');
    candleDescription.textContent = candleData.description;

    // Create "Shop Now" button
    const shopNowBtn = document.createElement('button');
    shopNowBtn.textContent = 'Shop Now';
    shopNowBtn.addEventListener('click', function() {
      displayShopPopup(candleData.name);
    });

    // Append elements to candle div
    candleDiv.appendChild(candleImg);
    candleDiv.appendChild(candleName);
    candleDiv.appendChild(candleDescription);
    candleDiv.appendChild(shopNowBtn);

    // Append candle div to featured candles section
    featuredCandlesSection.appendChild(candleDiv);
  }

  // Output to console
  console.log("Candles loaded successfully.");
  // Output to browser screen via DOM
  const outputMessage = document.createElement('p');
  outputMessage.textContent = "Candles loaded successfully.";
  document.body.appendChild(outputMessage);
}

// Load candles on page load
window.onload = function() {
  loadCandles();
};

// Change color of the about-us section on mouseover
document.getElementById('about-us').onmouseover = function() {
  this.style.color = '#6bb9f0'; // Light blue text color

  // Output to console
  console.log("Mouse over about-us section.");
  // Output to browser screen via DOM
  const outputMessage = document.createElement('p');
  outputMessage.textContent = "Mouse over about-us section.";
  document.body.appendChild(outputMessage);
};

// Function to handle button click
function changeHeadingColor() {
  const mainHeading = document.getElementById('pageTitle');
  const currentColor = mainHeading.style.color || window.getComputedStyle(mainHeading).color;
  if (currentColor === 'blue') {
    mainHeading.style.color = '#333'; // Dark gray text color
  } else {
    mainHeading.style.color = 'blue';
  }

  // Output to console
  console.log("Button clicked to change heading color.");
  // Output to browser screen via DOM
  const outputMessage = document.createElement('p');
  outputMessage.textContent = "Button clicked to change heading color.";
  document.body.appendChild(outputMessage);
}

// Set interval to change button color every second
let colorChangeInterval;
document.getElementById('change-color-btn').onclick = function() {
  if (!colorChangeInterval) {
    colorChangeInterval = setInterval(changeHeadingColor, 1000);
  }

  // Output to console
  console.log("Button clicked to start color change interval.");
  // Output to browser screen via DOM
  const outputMessage = document.createElement('p');
  outputMessage.textContent = "Button clicked to start color change interval.";
  document.body.appendChild(outputMessage);
};

// Clear interval after 5 seconds
setTimeout(function() {
  clearInterval(colorChangeInterval);

  // Output to console
  console.log("Color change interval cleared after 5 seconds.");
  // Output to browser screen via DOM
  const outputMessage = document.createElement('p');
  outputMessage.textContent = "Color change interval cleared after 5 seconds.";
  document.body.appendChild(outputMessage);
}, 5000);

