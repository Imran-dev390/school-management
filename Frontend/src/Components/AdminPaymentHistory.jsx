import React, { useState } from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
const AdminPaymentHistory = () => {
    const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [total, setTotal] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
    const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [payments, setPayments] = useState([]);


  const dummyPayments = [
  { id: "000002", amount: "₹4,000.00", method: "Cash", tx: "-", date: "13-07-2025", note: "-", invoice: "ion1", status: "active" },
  { id: "000003", amount: "₹2,000.00", method: "Cash", tx: "-", date: "13-07-2025", note: "-", invoice: "0001 - ₹5,500.00 Payable", status: "deleted" },
  // ...more items
];
    const fetchPayments = () => {
    setLoading(true);
    setTimeout(() => {
      setPayments(dummyPayments);
      setTotal("₹13,900.00");
      setLoading(false);
    }, 800);
  };

  const exportTable = (e) => {
    e.preventDefault();
    alert("Exporting...");
  };

  const filtered = payments.filter(p =>
    p.id.includes(search) ||
    p.method.toLowerCase().includes(search.toLowerCase()) ||
    p.invoice.toLowerCase().includes(search.toLowerCase())
  );
  const handleGetHistory = () => {
    // Simulated fetch (you can replace with real fetch)
    console.log('Fetching payment history for:', { startDate, endDate });
    setTotal('₹12,900.00');
  };

  const handleExport = () => {
    // Export logic (CSV, Excel, etc.)
    console.log('Exporting payment data...');
  };

  return (
    <AdminLayout adminName='Bright Future'>
      <div className="main w-full h-full flex mt-4 flex-col gap-4">
       <AdminTeachDashboardHeader/>
        {/* Header */}
        <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> Payment History
          </h2>
          <div className="mt-2 md:mt-0 flex gap-2">
            <Link
              to="/admin/pending/payments"
              className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]"
            >
              <i className="fas fa-clock"></i>&nbsp;Pending Payments
            </Link>
              <Link
              to="/admin/add/fee/invoices" 
              className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]"
            >
              <i className="fas fa-clock"></i>&nbsp;Add New Fee Invoice
            </Link>
              <Link
              to="/admin/student/fee/invoice"
              className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]"
            >
              <i className="fas fa-clock"></i>&nbsp;View Invoices
            </Link>
          </div>
        </div>
   <div className="w-full p-4 bg-white rounded shadow-md">
        <div className="mb-6">
         <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">Select Date</h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div>
             <label className="font-medium block mb-1">Start Date:</label>
             <input
               type="date"
               value={startDate}
               onChange={(e) => setStartDate(e.target.value)}
               className="w-full border border-gray-300 rounded px-3 py-2"
             />
           </div>

           <div>
             <label className="font-medium block mb-1">End Date:</label>
             <input
               type="date"
               value={endDate}
               onChange={(e) => setEndDate(e.target.value)}
               className="w-full border border-gray-300 rounded px-3 py-2"
             />
           </div>

           <div>
             <label className="font-medium block mb-1">Total:</label>
             <input
               type="text"
               value={total}
               readOnly
               className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
             />
           </div>
         </div>

         <div className="mt-4">
           <button
             type="button"
             onClick={handleGetHistory}
             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded text-sm"
           >
             <i className="fas fa-file-invoice mr-2"></i>
             Get Payment History
           </button>
         </div>
       </div> 

      {/* Table Search & Export */}
      <div className="flex flex-col md:flex-row justify-end items-center mb-4">
        <div className="mb-2 md:mb-0">
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full md:w-64"
          />
        </div>
      </div>

      {/* Table Placeholder */}
       <div className="overflow-x-auto">
        <table className="min-w-full  bg-white  border border-black text-sm">
          <thead className="bg-[rgb(1,1,93)] text-white">
            <tr>
              <th className="px-4 py-2 border">Receipt Number</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Payment Method</th>
              <th className="px-4 py-2 border">Transaction ID</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Note</th>
              <th className="px-4 py-2 border">Invoice</th>
               <th className="px-4 py-2 border">Student Name</th>
                <th className="px-4 py-2 border">Admission Number</th>
                 <th className="px-4 py-2 border">Class</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="px-4 py-2 border">000006</td>
              <td className="px-4 py-2 border">₹1,900.00</td>
              <td className="px-4 py-2 border">Cash</td>
              <td className="px-4 py-2 border">-</td>
              <td className="px-4 py-2 border">18-07-2025</td>
              <td className="px-4 py-2 border">-</td>
              <td className="px-4 py-2 border">
                <a href="#" className="text-blue-500 hover:underline">
                  ion1
                </a>
              </td>
               <td className="px-4 py-2 border">Harsh Vandana</td>
                <td className="px-4 py-2 border">323</td>
                 <td className="px-4 py-2 border">1st</td>
            </tr>
            {/* Add more rows dynamically here */}
           </tbody>
        </table>
        <p className='mt-2 block text-pretty'>Showing 1 to 5 Records</p>
         <button
          onClick={handleExport}
          className="bg-green-600 mt-4 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded text-sm"
        >
          <i className="fas fa-file-export mr-2"></i>
          Export
        </button>
        <div className="flex justify-end gap-3 items-center">
<button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded text-sm w-fit'>Next</button>
<button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded text-sm'>1</button>
<button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded text-sm'>Previuos</button>
        </div>
      </div> 
    </div> 
      </div>
    </AdminLayout>
  )
}

export default AdminPaymentHistory
