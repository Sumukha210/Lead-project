import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import CustomBtn from "../common/CustomBtn";
import { IAddModalContent } from "./AddLeadModal";

interface IUpdateModal extends IAddModalContent {
  _id?: string;
  handleFormSubmit: any;
}

type Inputs = { communication: string };

const UpdateModalContent: React.FC<IUpdateModal> = ({
  handleClose,
  _id,
  handleFormSubmit,
}) => {
  const { register, handleSubmit, errors, reset } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    console.log(data.communication);
    handleFormSubmit(_id, data.communication);
    reset();
    handleClose();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Communication</Form.Label>
          <Form.Control
            as="textarea"
            name="communication"
            ref={register({ required: "this is required" })}
          />
          <Form.Text className="font-weight-bold text-danger">
            {errors.communication?.message}
          </Form.Text>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <CustomBtn name="close" clickFun={handleClose} />

        <Button type="submit" variant="dark" className="font-weight-bold">
          Save
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default UpdateModalContent;
