// HomePage.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";

export default function HomePage() {
  const [groupBy, setGroupBy] = useState("status");
  const [orderingBy, setOrderingBy] = useState("priority");

  return (
    <div>
      <Navbar setGroupBy={setGroupBy} setOrderingBy={setOrderingBy} />
      <MainSection groupBy={groupBy} orderingBy={orderingBy} />
    </div>
  );
}
