
import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodDate";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food', data);
    return response;
}

export function userFoodDataMutate(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const queryClient = useQueryClient();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}