// <ScrollArea className="flex gap-4 items-center justify-center">
    //   {report !== undefined ? (
    //     <div
    //       ref={relatoryRef}
    //       className="w-[793px] relative h-max pb-8 px-4 bg-white flex flex-col items-center justify-between mb-2 mx-auto gap-2"
    //     >
    //       <HeaderReport />
    //       <section className="w-full h-full flex gap-2 flex-col mt-6">
    //         <DataContent content="" className="text-center">
    //           <h1 className="text-xl font-bold">{report?.theme}</h1>
    //         </DataContent>
    //         <DataContent content="" className="text-center">
    //           <h1 className="text-xl font-bold">{report?.title}</h1>
    //         </DataContent>
    //         <DataContent className="mt-4 ml-5" content="Ponto da reunião:">
    //           {report?.point}
    //         </DataContent>
    //       </section>
    //       <div className="w-full flex items-end flex-col justify-between px-6">
    //         <h2 className="font-bold text-md">
    //           {report?.cod_document} EX/4.I.E
    //         </h2>
    //         <h1>
    //           <span className="font-bold text-end">Conselho Executivo</span>{" "}
    //           <br />
    //           <span className="mr-auto">{report?.meeting_number}ª reunião</span>
    //         </h1>
    //         <span className="">
    //           {new Date(report!?.create_at)
    //             .toLocaleString("pt", {
    //               dateStyle: "full",
    //             })
    //             .replace(/\b([a-z])/g, function (match) {
    //               return match.toUpperCase();
    //             })
    //             .replace(/\bDe\b/g, "de")
    //             .replace(/\bO\b/g, "o")
    //             .replace(/\bA\b/g, "a")}


    
    //         </span>
    //       </div>
    //       <h1>Resumo</h1>
    //       <div className="w-[95%] text-justify border bg-white max-h-max h-auto border-black p-4">
    //         {report?.summary}
    //       </div>
    //       <div className="w-full flex flex-col gap-4 mt-4 px-6">
    //         <DataContent content="Comentário:">
    //           <span>{report?.comment}</span>
    //         </DataContent>
    //         <DataContent content="Referência:">{report?.reference}</DataContent>
    //         <DataContent content="Documento:">
    //           {report?.cod_document}
    //         </DataContent>
    //         <DataContent content="Participação de Angola:">
    //           {report?.Angola_participation}
    //         </DataContent>
    //         {contriesVote?.votosfavor.members[0] !== undefined ? (
    //           <DataContent content="Países a favor:">
    //             {contriesVote?.votosfavor?.members.map(
    //               (contry: any, index: number) => (
    //                 <span>
    //                   {contry.name}
    //                   {index === contriesVote.votosfavor.members.length - 1
    //                     ? "."
    //                     : ","}
    //                   &nbsp;
    //                 </span>
    //               )
    //             )}
    //           </DataContent>
    //         ) : (
    //           <></>
    //         )}
    //         {contriesVote?.votoscontra.members[0] !== undefined ? (
    //           <DataContent content="Países a contra:">
    //             {contriesVote?.votoscontra?.members.map(
    //               (contry: any, index: number) => (
    //                 <span>
    //                   {contry.name}
    //                   {index === contriesVote.votoscontra.members.length - 1
    //                     ? "."
    //                     : ","}
    //                   &nbsp;
    //                 </span>
    //               )
    //             )}
    //           </DataContent>
    //         ) : (
    //           <></>
    //         )}
    //         {contriesVote?.votosemabstencao.members[0] !== undefined ? (
    //           <DataContent content="Países que se abstiveram:">
    //             {contriesVote?.votosemabstencao?.members.map(
    //               (contry: any, index: number) => (
    //                 <span>
    //                   {contry.name}
    //                   {index ===
    //                   contriesVote.votosemabstencao.members.length - 1
    //                     ? "."
    //                     : ","}
    //                   &nbsp;
    //                 </span>
    //               )
    //             )}
    //           </DataContent>
    //         ) : (
    //           <></>
    //         )}
    //         {report?.tendencies !== undefined && report?.tendencies !== "" && (
    //           <DataContent content="Tendências:">
    //             {report?.tendencies}
    //           </DataContent>
    //         )}
    //         <DataContent content="Decisão:" className="print:mt-32 pt-10">
    //           {report?.decision}
    //         </DataContent>
    //         {report?.author !== undefined && report?.author !== "" && (
    //           <DataContent content="Autor/a:">{report?.author}</DataContent>
    //         )}
    //         <DataContent className="mt-6 page-footer">
    //           <p className="text-black text-[6.5px]">
    //             Construção do modelo: IPIL - Afonso da Silva, Mauro Raimundo,
    //             João Simão e Miguel Manuel
    //             <br />
    //             Coordenação: Paula Henriques
    //           </p>
    //         </DataContent>
    //       </div>
    //     </div>
    //   ) : (
    //     <SkeletonRelatoryPage />
    //   )}
    //   <button
    //     onClick={onPrintReport}
    //     className="w-max bg-main-500 rounded-md text-white p-2 absolute top-0 right-5"
    //   >
    //     Imprimir
    //   </button>
    // </ScrollArea>