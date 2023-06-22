const express = require("express");
const axios = require("axios");

const app = express();
const port = 8008;

app.get("/numbers", async (req, res) => {
  const { url } = req.query;
  const urls = Array.isArray(url) ? url : [url];
  const numbers = [];

  try {
    for (const url of urls) {
      const response = await axios.get(url);
      if (response.status === 200) {
        const responseData = response.data;
        if (responseData.numbers && Array.isArray(responseData.numbers)) {
          numbers.push(...responseData.numbers);
        }
      }
    }

    res.json({ numbers });
  } catch (error) {
    console.error("Error fetching numbers:", error);
    res.status(500).json({ error: "Error fetching numbers" });
  }
});

app.listen(port, () => {
  console.log(
    `number-management-service listening at http://localhost:${port}`
  );
});
