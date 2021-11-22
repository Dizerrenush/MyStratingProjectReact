
export namespace IInputs {

  export type IComponentInput = IComponent;

  export type IComponentTextarea = IComponent;

  interface IComponent extends IDefault{
    label?: string;
    options?: IOptions;
    onChange?(name: string,value: string | number): void;
  }

  export interface IDefault {
    name: string;
    value: string;
  }
  export interface IOptions {
    className?: string;
    required?: boolean;
  }
}
