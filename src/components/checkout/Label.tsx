import { FieldError } from "react-hook-form";

interface IPropsInput {
  labelValue: string;
  errors: FieldError | undefined;
}

export const Label = (props: IPropsInput) => {
  let errorMessage;
  if (props.errors) {
    errorMessage = props.errors.message;
  }

  return (
    <div className="w-full flex justify-between">
      <label className={`input-label ${errorMessage && "text-red-600"}`}>
        {props.labelValue}
      </label>
      {errorMessage && <span className="input-error">{errorMessage}</span>}
    </div>
  );
};
