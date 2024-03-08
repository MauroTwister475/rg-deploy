// "use client";
// import { DataContent } from './DataContent'
// import { useEffect, useState } from 'react';
// import { api } from '@/app/api/axios/api';

// interface VotationProps {
//     id: string,
//     status: "Concorda" | "Discorda" | "Em abstenção",
//     idMember: string,
// }

// export function Contries() {
//     const [votations, setVotations] = useState<VotationProps[]>([]);

//     useEffect(() => {
//         async function getVotations() {
//             const res = await api.get(`/${id}`)
//             const votation = res.data;
//             setVotations(votation)
//         }
//         getVotations()
//     }, []);

//     const agree = votations.filter(member => member.status === "Concorda");
//     const disagree = votations.filter(member => member.status === "Discorda");
//     const abst = votations.filter(member => member.status === "Em abstenção");
//     console.log( { agree, disagree, abst });

//     // FAZER SO O FILTRO NOS PAISES QUE ESTAO VOTANDO NAQUELE MOMENTO******6
//     return (
//         <>
//             <DataContent content="Países a favor">
//                 {agree.length === 0 ? <p>Nenhum país</p> : agree.sort().map((country) => (
//                     <span
//                         key={country.idMember}
//                         className="text-black text-md inline-block mr-2"
//                     >
//                         {country.idMember},
//                     </span>
//                 ))}
//             </DataContent>

//             <DataContent content="Países contra">
//                 {disagree.length === 0 ? <p>Nenhum país</p> : disagree.sort().map((country) => (
//                     <span
//                         key={country.idMember}
//                         className="text-black text-md inline-block mr-2"
//                     >
//                         {country.idMember},
//                     </span>
//                 ))}
//             </DataContent>
//             <DataContent content="Países em abstenção">
//                 {abst.length === 0 ? <p>Nenhum país</p> : abst.sort().map((country) => (
//                     <span
//                         key={country.idMember}
//                         className="text-black text-md inline-block mr-2"
//                     >
//                         {country.idMember},
//                     </span>
//                 ))}
//             </DataContent>
//             <h2>Ola contries</h2>
//         </>
//     )
// }
