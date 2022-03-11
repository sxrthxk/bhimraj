import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE_ID || "",
  accessToken: process.env.TOKEN || "",
});

export default client