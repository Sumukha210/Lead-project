import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import FormInput from "./FormInput";
import CustomBtn from "../common/CustomBtn";
import Button from "react-bootstrap/Button";
import { useAppDispatch } from "../../Redux/hooks";
import { saveLead } from "../../Redux/Lead/LeadSlice";

export type Inputs = {
  example: string;
  exampleRequired: string;
};

export interface IAddModalContent {
  handleClose: Function;
}

const AddLeadModalContent: React.FC<IAddModalContent> = ({ handleClose }) => {
  const { register, handleSubmit, errors, reset } = useForm<Inputs>();
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(saveLead(data));
    reset();
    handleClose();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <div className="d-sm-flex justify-content-between">
            <FormInput
              label="first name"
              register={register}
              errors={errors}
              name="firstName"
            />

            <FormInput
              label="last name"
              register={register}
              errors={errors}
              name="lastName"
            />
          </div>

          <div className="d-sm-flex justify-content-between">
            <FormInput
              label="email id"
              register={register}
              errors={errors}
              name="email"
            />

            <FormInput
              label="mobile number"
              register={register}
              errors={errors}
              name="mobile"
            />
          </div>

          <div className="d-sm-flex justify-content-between">
            <FormInput
              label="location Type"
              register={register}
              errors={errors}
              name="locationType"
            />

            <FormInput
              label="location String"
              register={register}
              errors={errors}
              name="locationString"
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <CustomBtn name="close" clickFun={handleClose} />
          <Button type="submit" variant="dark" className="font-weight-bold">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default AddLeadModalContent;
