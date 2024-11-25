import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const API_URL = "https://api.openuv.io/api/v1/uv";
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const API_KEY = process.env.OPENUV_API_KEY;

if (!API_KEY) {
  console.error("Error: OPENUV_API_KEY is not defined in the .env file.");
  process.exit(1);
}

app.get("/", (req, res) => {
  res.render("index.ejs", { uvData: null, errorMessage: null });
});

app.post("/uv-data", async (req, res) => {
  const { lat, lng } = req.body;
  console.log(lat, lng);

  if (!lat || !lng) {
    return res.render("index.ejs", {
      uvData: null,
      errorMessage: "Latitude and Longitude are required.",
    });
  }
  try {
    const response = await axios.get(API_URL, {
      headers: { "x-access-token": API_KEY },
      params: {
        lat,
        lng,
      },
    });
    
    res.render("index.ejs", { uvData: response.data, errorMessage: null });
  } catch (error) {
    console.error(error.message);
    res.render("index.ejs", {
      uvData: null,
      errorMessage: "Failed to fetch UV data. Please try again.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
