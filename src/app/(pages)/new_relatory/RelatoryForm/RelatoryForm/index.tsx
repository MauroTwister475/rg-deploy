'use client';
import { reportFormSchema, ReportFormData } from "@/app/Schemas/reportSchema"
import { Form } from "@/app/components/Form";
import { Loading } from "@/app/components/Loading";
import { useForm } from "react-hook-form";
import ListContries from "../ListContries";
import { Root } from "..";
import { Toast } from "@/app/utils/FeedBack/Toast";
import { api } from "@/app/api/axios/api";

export function RelatoryForm() {
  const { onSetIsOpen, isOpen } = Root.useModal();

  const { handleSubmit, reset, register, formState: { isSubmitting } }
    = useForm<ReportFormData>({
      resolver: Root.zodResolver(reportFormSchema),
    })

  async function onCreateReport(data: ReportFormData) {
    try {
      // so gera se selecionar pelomenos um contries criar um booelean q estara no contexo para a verificação
      await api.post("/create-report", data);
      Root.SucessMessage("Relatório criado com sucesso!");
      reset();
    } catch (error) {
      Root.ErrorMessage("Algo deu errado");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onCreateReport)}
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
            {...register('title')}
          />
          <Form.Input
            type="text"
            label="Tema"
            {...register('theme')}
          />
          <Form.Input
            type="text"
            label="Decisão"
            {...register('decision')}
          />
          <Form.Input
            type="text"
            label="Número da reunião"
            {...register('number_meeting')}
          />
        </Root.InputGroup>
        <Root.InputGroup className="gap-2 m5-5">
          <Form.Input
            type="text"
            label="Participação de Angola"
            {...register('participation_of_angola')}
          />
          <Form.Select
            id="point"
            label="Ponto"
            {...register("point")}
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
            {...register("reference")}
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
            {...register('atribuition')}
          />
          <Form.Input
            type="text"
            label="Código do documento"
            {...register('cod_document')}
          />
          <Form.Input
            type="date"
            label="Data"
            {...register('data')}
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
            {...register('resume')}
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
            {...register('comment')}
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