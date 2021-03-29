import { Schema, model, Document, models } from "mongoose";

export interface ILead extends Document {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  locationType: string;
  locationString: string;
}

const LeadSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    locationType: {
      required: true,
      type: String,
    },
    locationString: {
      required: true,
      type: String,
    },
    status: {
      type: String,
      default: "Created",
      required: false,
    },
    communication: {
      type: String,
      required: false,
      default: null,
    },
    tags: {
      type: String,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

export let LeadModel = models.Lead || model<ILead>("Lead", LeadSchema);
