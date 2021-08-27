function temperatureConversor(temperature) {
  try {
    if (
      !temperature.toUpperCase().includes("C") &&
      !temperature.toUpperCase().includes("F")
    ) {
      throw new Error(
        "Deve ser especificado a unidade C para celsius ou F para fahrenheit"
      );
    }
  } catch (err) {
    return err;
  }

  const value = Number(temperature.slice(0, -1));
  const unit = temperature.slice(-1);

  if (unit === "F") {
    const celsius = ((value - 32) * 5) / 9;

    return `${celsius}° C`;

  } else if (unit === "C") {

    const fahrenheit = (value * 9) / 5 + 32;

    return `${fahrenheit}° F`;
  }
}

console.log(temperatureConversor("32F"));
console.log(temperatureConversor("32C"));
