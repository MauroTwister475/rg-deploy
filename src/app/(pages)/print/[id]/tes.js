
const test = "12-12-2024";

const refine = test.split(" ");

const form = new Date(test).toLocaleString("BR", {
  dateStyle: "full",
})
refine.forEach(word => {
  if(word.length >= 5) {
    console.log(word.charAt(0).toUpperCase());
  }
});

console.log(form);


