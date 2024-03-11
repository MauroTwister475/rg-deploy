const dsa = new Date("2024-03-1").toLocaleString("pt", {
  dateStyle: "full",
}).toUpperCase().replace(/D/gi, "d")

console.log(dsa)