import "./lib/db";
import express from "express";
import countryRoutes from "./routes/country";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ slackUsername: "Thorsten", backend: true, age: 12, bio:"I am Thorsten hoping to be a badass backend dev" });
});

app.use("/countries", countryRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
