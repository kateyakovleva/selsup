import React, {useRef} from 'react';
import Form from "./Form";
import {IModel, IParam} from "../types/types";

const params: IParam[] = [
    {
        "id": 1,
        "name": "Назначение",
        'type': 'text'
    },
    {
        "id": 2,
        "name": "Длина",
        'type': 'text'
    }
]

const model: IModel = {
    "paramValues": [
        {
            "paramId": 1,
            "value": "повседневное"
        },
        {
            "paramId": 2,
            "value": "макси"
        }
    ]
}

const EditPage = () => {
    const form = useRef<HTMLFormElement>(null);
    const getModel = (): IModel => {
        let model: IModel = {paramValues: []};
        if (form.current) {
            const data = new FormData(form.current);
            data.forEach((value, key) => {
                model.paramValues.push({
                    'paramId': Number(key.replace('param_', '')),
                    'value': value?.toString() || ''
                })
            })
        }

        return model;
    }

    return (
        <form ref={form}>
            <Form
                params={params}
                model={model}
            />
        </form>
    );
};

export default EditPage;

