import React from "react";


type StatusProps = "Concorda" | "Discorda" | "Em abstenção";

interface VotationProps {
  id: string,
  status: StatusProps,
  idMember: string,
}

export default async function Home() {
  const res = await fetch(`http://localhost:3333/votations`);
  const votations = await res.json() as VotationProps[]; 

  console.log(votations);
  const agree = votations.filter(item => item.status === 'Concorda');
  console.log("PAISES QUE CONCORDAM: ")
  console.log(agree)

  
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}
