import Button from "react-bootstrap/Button";

interface ICustomBtn {
  name: string;
  clickFun: Function;
  my?: 1 | 2 | 3 | 4 | 5;
}

const CustomBtn: React.FC<ICustomBtn> = ({ name, clickFun, my }) => {
  const handleClick = () => {
    clickFun();
  };

  return (
    <>
      <Button
        variant="dark"
        onClick={handleClick}
        className={`font-weight-bold text-capitalize my-${my} mr-2 ${name}`}>
        {name}
      </Button>
    </>
  );
};

export default CustomBtn;
