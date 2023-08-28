import { useState } from 'react'
import { userFoodDataMutate } from '../../hooks/userFoodDataMutate';
import { FoodData } from '../../interface/FoodDate';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateValue(value:any): void
}

const Input = ({label, value, updateValue} : InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal(){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate } = userFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData)
    }

    return(
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">Postar</button>
            </div>
        </div>
    )
}