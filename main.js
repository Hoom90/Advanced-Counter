let counter = 0;
let speed = 1;
const init = () => {
  counter = parseInt(document.querySelector("#Counter").innerHTML);
};

const speedRecursively = (iteration) => {
  if (iteration === 0) {
    return;
  }
  speed *= 2;
  Timer = setTimeout(() => {
    speedRecursively(iteration - 1);
  }, 3000);
};

const handleIncrease = () => {
  speed = 1;
  counter = parseInt(document.querySelector("#Counter").innerHTML);
  counter += 1 * speed;
  document.querySelector("#Counter").innerText = counter;

  Timer2 = setTimeout(() => {
    Timer3 = setInterval(() => {
      counter = parseInt(document.querySelector("#Counter").innerHTML);
      counter += 1 * speed;
      document.querySelector("#Counter").innerText = counter;
    }, 1000);
  }, 500);

  Timer = setTimeout(() => {
    speedRecursively(6);
  }, 3000);
};

const handleDecrease = () => {
  speed = 1;
  counter = parseInt(document.querySelector("#Counter").innerHTML);
  if (counter > 0) {
    counter -= 1 * speed;
    if (counter < 0) {
      counter = 0;
    }
  }
  document.querySelector("#Counter").innerText = counter;
  Timer2 = setTimeout(() => {
    Timer3 = setInterval(() => {
      let counter = parseInt(document.querySelector("#Counter").innerHTML);
      counter -= 1 * speed;
      document.querySelector("#Counter").innerText = counter;
    }, 1000);
  }, 500);

  Timer = setTimeout(() => {
    speedRecursively(6);
  }, 3000);
};

const stopTimer = () => {
  clearTimeout(Timer);
  clearTimeout(Timer2);
  clearTimeout(Timer3);
};

init();
