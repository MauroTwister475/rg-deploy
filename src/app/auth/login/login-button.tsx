import { Form } from "@/app/components/Form"
import { Loading } from "@/app/components/Loading"

export function LoginButton({ isSubmitting }: { isSubmitting: boolean}) {
  return (
    <Form.Button
      type="submit"
      disabled={isSubmitting}
      className="rounded-md bg-main-500 disabled:cursor-not-allowed cursor-pointer mt-2"
    >
      {isSubmitting ? <Loading /> : "Entrar"}
    </Form.Button>
  )
}
