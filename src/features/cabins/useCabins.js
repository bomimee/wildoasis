import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
export default function useCabins() {
    const {
        isFetching,
        data: cabins,
        error,
      } = useQuery({
        queryKey: ["cabins"],
        queryFn: getCabins,
      });

      return {isFetching, cabins, error}
}
