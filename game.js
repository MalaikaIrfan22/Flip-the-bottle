let score = 0;
let level = 1;
let isFlipping = false;
let gameTitle = 'Bottle Flipping Game';
let themeColor = '#4CAF50';
let buttonStyle = 'round';

// Set the game title and score
document.getElementById('game-title').textContent = gameTitle;
document.getElementById('score').textContent = `Score: ${score}`;
document.getElementById('level').textContent = `Level: ${level}`;

// Redirection feature every 15 seconds
setInterval(() => {
  window.open('https://www.example.com', '_blank');
}, 15000);

// Handle bottle flipping
document.getElementById('flip-btn').addEventListener('click', () => {
  if (isFlipping) return; // Prevent flipping while already in motion

  isFlipping = true;
  document.getElementById('flip-btn').disabled = true;
  let randomResult = Math.random() > 0.5 ? 'success' : 'fail';

  setTimeout(() => {
    if (randomResult === 'success') {
      score += 10;
    } else {
      score -= 5;
    }

    level = Math.floor(score / 50) + 1; // Increase level every 50 points
    updateGameStatus();

    isFlipping = false;
    document.getElementById('flip-btn').disabled = false;
  }, 1500);
});

// Update game status
function updateGameStatus() {
  document.getElementById('score').textContent = `Score: ${score}`;
  document.getElementById('level').textContent = `Level: ${level}`;
}

// Customize the game settings
document.getElementById('customize-btn').addEventListener('click', () => {
  document.getElementById('customization-modal').style.display = 'flex';
});

// Close customization modal
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('customization-modal').style.display = 'none';
});

// Apply customizations
document.getElementById('apply-changes').addEventListener('click', () => {
  gameTitle = document.getElementById('game-name').value || 'Bottle Flipping Game';
  themeColor = document.getElementById('theme-color').value;
  buttonStyle = document.getElementById('button-style').value;

  document.getElementById('game-title').textContent = gameTitle;
  document.getElementById('flip-btn').style.borderRadius = buttonStyle === 'round' ? '50px' : '5px';
  document.getElementById('flip-btn').style.backgroundColor = themeColor;

  document.getElementById('customization-modal').style.display = 'none';
});
let score = 0;
let level = 1;
let isFlipping = false;
let gameTitle = 'Bottle Flipping Game';
let themeColor = '#4CAF50';
let buttonStyle = 'round';

// Set the game title and score
document.getElementById('game-title').textContent = gameTitle;
document.getElementById('score').textContent = `Score: ${score}`;
document.getElementById('level').textContent = `Level: ${level}`;

// Redirection feature every 15 seconds
setInterval(() => {
  window.open('https://www.example.com', '_blank');
}, 15000);

// Handle bottle flipping
document.getElementById('flip-btn').addEventListener('click', () => {
  if (isFlipping) return; // Prevent flipping while already in motion

  isFlipping = true;
  document.getElementById('flip-btn').disabled = true;
  let randomResult = Math.random() > 0.5 ? 'success' : 'fail';

  setTimeout(() => {
    if (randomResult === 'success') {
      score += 10;
    } else {
      score -= 5;
    }

    level = Math.floor(score / 50) + 1; // Increase level every 50 points
    updateGameStatus();

    isFlipping = false;
    document.getElementById('flip-btn').disabled = false;
  }, 1500);
});

// Update game status
function updateGameStatus() {
  document.getElementById('score').textContent = `Score: ${score}`;
  document.getElementById('level').textContent = `Level: ${level}`;
}

// Customize the game settings
document.getElementById('customize-btn').addEventListener('click', () => {
  document.getElementById('customization-modal').style.display = 'flex';
});

// Close customization modal
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('customization-modal').style.display = 'none';
});

// Apply customizations
document.getElementById('apply-changes').addEventListener('click', () => {
  gameTitle = document.getElementById('game-name').value || 'Bottle Flipping Game';
  themeColor = document.getElementById('theme-color').value;
  buttonStyle = document.getElementById('button-style').value;

  document.getElementById('game-title').textContent = gameTitle;
  document.getElementById('flip-btn').style.borderRadius = buttonStyle === 'round' ? '50px' : '5px';
  document.getElementById('flip-btn').style.backgroundColor = themeColor;

  document.getElementById('customization-modal').style.display = 'none';
});
