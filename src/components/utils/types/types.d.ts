import type {INPUT_TYPE} from "../../Form/types/const";

export namespace IInputs {

  export interface Component {
    label?: string;
    name: string;
    value?: string;
    type?: INPUT_TYPE;
    options?: Options;
    onChange?(name: string,value: string | number): void;
  }

  export interface Options {
    className?: string;
    required?: boolean;
  }
}
