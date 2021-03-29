import Table from "react-bootstrap/Table";
import { useAppSelector } from "../../Redux/hooks";
import CustomSpinner from "../common/CustomSpinner";
import TableContent, { ITableContent } from "./TableContent";
import TableHeading from "./TableHeading";

const TableContainer = () => {
  const leadData = useAppSelector(state => state.leadSlice.data);

  return (
    <>
      {leadData ? (
        <div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <TableHeading />
              </tr>
            </thead>
            <tbody>
              {leadData.map(
                ({
                  firstName,
                  lastName,
                  email,
                  mobile,
                  locationString,
                  locationType,
                  _id,
                }: ITableContent) => (
                  <TableContent
                    key={_id}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    mobile={mobile}
                    locationType={locationType}
                    locationString={locationString}
                    _id={_id}
                  />
                )
              )}
            </tbody>
          </Table>
        </div>
      ) : (
        <CustomSpinner />
      )}
    </>
  );
};

export default TableContainer;
