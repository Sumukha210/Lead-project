import TableContainer from "../components/TableContainer";
import Container from "react-bootstrap/Container";
import CustomBtn from "../components/common/CustomBtn";
import { useEffect, useState } from "react";
import CustomModal from "../components/CustomModal";
import AddLeadModalContent from "../components/CustomModal/AddLeadModal";
import { fetchAllLead } from "../Redux/Lead/LeadSlice";
import { useAppDispatch } from "../Redux/hooks";

const Home = () => {
  const [AddLeadModal, setShowAddLeadModal] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllLead());
  }, []);

  const handleCloseAddLeadModal = () => setShowAddLeadModal(false);

  const handleShowAddLeadModal = () => setShowAddLeadModal(true);

  return (
    <Container>
      <CustomModal
        name="add lead"
        handleClose={handleCloseAddLeadModal}
        show={AddLeadModal}>
        <AddLeadModalContent handleClose={handleCloseAddLeadModal} />
      </CustomModal>

      <CustomBtn name="add lead" clickFun={handleShowAddLeadModal} my={4} />
      <TableContainer />
    </Container>
  );
};

export default Home;
