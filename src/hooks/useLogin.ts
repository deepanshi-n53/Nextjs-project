"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";

const reqresAxios = axios.create({
  baseURL: "https://reqres.in/api",
  headers: { "Content-Type": "application/json" },
});

interface LoginPayload {
  email: string;
  password: string;
}

export const useLogin = () => {
  const router = useRouter();

  const { mutate: login, isPending } = useMutation({
    mutationFn: async ({ email, password }: LoginPayload) => {
      console.log(email, password);
      const response = await reqresAxios.post("/login", {
        email,
        password,
      });
      return response.data;
    },
    onSuccess: data => {
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    },
    onError: () => {
      alert("Invalid credentials, please try again.");
    },
  });

  return { login, isPending };
};
