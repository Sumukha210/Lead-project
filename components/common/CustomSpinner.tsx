import Spinner from "react-bootstrap/Spinner";

const CustomSpinner = () => {
  return (
    <div className="d-flex w-100 justify-content-center align-items-center my-5">
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default CustomSpinner;
