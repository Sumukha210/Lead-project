import { NextApiRequest, NextApiResponse } from "next";

const resData = [
  {
    id: "1",
    firstName: "hitesh",
    lastName: "agarwal",
    mobile: "9999",
    email: "email@gmail.com",
    locationType: "city",
    locationString: "india",
  },
  {
    id: "2",
    firstName: "mayank",
    lastName: "agarwal",
    mobile: "9999",
    email: "mayank@gmail.com",
    locationType: "city2",
    locationString: "india",
  },
  {
    id: "3",
    firstName: "omkar",
    lastName: "agarwal",
    mobile: "9999",
    email: "omkar@gmail.com",
    locationType: "city3",
    locationString: "india",
  },
];

const lead = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(201).json(resData);
};

export default lead;
