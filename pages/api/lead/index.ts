import { NextApiRequest, NextApiResponse } from "next";
import { LeadModel } from "../../../models/Lead";
import dbConnect from "../../../utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const lead = await LeadModel.find();
        return res.status(201).json({ success: true, data: lead });
      } catch (error) {
        res.status(401).json({ success: false, data: null, error });
        console.log(error);
      }
      break;

    case "POST":
      try {
        const newLead = await LeadModel.create(req.body);
        return res.status(201).json({ success: true, data: newLead });
      } catch (error) {
        res.status(500).json({ success: false, data: [], error });
        console.log(error);
      }
  }
};

export default handler;
