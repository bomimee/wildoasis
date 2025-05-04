import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isFetching } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
        // remove all queries
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isFetching };
}
