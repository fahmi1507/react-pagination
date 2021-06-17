import React, { useState } from "react";
import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, fetchCovid } from "../store/action";
const Graphic = () => {
  const dispatch = useDispatch();
  const covid19Data = useSelector((state) => state.covid19Data);
  const loading = useSelector((state) => state.loading);
  const countries = useSelector((state) => state.countries);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [chartData, setChartData] = useState({
    labels: ["Confirmed", "Recovered", "Deaths"],
  });

  useEffect(() => {
    dispatch(fetchCovid(selectedCountry));
  }, [dispatch, selectedCountry]);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  useEffect(() => {
    setChartData({
      ...chartData,

      datasets: [
        {
          label: "covid",
          data: [covid19Data.All.confirmed, covid19Data.All.recovered, covid19Data.All.deaths],
          backgroundColor: ["#ffb347 ", "#ACD1AF", "#ff6961"],
        },
      ],
    });
  }, [covid19Data]);

  if (loading) {
    return <h2>loading...</h2>;
  }

  const option = (e) => {
    setSelectedCountry(e.target.value);
  };

  console.log(selectedCountry, "<<<<<<<");
  return (
    <div className="container">
      <select name="" id="" onChange={(e) => option(e)}>
        <option value="">select country</option>
        {countries.map((e, i) => (
          <option key={i} value={e.name}>
            {e.name}{" "}
          </option>
        ))}
      </select>
      <h3>Covid-19 Cases in {covid19Data.All.country}</h3>
      <Doughnut
        data={chartData}
        options={{
          responsive: true,

          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default Graphic;
