const adalaber1 = {
  nombre: "Susana",
  edad: 34,
  profesión: "periodista",
};
/* console.log(
  `Mi nombre es ${adalaber1.nombre}, tengo ${adalaber1.edad} años y soy ${adalaber1.profesión}`
); */

const adalaber2 = {
  nombre: "Rocío",
  edad: 25,
  profesión: "actriz",
};

/* console.log(
  `Mi nombre es ${adalaber2.nombre}, tengo ${adalaber2.edad} años y soy ${adalaber2.profesión}`
); */

function presentacionAdalabers(adalaber) {
  console.log(
    `Mi nombre es ${adalaber.nombre}, tengo ${adalaber.edad} años y soy ${adalaber.profesión}`
  );
} // adalaber es un nombre que le ponemos al parámetro que luego le vamos a pasar.

presentacionAdalabers(adalaber1);
presentacionAdalabers(adalaber2);
