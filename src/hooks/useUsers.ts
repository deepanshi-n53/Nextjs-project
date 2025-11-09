"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUsers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response, "Response");
      return response?.data;
    },
  });

  return { data, isLoading, error };
};
