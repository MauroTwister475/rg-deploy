
const test = "segunda, 10 de março de 2024";

const refine = test.split(" ");

refine.forEach(word => {
  if(word.length >= 5) {
    console.log(word.charAt(0).toUpperCase());
  }
});

console.log(refine[0].replace(refine[0].toString()[0], refine[0].toString()[0].toUpperCase()));


