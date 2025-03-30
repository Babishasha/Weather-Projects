import React from "react";

const FiveDayForecast = ({ forecastData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString + "Z"); 
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
    }).format(date);
  };
  const dailyForecasts = [];
  const seenDates = new Set();

  forecastData.list.forEach((item) => {
    const dateKey = item.dt_txt.split(" ")[0]; 
    if (!seenDates.has(dateKey) && item.dt_txt.includes("12:00:00")) {
      dailyForecasts.push(item);
      seenDates.add(dateKey);
    }
  });

  return (
    <div
      style={{
        backgroundColor: "#4682B4",
        color: "white",
        borderRadius: "0.5rem",
        width: "250px",
        padding: "20px 40px",
      }}
    >
      {dailyForecasts.slice(0, 5).map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "17px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "30px", fontWeight: "bold" }}>
              {Math.round(item.main.temp)}°C
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>
              {formatDate(item.dt_txt)}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px" }}>{item.weather[0].description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FiveDayForecast;
