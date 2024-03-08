"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { UserAuth } from "../@types/Types";
import { AxiosError } from "axios"
import { AuthStore } from "@/app/hooks/useAuth";
import { z } from "zod";
import { loginFormSchema } from "../Schemas/reportSchema";
import { api } from "../api/axios/api";

let errorMessage: string | null = null;
export async function errorMessageApi() {
  return errorMessage;
}

let user: UserAuth;

export async function Sign(data: z.infer<typeof loginFormSchema>) {
  let redirectPath: string | null = null;

  try {
    const { email, password } = data;
    const res = await api.post<UserAuth>(`${process.env.BACK_END_URL}/user/login`, {
      email,
      password,
    });

    const userAuth = res.data; // usuario da API autenticado

    if (userAuth) {
      user = userAuth;
      console.log(user);
      AuthStore.getState().onSetAuthUser(user);
      cookies().set('SG.user', JSON.stringify(userAuth), { // tentar setar o token como o usuario todo
        secure: true,
        maxAge: 60 * 60 * 24,
      });

      cookies().set('RG.Token', JSON.stringify(userAuth.token), { //r o token como o usuario todo
        secure: true,
        maxAge: 60 * 60 * 24,
      });
      redirectPath = "/dashboard";
    } else {
      throw new Error("usuario nao autorizado");
    }
  } catch (error: AxiosError | any) {
    redirectPath = "/";

    if (error instanceof AxiosError) {
      if (error?.response && error?.response?.data) {
        errorMessage = error?.response?.data?.message;
        console.log("Erro no servidor:", errorMessage); // mandar isso no usuario
        console.log(errorMessage)
      } else {
        console.log("Erro no servidor:", error?.message);
        console.log(errorMessage)
        errorMessage = "Erro interno do servidor. \nTente novamente mais tarde!";
      }
    }

  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}

export async function getUserAuthenticated() {
  return user;
}
