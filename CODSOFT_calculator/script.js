// function appendToDisplay(value) {
//   disc.value += value;
// }


let disc = document.getElementById('disc');

function appendToDisplay(value) {
  disc.value += value;
}

function clearDisplay() {
  disc.value = '';
}

function backspace() {
    disc.value = disc.value.slice(0, -1);
}

function calculateResult() {
  try {
    disc.value = eval(disc.value);
  } catch (error) {
    disc.value = 'error!';
  }
}