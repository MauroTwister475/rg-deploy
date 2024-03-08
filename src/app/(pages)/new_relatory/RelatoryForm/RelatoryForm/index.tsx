'use client';
import { Form } from "@/app/components/Form";
import { Loading } from "@/app/components/Loading";
import ListContries from "../ListContries";
import { Root } from "..";
import { Toast } from "@/app/utils/FeedBack/Toast";
import { UseVotation } from "@/app/hooks/useVotation";
import { useFormData } from "@/app/hooks/useFormData";
import { api } from "@/app/api/axios/api";
import { FormEvent, useState } from "react";

export function RelatoryForm() {
  const { onSetIsOpen, isOpen } = Root.useModal();
  const { agree: members, disagree, abst } = UseVotation();
  const { setFormData, formData } = useFormData();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value, }));
  };

  async function onHandleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const { 
        Angola_participation, 
        atribuition, 
        cod_document, 
        comment, 
        create_at, 
        decision, 
        meeting_number, 
        point, 
        reference, 
        summary, 
        theme, 
        title 
      } = formData;

      console.log(members)
      // so gera se selecionar pelomenos um contries criar um booelean q estara no contexo para a verificação
      setIsSubmitting(true);
      await api.post("/votosfavor", members);
      await api.post("/votoscontra", disagree);
      await api.post("/votosabstencao", abst);

      const votosfavor = ((await api.get("/votosfavor"))).data;
      const votoscontra = ((await api.get("/votoscontra"))).data;
      const votosemabstencao = ((await api.get("/votosabstencao"))).data;

      await api.post("/report", {
        theme: theme,
        title: title,
        point: point,
        reference: reference,
        atribuition: atribuition,
        cod_document: cod_document,
        Angola_participation: Angola_participation,
        decision: decision,
        summary: summary,
        create_at: create_at,
        meeting_number: meeting_number,
        comment: comment,
        votoscontra: votoscontra?.id,
        votosfavor: votosfavor?.id,
        votosemabstencao: votosemabstencao?.id,
      });
      setIsSubmitting(false);
      Root.SucessMessage("Relatório criado com sucesso!");
    } catch (error) {
      Root.ErrorMessage("Algo deu errado");
    }
  }

  return (
    <form
      method="post"
      onSubmit={onHandleSubmit}
      className="w-full m-auto h-max text-left align-middle flex flex-col gap-2 items-center  py-6 px-10 rounded-md bg-white shadow2"
    >
      <h3 className="text-lg text-gray-500 mr-auto font-semibold">
        Novo Relatório
      </h3>
      <Toast position="top-right" />
      <div className="w-full flex gap-4">
        <Root.InputGroup>
          <Form.Input
            type="text"
            label="Título"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <Form.Input
            type="text"
            label="Tema"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
          />
          <Form.Input
            type="text"
            label="Decisão"
            name="decision"
            value={formData.decision}
            onChange={handleChange}
          />
          <Form.Input
            type="text"
            label="Número da reunião"
            name="meeting_number"
            value={formData.meeting_number}
            onChange={handleChange}
          />
        </Root.InputGroup>
        <Root.InputGroup className="gap-2 m5-5">
          <Form.Input
            type="text"
            label="Participação de Angola"
            name="Angola_participation"
            value={formData.Angola_participation}
            onChange={handleChange}
          />
          <Form.Select
            id="point"
            label="Ponto"
            name="point"
            value={formData.point}
            onChange={handleChange}
          >
            <>
              {Root.POINTS.map(({ point }) => (
                <option key={point}>
                  {point}
                </option>
              ))}
            </>
          </Form.Select>
          <Form.Select
            id="refe"
            label="Referência"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
          >
            {Root.REFERENCES.map(({ reference }) => (
              <option key={reference}>
                {reference}
              </option>
            ))}
          </Form.Select>

        </Root.InputGroup>
        <Root.InputGroup>
          <Form.Input
            type="text"
            label="Atribuição"
            name="atribuition"
            value={formData.atribuition}
            onChange={handleChange}
          />
          <Form.Input
            type="text"
            label="Código do documento"
            name="cod_document"
            value={formData.cod_document}
            onChange={handleChange}
          />
          <Form.Input
            type="date"
            label="Data"
            name="create_at"
            value={formData.create_at}
            onChange={handleChange}
          />
          <Form.Button
            type="button"
            className="w-48 ml-auto bg-main-500 hover:bg-main-700"
            onClick={() => onSetIsOpen()}
          >
            Selecionar Países
          </Form.Button>

        </Root.InputGroup>

      </div>
      <Root.InputGroup className="flex items-center flex-row">
        <div className="w-full flex flex-col">
          <label
            className="text-[14px] text-gray-500 font-semibold"
          >
            Resumo
          </label>
          <textarea
            className='w-full h-20 bg-gray-50 border resize-none uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block p-2 focus:border-blue-600'
            value={formData.summary}
            name="summary"
            onChange={handleChange}
          >
          </textarea>
        </div>
        <div className="w-full flex flex-col">
          <label
            className="text-[14px] text-gray-500 font-semibold"
          >
            Comentário
          </label>
          <textarea
            className='w-full h-20 bg-gray-50 border resize-none uppercase border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block p-2 focus:border-blue-600'
            value={formData.comment}
            name="comment"
            onChange={handleChange}
          >
          </textarea>
        </div>
      </Root.InputGroup>
      <Form.Button
        type="submit"
        className={`w-max px-6 ml-auto rounded-md ${isSubmitting && 'cursor-not-allowed'} bg-main-500 disabled:cursor-not-allowed cursor-pointer`}
      >
        {isSubmitting ? <Loading /> : "Gerar"}
      </Form.Button>
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