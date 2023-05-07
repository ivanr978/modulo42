const rollDice = () => Math.floor(Math.random() * 6) + 1;

const playGame = (number, bet, diceNumber) => {
  if (number === diceNumber) {
    return bet * 2;
  } else {
    return -bet;
  }
};

const startGame = () => {
  let money = 500;
  while (money > 0 && money < 1000) {
    const number = parseInt(prompt("¿A qué número quieres apostar? (1-6)"));
    const bet = parseInt(prompt("¿Cuántos pesos quieres apostar?"));
    if (bet <= money) {
      const diceNumber = rollDice();
      const result = playGame(number, bet, diceNumber);
      money += result;
      alert(`Has apostado ${bet} pesos al número ${number} y ha salido el número ${diceNumber}. ${result > 0 ? `¡Has ganado ${result} pesos!` : "Lo siento, has perdido la apuesta."} Tu saldo actual es de ${money} pesos.`);
    } else {
      alert("No tienes suficientes pesos para realizar esta apuesta.");
    }
  }
  if (money <= 0) {
    alert("Lo siento, te has quedado sin dinero.");
  } else {
    alert("¡Enhorabuena, has ganado el juego!");
  }
};

   