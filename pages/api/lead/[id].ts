import { NextApiRequest, NextApiResponse } from "next";
import { LeadModel } from "../../../models/Lead";
import dbConnect from "../../../utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "DELETE":
      try {
        await LeadModel.findByIdAndDelete(id);

        res.status(200).json({ success: false, data: null });
      } catch (error) {
        res.status(500).json({ success: false, data: null, error });
      }
      break;

    case "PATCH": {
      console.log(req.body, id);
      try {
        const result = await LeadModel.findOneAndUpdate({ _id: id }, req.body, {
          new: true,
        });
        res.status(200).json({ success: false, data: result });
      } catch (error) {
        res.status(500).json({ success: false, data: null, error });
        console.log(error);
      }
    }
  }
};

export default handler;
