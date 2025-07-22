import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { userDataContext } from '../Context-Api/UserContext'
import StudentSidebar from './StudentSidebar'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'

// const StudentDashFeeInvoice = () => {
//     const {userData} = useContext(userDataContext);
//     useEffect(()=>{
         
//     },[userData])
//   return (
//      <div className='flex flex-col md:flex-row min-h-screen bg-white'>
//       <StudentSidebar/>
//        <div className="main w-full h-full flex flex-col gap-3 justify-center mt-3 px-4 ">
//         <AdminTeachDashboardHeader/>
//         <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
//                 <h2 className="text-lg font-semibold flex items-center gap-2">
//                   <i className="fas fa-calendar-alt"></i> View Fee Invoice
//                 </h2>
//               </div>
//        </div>
//     </div>
//   )
// }


const StudentDashFeeInvoice = () => {
  const { userData } = useContext(userDataContext);
  const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const { feeVouchers = [] } = userData || {};
console.log("feevoucer",feeVouchers);
  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-white'>
      <StudentSidebar />
      <div className="main w-full h-full flex flex-col gap-3 mt-3 px-4">
        <AdminTeachDashboardHeader />
        <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> View Fee Invoice
          </h2>
        </div>

        {/* Fee Invoices Table */}
        <div className="bg-white p-6 rounded shadow mt-4">
          <h3 className="text-lg font-semibold mb-4">My Fee Invoices</h3>
          <table className="w-full overflow-x-auto table-auto border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                {["Title", "Concession", "Total", "Payable", "Status", "Voucher"].map(th => (
                  <th key={th} className="p-2 border">{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {feeVouchers.map((row) => (
                <tr key={row._id} className="hover:bg-gray-50">
                  <td className="p-2 border">{row?.feeType?.name || "-"}</td>
                  <td className="p-2 border">{row?.concession + "%" || "-"}</td>
                  <td className="p-2 border">{row?.baseAmount || "-"}</td>
                  <td className="p-2 border">{row?.finalAmount || "-"}</td>
                  <td className="p-2 border">{row?.paid === true ? "Paid" : "UnPaid"}</td>
                  <td className="p-2 border">
                    {/* <a
                      href={`${baseURL}${row?.pdfPath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 underline"
                    >
                      View Voucher
                    </a> */}
                     <a className='underline text-blue-500' href={`${baseURL}/api/admin/voucher/${row._id}/pdf`}>View Voucher</a>
                  </td>
                </tr>
              ))}
              {feeVouchers.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center p-4 text-gray-500">
                    No fee invoices found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDashFeeInvoice
