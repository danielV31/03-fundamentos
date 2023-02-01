describe("Example Component", () => {
  test("debe ser mayor a 10", () => {
    // Arreglar
    const value = 5;
    // Estimulo
    value += 2;

    // Observar el resultado
    if (value > 10) {
      //TODO: esta bien
    } else {
      throw `${value} no es mayor a 10`;
    }
  });
});
