// export interface IParam {
//     id: number;
//     name: string;
//     value: string;
// }

export type EType = 'text' | 'number'| 'checkbox';
export interface IParam {
    id: number;
    name: string;
    type: EType
}
export interface IParamValue {
    paramId: number;
    value: string;
}
export interface IModel {
    paramValues: IParamValue[];
}
export interface Props {
    params: IParam[];
    model: IModel;
}


