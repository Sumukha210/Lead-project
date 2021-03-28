import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";

const NavBar = () => {
  const { push } = useRouter();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand
          className="text-capitalize font-weight-bold"
          onClick={() => push("/")}>
          lead project
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default NavBar;
