"use client";
import { FormEvent, useState } from "react";
import { Form } from "@/app/components/Form";
import { UseVotation } from "@/app/hooks/useVotation";
import { useFormData } from "@/app/hooks/useFormData";
import { Loading } from "@/app/components/Loading";
import { Toast } from "@/app/utils/FeedBack/Toast";
import { URLBACK } from "@/app/constants/URL";
import ListContries from "../ListContries";
import { Root } from "..";
import axios from "axios";

export function RelatoryForm() {
  const { onSetIsOpen, isOpen } = Root.useModal();
  const { agree, disagree, abst } = UseVotation();
  const { setFormData, formData, resetFormData } = useFormData();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
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
        title,
        author,
        tendencies,
      } = formData;

      setIsSubmitting(true);
      await axios.post(`${URLBACK}/votosfavor`, { agree });
      await axios.post(`${URLBACK}/votoscontra`, { disagree });
      await axios.post(`${URLBACK}/votosabstencao`, { abst });

      const votosfavor = (await axios.get(`${URLBACK}/votosfavor`)).data;
      const votoscontra = (await axios.get(`${URLBACK}/votoscontra`)).data;
      const votosemabstencao = (await axios.get(`${URLBACK}/votosabstencao`))
        .data;

      await axios.post(`${URLBACK}/report`, {
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
        author: author,
        tendencies: tendencies,
      });
      setIsSubmitting(false);
      resetFormData();

      Root.SucessMessage("Relatório criado com sucesso!");
    } catch (error) {
      Root.ErrorMessage("Erro ao conectar o servidor.\nTente mais tarde.");
      resetFormData();
      setIsSubmitting(false);
    }
  }

  return (
    <form
      method="post"
      onSubmit={onHandleSubmit}
      className="w-full m-auto h-max text-left align-middle flex flex-col -mt-16 gap-2 items-center  py-6 px-10 rounded-md bg-white shadow2"
    >
      <h3 className="text-lg text-gray-500 mr-auto font-semibold">
        Novo Relatório
      </h3>
      <Toast position="top-right" />
      <div className="w-full flex gap-4">
        <Root.InputGroup className="gap-3.5">
          <Form.Input
            type="text"
            label="Tema"
            name="theme"
            required
            value={formData.theme}
            onChange={handleChange}
          />
          <Form.Input
            required
            type="text"
            label="Título"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <Form.Input
            required
            type="text"
            label="Tendências"
            name="tendencies"
            value={formData.tendencies}
            onChange={handleChange}
          />
          <Form.Input
            required
            type="text"
            label="Decisão"
            name="decision"
            value={formData.decision}
            onChange={handleChange}
          />
        </Root.InputGroup>
        <Root.InputGroup className="gap- m5-5">
          <Form.Input
            required
            type="text"
            label="Participação de Angola"
            name="Angola_participation"
            value={formData.Angola_participation}
            onChange={handleChange}
          />
          <Form.Input
            required
            type="text"
            label="Ponto"
            name="point"
            value={formData.point}
            onChange={handleChange}
          />
          <Form.Select
            id="refe"
            required
            label="Referência"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
          >
            <option selected className="text-gray-300 lowercase">
              Selecione uma opção
            </option>
            {Root.REFERENCES.map(({ reference }) => (
              <option key={reference}>{reference}</option>
            ))}
          </Form.Select>
          <Form.Input
            required
            type="text"
            label="Número da reunião"
            name="meeting_number"
            value={formData.meeting_number}
            onChange={handleChange}
          />
        </Root.InputGroup>
        <Root.InputGroup>
          <Form.Input
            required
            type="text"
            label="Atribuição"
            name="atribuition"
            value={formData.atribuition}
            onChange={handleChange}
          />
          <Form.Input
            required
            type="text"
            label="Código do documento"
            name="cod_document"
            value={formData.cod_document}
            onChange={handleChange}
          />
          <Form.Input
            required
            type="date"
            label="Data"
            name="create_at"
            value={formData.create_at}
            onChange={handleChange}
          />
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
          <label className="text-[14px] text-gray-500 font-semibold">
            Resumo
          </label>
          <textarea
            className="w-full h-20 bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block p-2 focus:border-blue-600"
            value={formData.summary}
            name="summary"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="w-full flex flex-col">
          <label className="text-[14px] text-gray-500 font-semibold">
            Comentário
          </label>
          <textarea
            className="w-full h-20 bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-md outline-none focus:ring-primary-600 focus:border-primary-600 block p-2 focus:border-blue-600"
            value={formData.comment}
            name="comment"
            onChange={handleChange}
          ></textarea>
        </div>
      </Root.InputGroup>
      <div className="w-full flex justify-between items-center mt-3">
        <Form.Input
          required
          type="text"
          label="Autor/a"
          name="author"
          className="w-[50%]"
          value={formData.author}
          onChange={handleChange}
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
