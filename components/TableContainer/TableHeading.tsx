const Heading: string[] = [
  "name",
  "email",
  "mobile num",
  "location type",
  "location string",
  "action",
];

const TableHeading = () => {
  return (
    <>
      {Heading.map(item => (
        <th className="text-capitalize" key={item}>
          {item}
        </th>
      ))}
    </>
  );
};

export default TableHeading;
