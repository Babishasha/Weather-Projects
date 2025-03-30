import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterDramaTwoToneIcon from "@mui/icons-material/FilterDramaTwoTone";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

const Navbar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleSearchClick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
    }
  };

  return (
    <nav
      style={{
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        padding: "10px 30px",
        backgroundColor: "#394867", 
        color: "white",
        width: "94%",
      
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <FilterDramaTwoToneIcon style={{ color: "white" }} />
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Weather</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <TextField
          variant="outlined"
          placeholder="Search city 'Tamil Nadu'"
          size="small"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          style={{
            backgroundColor: "white",
            borderRadius: "2rem",
            width: "22rem",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearchClick}
          style={{ borderRadius: "6px", backgroundColor: "#4682B4", color: "white" }}
        >
          Search
        </Button>
      </div>
      <div
        style={{
          fontSize: "16px",
          fontWeight: "700",
          backgroundColor: "#4682B4",
          height: "35px",
          width: "200px",
          color: "white",
          gap: "6px",
          borderRadius: "6px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <GpsFixedIcon />
        <p style={{ fontSize: "16px", margin: "0" }}>Current Location
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
