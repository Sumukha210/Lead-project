import React, { useState } from "react";
import { useAppDispatch } from "../../Redux/hooks";
import { updateLead } from "../../Redux/Lead/LeadSlice";
import CustomBtn from "../common/CustomBtn";
import CustomModal from "../CustomModal";
import DeleteLeadModalContent from "../CustomModal/DeleteLeadModal";
import UpdateModalContent from "../CustomModal/UpdateModal";

export interface ITableContent {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  locationType: string;
  locationString: string;
  _id: string;
}

const TableContent: React.FC<ITableContent> = ({
  firstName,
  lastName,
  email,
  mobile,
  locationType,
  locationString,
  _id,
}) => {
  //related to update modal
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  //related to delete modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useAppDispatch();

  //related to update modal starts
  const handleMarkUpdate = () => {
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  const handleFormSubmit = (_id: string, data: string) => {
    dispatch(updateLead({ id: _id, data }));
  };
  //related to update modal ends

  // related to delete modal starts
  const handleMarkDelete = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  // related to delete modal ends

  return (
    <>
      <CustomModal
        name="communication"
        show={showUpdateModal}
        handleClose={handleCloseUpdateModal}>
        <UpdateModalContent
          _id={_id}
          handleClose={handleCloseUpdateModal}
          handleFormSubmit={handleFormSubmit}
        />
      </CustomModal>

      <CustomModal
        name="do you wish to delete this lead"
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}>
        <DeleteLeadModalContent
          _id={_id}
          handleClose={handleCloseDeleteModal}
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
