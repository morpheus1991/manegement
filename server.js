const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "태완이",
      birthday: 961222,
      gender: "남자",
      job: "퍼블리셔",
      lover: "solo",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "규형이",
      birthday: 901023,
      gender: "남자",
      job: "뒤틀린듀오의퍼블리셔",
      lover: "커플",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "츠키",
      birthday: 210,
      gender: "남자",
      job: "귀여움",
      lover: "고양이",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
