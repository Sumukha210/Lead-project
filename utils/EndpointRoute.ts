const EndPointRoute =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://vercel.com";

export default EndPointRoute;
