const NODE_ENV = "development";
console.log("NODE_ENV", NODE_ENV);
export const serverUrl =
  NODE_ENV.toLowerCase() === "development"
    ? "https://railuserserver.hksoftware.in/api/v1/user"
    : NODE_ENV.toLowerCase() === "prod"
    ? "https://railuserserver.hksoftware.in/api/v1/user"
    : "http://localhost:3000/api/v1/";
