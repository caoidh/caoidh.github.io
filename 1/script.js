const items = ["петя", "муж", "лох"];
let secretItem = items[Math.floor(Math.random() * items.length)];
let attempts = 3;

function checkGuess() {
  const guess = document.getElementById("guess").value.toLowerCase();
  const result = document.getElementById("result");

  if (guess === secretItem) {
    result.textContent = "Поздравляем! Вы угадали!";
  } else {
    attempts--;
    if (attempts === 0) {
      result.textContent = `Увы, вы проиграли. Загаданный предмет был: ${secretItem}.`;
    } else {
      result.textContent = `Неверно. У вас осталось ${attempts} попытки.`;
    }
  }
}
