// App.jsx or AccountantDashboard.jsx
import React, { useContext, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { userDataContext } from "../Context-Api/UserContext";
import AccountantSidebar from "./AccountantSidebar";

export default function AccountantDashboard() {
    const {userData} = useContext(userDataContext);
  const summaryData = [
    { title: "Total Fees", amount: "₹1,20,000", color: "bg-green-500" },
    { title: "Pending Fees", amount: "₹30,000", color: "bg-yellow-500" },
    { title: "Monthly Expenses", amount: "₹50,000", color: "bg-red-500" },
    { title: "Salaries Paid", amount: "₹40,000", color: "bg-blue-500" },
  ];

  const chartData = [
    { name: "Jan", Income: 40000, Expense: 24000 },
    { name: "Feb", Income: 30000, Expense: 13980 },
    { name: "Mar", Income: 20000, Expense: 9800 },
    { name: "Apr", Income: 50000, Expense: 25000 },
  ];
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    if(userData){
      setLoading(false);
    }
  },[userData])
  if(loading) return <p>Loading Data...</p>
  //console.log("Accoutant Role",userData.role);
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
<AccountantSidebar/>
      {/* Main Dashboard Area */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome {userData.name} to Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryData.map((card, i) => (
            <div
              key={i}
              className={`p-4 rounded shadow text-white ${card.color} transform hover:scale-105 transition duration-300`}
            >
              <h3 className="text-lg">{card.title}</h3>
              <p className="text-2xl font-bold">{card.amount}</p>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="mt-10 bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Income vs Expense</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Income" fill="#10B981" />
              <Bar dataKey="Expense" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
