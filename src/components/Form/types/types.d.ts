
import type {IInputs} from "../../utils/types/types";
import type {INPUT_TYPE} from "./const";

export namespace IForm {

  export interface IData {
    inputs: Array<IInput>;
    url:string;
    button_text:string;
  }

  export interface IInput {
    data: IInputs.IComponentInput | IInputs.IComponentTextarea;
    type: INPUT_TYPE;
  }

}
