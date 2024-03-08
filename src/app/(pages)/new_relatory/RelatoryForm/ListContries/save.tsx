// "use client";
// import { useState } from "react";
// import { Contry } from "./Contry";

// const Options = [
//   { state: "Escolher opção" },
//   { state: "Em abstenção" },
//   { state: "Concorda" },
//   { state: "Discorda" },
// ];

// type Position = "Concorda" | "Discorda" | "Em abstenção" | null;

// type ContryData = {
//   id: string,
//   name: string,
//   position: Position,
// }


// export const ContriesDB: ContryData[] = [
//   { 
//     id: "001", 
//     name: "Angola",
//     position: null, 
//   },
//   { 
//     id: "002", 
//     name: "Portugal",
//     position: null,
//   },
//   { 
//     id: "003", 
//     name: "Brasil",
//     position: null, 
//   },
//   { 
//     id: "004", 
//     name: "Namíbia",
//     position: null, 
//   },
//   { 
//     id: "005", 
//     name: "Twisterlandia",
//     position: null, 
//   },
// ];

// export function ContryItem(/*{ name }: Contry*/) {
//   const [Contries, SetContries] = useState<ContryData[]>(ContriesDB);

//   function SelectChange(index: number, newPosition: ContryData['position']) {
//     SetContries((prev) => {
//       const updatedContries = [...prev];
//       updatedContries[index] = { ...updatedContries[index], position: newPosition };
//       return updatedContries;
//     });
//   }

//   const agreeContries = Contries.filter(contry => contry.position === "Concorda");
//   const DisagreeContries = Contries.filter(contry => contry.position === "Discorda");
//   const AbsContries = Contries.filter(contry => contry.position === "Em abstenção");

//   console.log({ 
//     agreeContries,
//     DisagreeContries,
//     AbsContries
//   });

//   function renderContries() {
//     return Contries.map((contry, index) => (
//       <div
//         className="w-full shadow2 h-12 rounded-md bg-white border px-6 flex items-center justify-between"
//         key={index}
//       >
//         <span className="text-gray-500">
//           {contry.name}
//         </span>
//         <select
//           // value={contry?.position}
//           className="w-48 bg-white text-gray-900 text-sm rounded-md outline-none px-2.5 py-1 border-none"
//           onChange={(e) => SelectChange(index, e.target.value as ContryData['position'])}
//         >
//           <option value="unselecte" disabled selected>
//             Escolha uma opção
//           </option>
//           <option value="Concorda">Concorda</option>
//           <option value="Discorda">Discorda</option>
//           <option value="Em abstenção">Em abstenção</option>
//         </select>
//       </div>
//     ))
//   }

//   return (
//     <>
//       {renderContries()}
//     </>
//   );
// }