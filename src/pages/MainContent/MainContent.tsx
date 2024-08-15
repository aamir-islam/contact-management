import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContactList } from "../ContactList/ContactList";
import { Chart } from "../Chart/Chart";

export const MainContent = () => {
  return (
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </div>
  );
};
