import React, { useState } from "react";
import { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, fetchCovid } from "../store/action";
import ClipLoader from "react-spinners/ClipLoader";
import "./table.css";
const Graphic = () => {
  const dispatch = useDispatch();
  const covid19Data = useSelector((state) => state.covid19Data);
  const loading = useSelector((state) => state.loading);
  const countries = useSelector((state) => state.countries);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [chartData, setChartData] = useState({
    labels: ["Confirmed", "Recovered", "Deaths"],
  });
  const [color] = useState("#333");

  useEffect(() => {
    dispatch(fetchCovid(selectedCountry));
  }, [dispatch, selectedCountry]);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    setChartData({
      ...chartData,

      datasets: [
        {
          label: "Covid",
          data: [
            covid19Data.All.confirmed,
            covid19Data.All.recovered,
            covid19Data.All.deaths,
          ],
          backgroundColor: ["#ffb347 ", "#ACD1AF", "#ff6961"],
        },
      ],
    });
  }, [covid19Data]);

  if (loading) {
    return (
      <div className="sweet-loading">
        <ClipLoader color={color} loading={loading} size={50} />
      </div>
    );
  }
  const option = (e) => {
    setSelectedCountry(e.target.value);
  };

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
      <Pie
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
