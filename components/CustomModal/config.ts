export const nameProps = {
  required: "this is required",
  minLength: { value: 4, message: "Min length is 4" },
  maxLength: {
    value: 15,
    message: "Max length is 15",
  },
};

export const emailProps = {
  required: "this is required",
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: "Invalid email address",
  },
};

export const phoneProps = {
  required: "this is required",
  pattern: {
    value: /^[6789]\d{9}$/,
    message: "Invalid phone number",
  },
};
