"use client";
import { DataContent } from './DataContent'
import { UseVotation } from '@/app/hooks/useVotation';

export function Contries() {
    const { abst, agree, disagree } = UseVotation();
    console.log( { agree, disagree, abst });

    // FAZER SO O FILTRO NOS PAISES QUE ESTAO VOTANDO NAQUELE MOMENTO******6
    return (
        <>
            <DataContent content="Países a favor">
                {agree.sort().map((country) => (
                    <span
                        key={country.id}
                        className="text-black text-md inline-block mr-2"
                    >
                        {country.name},
                    </span>
                ))}
            </DataContent>

            <DataContent content="Países contra">
                {disagree.sort().map((country) => (
                    <span
                        key={country.id}
                        className="text-black text-md inline-block mr-2"
                    >
                        {country.name},
                    </span>
                ))}
            </DataContent>
            <DataContent content="Países em abstenção">
                {abst.sort().map((country) => (
                    <span
                        key={country.id}
                        className="text-black text-md inline-block mr-2"
                    >
                        {country.name},
                    </span>
                ))}
            </DataContent>
            <h2>Ola contries</h2>
        </>
    )
}
