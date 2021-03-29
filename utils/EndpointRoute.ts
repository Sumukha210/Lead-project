const EndPointRoute =
  process.env.NODE_ENV === "development"
    ? "https://lead-project.vercel.app"
    : "https://vercel.com";

export default EndPointRoute;
