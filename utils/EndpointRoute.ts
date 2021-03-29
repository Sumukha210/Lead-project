const EndPointRoute =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://lead-project.vercel.app";

export default EndPointRoute;
