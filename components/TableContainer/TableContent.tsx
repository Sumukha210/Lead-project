import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../Redux/hooks";
import { deleteSliceById } from "../../Redux/Lead/LeadSlice";
import CustomBtn from "../common/CustomBtn";
import CustomModal from "../CustomModal";
import UpdateModalContent from "../CustomModal/UpdateModal";

export interface ITableContent {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  locationType: string;
  locationString: string;
  id: string;
  // handleShowUpdateModal: Function;
}

const TableContent: React.FC<ITableContent> = ({
  firstName,
  lastName,
  email,
  mobile,
  locationType,
  locationString,
  id,
  // handleShowUpdateModal,
}) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const dispatch = useDispatch();

  const handleMarkUpdate = () => {
    console.log("mark update", id);
    handleShowUpdateModal(id);
  };

  const handleMarkDelete = () => {
    console.log("mark delete", id);
    dispatch(deleteSliceById(id));
  };

  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  const handleShowUpdateModal = (id: string) => {
    setShowUpdateModal(true);
    console.log("id is", id);
  };

  const handleFormSubmit = (id: string, data: string) => {
    console.log("form submit message and id is", id, data);
  };

  return (
    <>
      <CustomModal
        name="communication"
        show={showUpdateModal}
        handleClose={handleCloseUpdateModal}>
        <UpdateModalContent
          id={id}
          handleClose={handleCloseUpdateModal}
          handleFormSubmit={handleFormSubmit}
        />
      </CustomModal>

      <tr>
        <td>{`${firstName} ${lastName}`}</td>
        <td>{email}</td>
        <td>{mobile}</td>
        <td>{locationType}</td>
        <td>{locationString}</td>
        <td className="d-flex">
          <CustomBtn name="mark update" clickFun={handleMarkUpdate} />
          <CustomBtn name="mark delete" clickFun={handleMarkDelete} />
        </td>
      </tr>
    </>
  );
};

export default TableContent;
