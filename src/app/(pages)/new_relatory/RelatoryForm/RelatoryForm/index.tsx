"use client";
import { Form } from "@/app/components/Form";
import { UseVotation } from "@/app/hooks/useVotation";
import { Loading } from "@/app/components/Loading";
import { Toast } from "@/app/utils/FeedBack/Toast";
import { URLBACK } from "@/app/constants/URL";
import ListContries from "../ListContries";
import { Root } from "..";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { relatorySchema, RelatorySchemType } from "./schema";
import { FinalDataType } from "./types";

export function RelatoryForm() {
  const { onSetIsOpen, isOpen } = Root.useModal();
  const { agree, disagree, abst } = UseVotation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<RelatorySchemType>({
    resolver: zodResolver(relatorySchema),
  });

  async function onAddRelatory(data: RelatorySchemType) {
    try {
      await axios.post(`${URLBACK}/votosfavor`, { agree });
      await axios.post(`${URLBACK}/votoscontra`, { disagree });
      await axios.post(`${URLBACK}/votosabstencao`, { abst });

      const votosfavor = (await axios.get(`${URLBACK}/votosfavor`)).data;
      const votoscontra = (await axios.get(`${URLBACK}/votoscontra`)).data;
      const votosemabstencao = (await axios.get(`${URLBACK}/votosabstencao`))
        .data;

      const finalData: FinalDataType = {
        ...data,
        votoscontra: votoscontra?.id,
        votosfavor: votosfavor?.id,
        votosemabstencao: votosemabstencao?.id,
      };

      console.log(finalData);
      await axios.post(`${URLBACK}/report`, finalData);
      reset();
      Root.SucessMessage("Relatório criado com sucesso!");
    } catch (error) {
      Root.ErrorMessage("Erro ao conectar o servidor.\nTente mais tarde.");
      reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onAddRelatory)}
      className="w-full m-auto h-max text-left align-middle flex flex-col gap-2 items-center  py-6 px-10 rounded-md bg-white shadow2"
    >
      <h3 className="text-lg text-gray-500 mr-auto font-semibold">
        Novo Relatório
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
          <Form.Select id="refe" label="Referência" {...register("reference")}>
            <option selected className="text-gray-300 lowercase">
              Selecione uma opção
            </option>
            {Root.REFERENCES.map(({ reference }) => (
              <option key={reference}>{reference as any}</option>
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
          <label className="text-[14px] text-black font-semibold">Resumo</label>
          <textarea
            className="w-full h-20 bg-white border resize-none border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block p-2 focus:border-blue-600"
            {...register("summary")}
          ></textarea>
        </div>
        <div className="w-full flex flex-col">
          <label className="text-[14px] text-black font-semibold">
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
          {isSubmitting ? <Loading /> : "Gerar"}
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
  );
}
