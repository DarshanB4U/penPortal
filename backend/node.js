const { getfeed } = require("./db");

async function articles() {
  const response = await getfeed();

  console.log(response);
}
articles();
