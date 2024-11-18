// JavaScript Code
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "JavaScript is the language of the Web. - Unknown",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "In JavaScript, you can do anything you want. - Unknown",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Code is like humor. When you have to explain it, it’s bad. - Cory House"
];

function typeWelcomeMessage(message, index) {
  if (index < message.length) {
      document.getElementById('welcome-text').innerHTML += message.charAt(index);
      index++;
      setTimeout(() => typeWelcomeMessage(message, index), 100);
  }
}

window.onload = function() {
  const welcomeMessage = "Welcome to JavaScript";
  typeWelcomeMessage(welcomeMessage, 0);
  getRandomQuote();
}

function changeText() {
  const nameInput = document.getElementById('nameInput');
  const welcomeMessage = document.getElementById('welcomeMessage');
  
  if (nameInput.value) {
      welcomeMessage.innerHTML = `Hello, ${nameInput.value}! Welcome to the world of JavaScript!`;
      nameInput.style.display = 'none'; // Hide the input field after entering the name
  } else {
      welcomeMessage.innerHTML = 'Please enter your name!';
  }
}

function getRandomQuote() {
  const quoteDisplay = document.getElementById('quoteDisplay');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.innerHTML = quotes[randomIndex];
}

function animation() {
  const jsConfetti = new JSConfetti();

  // Trigger the confetti animation
  jsConfetti.addConfetti({
      emojis: ['🌈', '⚡', '💥', '✨', '💫', '🌸'],
      emojiSize: 40,
      confettiNumber: 100,
      spread: 70
  });
}
