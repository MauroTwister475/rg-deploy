"use client"
import Link from "next/link";
import { Form } from "@/app/components/Form";
import { Toast } from "@/app/utils/FeedBack/Toast";
import { TitleSection } from "../TitleSection";
import { useForm } from "react-hook-form";
import { Sign, errorMessageApi, getUserAuthenticated } from "@/app/actions/login";
import { ErrorMessage } from "@/app/utils/FeedBack/Messages";
import { LoginButton } from "./login-button";
import { ImageRight } from "./image-side";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessageField } from "@/app/components/ErrorMessageField";
import { LoginFormData, loginFormSchema } from "@/app/Schemas/reportSchema";

export default function Login() {
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  async function handleLogin(data: LoginFormData) {
    const { email, password } = data;
    await Sign({ email, password });
    
    const message = await errorMessageApi();
    const user = await getUserAuthenticated();

    if(user) {
      localStorage.setItem("SG.User", JSON.stringify(user));
    }
    ErrorMessage(message);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-[54rem] h-full flex flex-col gap-2 items-center justify-center px-8 mb-24 lg:mb-0 lg:px-32"
      >
        <TitleSection title="Faça o seu login" className="text-[1.5rem]" />
        <Toast position="top-right" />
        <div className="w-full flex flex-col gap-4 justify-center">
          <Form.Input
            type="text"
            placeholder="Endereço de email"
            {...register("email")}
          >
            {errors?.email && <ErrorMessageField>{errors?.email.message}</ErrorMessageField>}
          </Form.Input>
          <div className="flex flex-col items-end">
            <Form.Input
              type="password"
              placeholder="Palavra-passe"
              {...register("password")}
            >
              {errors?.password && <ErrorMessageField>{errors?.password.message}</ErrorMessageField>}
            </Form.Input>
          </div>
        </div>
        <LoginButton isSubmitting={isSubmitting} />
      </form >
      <ImageRight />
    </div >
  );
}