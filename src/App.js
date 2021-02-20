import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
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
];
class App extends Component {
  render() {
    return (
      <div>
        {customers.map((custormer) => {
          return (
            <Customer
              key={custormer.id}
              name={custormer.name}
              birthday={custormer.birthday}
              gender={custormer.gender}
              job={custormer.job}
              id={custormer.id}
              image={custormer.image}
              lover={custormer.lover}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
