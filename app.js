let a = 10,
  b = 20,
  c = "Hola ",
  d = "Spiderman",
  x = 50;

const saludo = c + d;

console.log(saludo);
console.log("%c Mis variables", "color:blue;");
console.log({ a });
console.log({ b });
console.log({ c });
console.log({ d });

c = "Hola de nuevo";

console.table({ a, b, c, d });
