import React, { Component } from "react";
import axios from "axios";
export default class CountryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myData: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((Response) => {
        this.setState({ myData: Response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const countryList = this.state.myData;
    const countryName = countryList.map((countryData) => {
      return <li>{countryData.name.common}</li>;
    });
    const cityName = countryList.map((cityData) => {
      return <li>{cityData.capital}</li>;
    });
    return (
      <div>
        <div>
          <ol>{countryName}</ol>
        </div>
        <div>
          <ol>{cityName}</ol>
        </div>
      </div>
    );
  }
}
