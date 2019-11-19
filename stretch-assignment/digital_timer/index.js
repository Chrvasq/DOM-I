const digits = document.querySelectorAll(".digit");
const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

function main() {
  function endTimer(timerInterval) {
    clearInterval(timerInterval);
    digits.forEach(digit => digit.classList.add("redDigit"));
  }

  function incrementTimer(string) {
    let num = Number(string) + 1;
    return num.toString();
  }

  function updateTimer(ms) {
    if (ms === 10000) {
      secondTens.textContent = "1";
      secondOnes.textContent = "0";
      msTens.textContent = "0";
      msHundreds.textContent = "0";
    } else if (ms % 1000 === 0) {
      secondOnes.textContent = incrementTimer(secondOnes.textContent);
      msHundreds.textContent = "0";
      msTens.textContent = "0";
    } else if (ms % 100 === 0) {
      msHundreds.textContent = incrementTimer(msHundreds.textContent);
      msTens.textContent = "0";
    } else {
      msTens.textContent = incrementTimer(msTens.textContent);
    }
  }

  function startTimer() {
    let ms = 0;
    secondTens.textContent = "0";
    secondOnes.textContent = "0";
    msTens.textContent = "0";
    msHundreds.textContent = "0";

    const timerInterval = window.setInterval(() => {
      ms += 10;
      if (ms === 10000) {
        endTimer(timerInterval);
      }
      updateTimer(ms);
    }, 10);
  }

  startTimer();
}

main();
