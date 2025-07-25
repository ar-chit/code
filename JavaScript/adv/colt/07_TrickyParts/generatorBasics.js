function* evens(n) {
  while (true) {
    yield n;
    n += 2;
  }
}

function* myCats() {
  yield "Blue";
  yield "Kitty";
  yield "Cream";
  yield "Creedence";
}

function* fibonacci() {
  let a = 0,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
    console.log(`a: ${a}, b: ${b}`);
  }
}

const fibGen = fibonacci();

console.log(fibGen.next().value);

for (let i = 0; i < 20; i++) {
  console.log(fibGen.next().value);
}
