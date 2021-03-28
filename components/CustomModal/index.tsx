import Modal from "react-bootstrap/Modal";

export interface ICustomModal {
  show: boolean;
  handleClose: Function;
  children: React.ReactNode;
  name: string;
}

const CustomModal: React.FC<ICustomModal> = ({
  handleClose,
  show,
  children,
  name,
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="large-size-modal">
        <Modal.Header closeButton className="bg-dark text-light">
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        {children}
      </Modal>
    </>
  );
};

export default CustomModal;
