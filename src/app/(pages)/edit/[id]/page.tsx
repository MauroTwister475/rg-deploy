"use client";
import { Form } from "@/app/components/Form";
import { UseVotation } from "@/app/hooks/useVotation";
import { Toast } from "@/app/utils/FeedBack/Toast";
import { URLBACK } from "@/app/constants/URL";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RelatorySchemType,
  relatorySchema,
} from "@/app/(pages)/new_relatory/RelatoryForm/RelatoryForm/schema";
import { Root } from "@/app/(pages)/new_relatory/RelatoryForm";
import ListContries from "@/app/(pages)/new_relatory/RelatoryForm/ListContries";
import { useQuery } from "@tanstack/react-query";
import { Report } from "@/app/@types/Types";
import axios from "axios";
import { useEffect, useState } from "react";
import { PageRoot } from "@/app/components/PageRoot";

interface EditPageProps {
  params: {
    id: number;
  };
}

export default function FormEditRelatoryPage({
  params: { id },
}: EditPageProps) {
  const [report, setReport] = useState<Report>();
  const { onSetIsOpen, isOpen } = Root.useModal();
  const { agree, disagree, abst } = UseVotation();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting },
  } = useForm<RelatorySchemType>({
    resolver: zodResolver(relatorySchema),
  });

  useQuery({
    queryKey: ["relatory"],
    queryFn: async () => {
      const res = await axios.get<Report>(
        `${URLBACK}/report/view-report/${id}`
      );
      setReport(res.data);
      return res.data;
    },
  });

  useEffect(() => {
    setValuesForm();
  }, [report]);

  function setValuesForm() {
    setValue("title", report?.title as string);
    setValue("theme", report?.theme as string);
    setValue("tendencies", report?.tendencies as string);
    setValue("summary", report?.summary as string);
    setValue("reference", report?.reference as string);
    setValue("point", report?.point as string);
    setValue("meeting_number", report?.title as string);
    setValue("decision", report?.decision as string);
    setValue("create_at", report?.create_at as string);
    setValue("comment", report?.comment as string);
    setValue("cod_document", report?.cod_document as string);
    setValue("author", report?.author as string);
    setValue("atribuition", report?.atribuition as string);
    setValue("Angola_participation", report?.Angola_participation as string);
  }

  async function onAddRelatory(data: RelatorySchemType) {
    try {
      await axios.post(`${URLBACK}/votosfavor`, { agree });
      await axios.post(`${URLBACK}/votoscontra`, { disagree });
      await axios.post(`${URLBACK}/votosabstencao`, { abst });

      const votosfavor = (await axios.get(`${URLBACK}/votosfavor`)).data;
      const votoscontra = (await axios.get(`${URLBACK}/votoscontra`)).data;
      const votosemabstencao = (await axios.get(`${URLBACK}/votosabstencao`))
        .data;

      const finalData = {
        ...data,
        votoscontra: votoscontra?.id,
        votosfavor: votosfavor?.id,
        votosemabstencao: votosemabstencao?.id,
      };

      await axios.put(`${URLBACK}/report/update/${id}`, finalData);
      Root.SucessMessage("Relatório actualizado com sucesso!");
    } catch (error) {
      reset();
      Root.ErrorMessage("Ocorreu um erro ao actualizar o relatório.");
    }
  }

  return (
    <PageRoot classeName="w-full mb-20 overflow-auto h-full">
      <form
        onSubmit={handleSubmit(onAddRelatory)}
        className="w-full m-auto h-max text-left align-middle flex flex-col gap-2 items-center py-6 px-10 rounded-md bg-white shadow2"
      >
        <h3 className="text-lg text-gray-500 mr-auto font-semibold">
          Editar Relatório
        </h3>
        <Toast position="top-right" />
        <div className="w-full flex gap-4">
          <Root.InputGroup className="gap-3.5">
            <Form.Input type="text" label="Tema" {...register("theme")} />
            <Form.Input type="text" label="Título" {...register("title")} />
            <Form.Input
              type="text"
              label="Tendências"
              {...register("tendencies")}
            />
            <Form.Input type="text" label="Decisão" {...register("decision")} />
          </Root.InputGroup>
          <Root.InputGroup className="gap- m5-5">
            <Form.Input
              type="text"
              label="Participação de Angola"
              {...register("Angola_participation")}
            />
            <Form.Input type="text" label="Ponto" {...register("point")} />
            <Form.Select
              id="refe"
              label="Referência"
              {...register("reference")}
            >
              <option selected className="text-gray-300 lowercase">
                Selecione uma opção
              </option>
              {Root.REFERENCES.map(({ reference }) => (
                <option key={reference}>{reference}</option>
              ))}
            </Form.Select>
            <Form.Input
              type="text"
              label="Número da reunião"
              {...register("meeting_number")}
            />
          </Root.InputGroup>
          <Root.InputGroup>
            <Form.Input
              type="text"
              label="Atribuição"
              {...register("atribuition")}
            />
            <Form.Input
              type="text"
              label="Código do documento"
              {...register("cod_document")}
            />
            <Form.Input type="date" label="Data" {...register("create_at")} />
            <Form.Button
              type="button"
              className="w-48 ml-auto mt-7 bg-main-500 hover:bg-main-700"
              onClick={() => onSetIsOpen()}
            >
              Selecionar Países
            </Form.Button>
          </Root.InputGroup>
        </div>
        <Root.InputGroup className="flex items-center flex-row">
          <div className="w-full flex flex-col">
            <label className="text-[14px] text-black">
              Resumo
            </label>
            <textarea
              className="w-full h-20 bg-white border resize-none border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block p-2 focus:border-blue-600"
              {...register("summary")}
            ></textarea>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-[14px] text-black ">
              Comentário
            </label>
            <textarea
              className="w-full h-20 bg-white border resize-none border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block p-2 focus:border-blue-600"
              {...register("comment")}
            ></textarea>
          </div>
        </Root.InputGroup>
        <div className="w-full flex justify-between items-center mt-3">
          <Form.Input
            type="text"
            label="Autor/a"
            {...register("author")}
            className="w-[50%]"
          />
          <Form.Button
            type="submit"
            className={`px-6 ml-auto rounded-md ${
              isSubmitting ? "w-max cursor-not-allowed" : "w-48"
            } bg-main-500 disabled:cursor-not-allowed cursor-pointer`}
          >
            {isSubmitting ? "Actualizando..." : "Actualizar"}
          </Form.Button>
        </div>
        <Root.ModalAction
          title="Selecionar Países"
          isOpen={isOpen}
          setIsOpen={onSetIsOpen}
          className="w-[60rem] h-max px-4"
        >
          <ListContries />
        </Root.ModalAction>
      </form>
    </PageRoot>
  );
}
