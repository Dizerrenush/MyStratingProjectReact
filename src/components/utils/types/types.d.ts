
export namespace IInputs {

  export type IComponentInput = IComponent;

  export type IComponentTextarea = IComponent;

  interface IComponent extends IDefault{
    label?: string;
    options?: IOptions;
  }
  export interface IDefault {
    name: string;
    value: string;
    onChange?(name: string, value: string): void
  }
  export interface IOptions {
    className?: string;
    required?: boolean;
  }
}
