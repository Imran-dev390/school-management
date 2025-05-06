import React from "react";

const DashboardCard = ({ title, value, color }) => {
  return (
    <div className={`p-6 rounded-xl shadow-md text-white ${color} transform hover:scale-105 transition duration-300`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl mt-2">{value}</p>
    </div>
  );
};

export default DashboardCard;
