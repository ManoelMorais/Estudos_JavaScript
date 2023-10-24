const bugNum = () => {
  try {
    const number = "123";

    if (number === 123) {
      return "Seu número é 123 - type Number";
    }

    throw new Error('deu ruim')
  } catch (error) {
    // return error;
    // throw new Error(error)
    throw error
  }
};

console.log(bugNum());
console.log("passouuuuuuu")