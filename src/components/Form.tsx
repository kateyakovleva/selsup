import React from 'react';
import Input from "./Input";
import {IModel, IParam} from "../types/types";


interface IProps {
    params: IParam[];
    model: IModel;
}

const Form = ({params, model}: IProps) => {
    return (
        <div>
            {params.map((param) => {
                const val = model.paramValues.find(p => p.paramId === param.id)
                let Component: any = () => <div/>;

                switch (param.type) {
                    case 'text':
                        Component = Input;
                        break;
                    //пример
                    case 'number':
                        Component = Input;
                        break;
                }

                return (
                    <Component
                        key={param.id}
                        name={`param_${param.id}`}
                        label={param.name}
                        defaultValue={val?.value}
                    />
                );
            })}
        </div>
    );
};

export default Form;