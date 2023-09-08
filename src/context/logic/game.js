export function generateRandomNum() {
  const numeroDecimal = Math.random();
  const numeroEntre0y8 = numeroDecimal * 9;
  const numeroEnteroAleatorio = Math.floor(numeroEntre0y8);
  return numeroEnteroAleatorio;
}
