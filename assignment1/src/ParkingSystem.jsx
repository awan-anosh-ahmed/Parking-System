
import React, { useState } from "react";

export default function ParkingSystem() {
  const [totalearn, Settotalearn] = useState(0);
  const [regno, Setregno] = useState("");
  const [selectvehicle, Setselectvehicle] = useState("");
  const [vehicles, Setvehicles] = useState([]);
  const [search, Setsearch] = useState("");

  function ParkIN() {
    if (selectvehicle === "car") {
      Settotalearn(totalearn + 100);
    } else if (selectvehicle === "bike") {
      Settotalearn(totalearn + 50);
    }

    Setvehicles([...vehicles, regno]);
    Setregno("");
  }

  function ParkOut(number) {
    Setvehicles(vehicles.filter((value) => value !== number));
  }

  return (
    <div>
      <h1>Parking System</h1>

      <h3>Total Earnings: Rs. {totalearn}</h3>

      <input
        type="text"
        placeholder="Registration Number"
        value={regno}
        onChange={(e) => Setregno(e.target.value)}
        required
      />

      <br />

      <input
        type="radio"
        name="vehicle"
        value="car"
        onChange={(e) => Setselectvehicle(e.target.value)}
      />
      Car

      <input
        type="radio"
        name="vehicle"
        value="bike"
        onChange={(e) => Setselectvehicle(e.target.value)}
      />
      Bike

      <br />

      <button
        onClick={() => {
          if (regno !== "" && selectvehicle !== "") {
            ParkIN();
          } else {
            alert("Enter registration number and select vehicle");
          }
        }}
      >
        Park In
      </button>

      <h2>Search Vehicle</h2>

      <input
        type="search"
        placeholder="Search registration number"
        onChange={(e) => Setsearch(e.target.value)}
      />

      <h2>Vehicles</h2>

      {vehicles
        .filter((value) => value.includes(search))
        .map((value, index) => (
          <div key={index}>
            {value}
            <button onClick={() => ParkOut(value)}>
              Park Out
            </button>
          </div>
        ))}
    </div>
  );
}
