import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodDate";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response;
}

export function userFoodData(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}