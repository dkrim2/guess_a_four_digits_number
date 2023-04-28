let secretNumber = generateNumber();

function generateNumber() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const number = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const digit = digits[randomIndex];
    digits.splice(randomIndex, 1);
    number.push(digit);
  }
  return number.join('');
}

function guess() {
  const input = document.getElementById('guessInput').value;
  if (input.length !== 4 || !/^\d+$/.test(input)) {
    alert('Bitte geben Sie eine 4-stellige Zahl ein.');
    return;
  }
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < 4; i++) {
    const digit = input[i];
    if (secretNumber.includes(digit)) {
      if (secretNumber[i] === digit) {
        bulls++;
      } else {
        cows++;
      }
    }
  }
  const guessTableBody = document.getElementById('guessTableBody');
  const row = guessTableBody.insertRow(0);
  const attemptCell = row.insertCell(0);
  attemptCell.textContent = guessTableBody.children.length;
  const guessCell = row.insertCell(1);
  guessCell.textContent = input;
  const bullsCell = row.insertCell(2);
  bullsCell.innerHTML = '<i class="fas fa-bull"></i> ' + bulls;
  const cowsCell = row.insertCell(3);
  cowsCell.innerHTML = '<i class="fas fa-cow"></i> ' + cows;
  if (bulls === 4) {
    alert('Herzlichen Glückwunsch! Sie haben die Zahl erraten.');
  }
}

function resetGame() {
  const guessTableBody = document.getElementById('guessTableBody');
  guessTableBody.innerHTML = '';
  document.getElementById('guessInput').value = '';
  secretNumber = generateNumber();
}










