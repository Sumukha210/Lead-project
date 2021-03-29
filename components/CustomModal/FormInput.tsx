import Form from "react-bootstrap/Form";
import { nameProps, emailProps, phoneProps } from "./config";

export interface IFormInput {
  label: string;
  name: string;
  errors: any;
  register: Function;
}

const FormInput: React.FC<IFormInput> = ({ label, name, errors, register }) => {
  return (
    <>
      <Form.Group controlId={`${label}-controlId`} className="w-100 mr-4">
        <Form.Label className="text-capitalize">{label}</Form.Label>
        <Form.Control
          type="text"
          placeholder={label}
          name={name}
          ref={register(
            name === "email"
              ? emailProps
              : name === "mobile"
              ? phoneProps
              : name === "firstName" || name === "name"
              ? nameProps
              : { required: "this is required" }
          )}
        />
        <Form.Text className="pl-2 text-danger font-weight-bold">
          {errors[name]?.message || errors[name]}
        </Form.Text>
      </Form.Group>
    </>
  );
};

export default FormInput;
