import Modal from "react-bootstrap/Modal";
import { useAppDispatch } from "../../Redux/hooks";
import { deleteLead, deleteSliceById } from "../../Redux/Lead/LeadSlice";
import CustomBtn from "../common/CustomBtn";

export interface IDeleteLeadModal {
  _id: string;
  handleClose: Function;
}

const DeleteLeadModal: React.FC<IDeleteLeadModal> = ({ _id, handleClose }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteLead(_id));
    dispatch(deleteSliceById(_id));
    handleClose();
  };

  return (
    <>
      <Modal.Footer>
        <CustomBtn name="delete" clickFun={handleDelete} />
        <CustomBtn name="close" clickFun={handleClose} />
      </Modal.Footer>
    </>
  );
};

export default DeleteLeadModal;
