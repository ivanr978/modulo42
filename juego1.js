// genera numero aleatoreo entre 1 y 6
const tiraDado = () => Math.floor(Math.random() * 6) + 1;

// reglas del juego 

const juegaDado = (numero, plata, numeroDado) => {
  if (numero === numeroDado) {
    return plata * 2;
  } else {
    return -plata;
  }
};
// parte el juego con 500 en el bolsillo , el bolsillo puede estar entre 0 y 1000 pierde todo o gana el juego con 1000
const iniciaJuegaDado = () => {
  let bolsillo = 500;
  while (bolsillo > 0 && bolsillo < 1000) {
    // elige numero a apostar
    const numero = parseInt(prompt("¿A qué número quieres apostar? (1-6)"));
    // elige plata de lo que hay en el bolsillo para apostar
    const plata = parseInt(prompt("¿Cuántos pesos quieres apostar?"));
    // puede apostar como maximo lo que tiene en el bolsillo
    if (plata <= bolsillo) {
      const numeroDado = tiraDado();
      const result = juegaDado(numero, plata, numeroDado);
      bolsillo += result;
      alert(`Has apostado ${plata} pesos al número ${numero} y ha salido el número ${numeroDado}. ${result > 0 ? `¡Has ganado ${result} pesos!` : "Lo siento, has perdido la apuesta."} Tu saldo actual es de ${bolsillo} pesos.`);
    } else {
      alert("No tienes suficientes pesos para realizar esta apuesta.");
    }
  }
  if (bolsillo <= 0) {
    alert("Lo siento, eres pobre y sin ssuerte.");
  } else {
    alert("¡has ganado el juego! presta luca");
  }
};