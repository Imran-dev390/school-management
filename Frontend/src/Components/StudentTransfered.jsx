import React from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'

const StudentTransfered = () => {
  return (
    <AdminLayout adminName='Bright Future'>
       <div className="main mt-4 w-full h-full flex flex-col gap-3 items-center">
        <AdminTeachDashboardHeader/>
        
        {/* Section Heading */}
        <div className="w-full  bg-[rgb(1,1,93)] p-2 rounded text-white text-center mb-4">
          <div className="flex justify-between items-center  pb-2">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <i className="fas fa-users"></i> Students Transferred
            </h2>
            <Link
              to="/admin/transfer/students"
              className="btn bg-[#c19703] p-1 btn-sm btn-outline-light flex items-center gap-2"
            >
              <i className="fas fa-sign-in-alt"></i>
              Transfer Student
            </Link>
          </div>
        </div>

        {/* Students Transferred to Other Schools */}
        <div className="text-center font-semibold ">
          Students Transferred to Other School
        </div>
        <div className="w-full  bg-white mx-auto  p-4  shadow-xl flex flex-col overflow-x-auto">
          <div className="files flex  w-[100%] justify-end mt-2 mb-2">
           <input
  type="text"
  placeholder="Search"
  className="form-control form-control-sm mb-2 border border-grey-300 p-2 w-[30%] rounded"
/>

          </div>
          <table className="table table-bordered table-hover  text-sm">
            <thead className=" bg-[rgb(1,1,93)]   h-12 text-white">
              <tr>
                <th>Student Name</th>
                <th>Admission Number</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Class</th>
                <th>Section</th>
                <th>Father Name</th>
                {/* Add additional columns as needed */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Andrew Smith</td>
                <td>100001</td>
                <td>9999999999</td>
                <td>andrew_smith@gmail.com</td>
                <td>1st</td>
                <td>A</td>
                <td>Ghulam Ali</td>
              </tr>
            </tbody>
<div className="flex  justify-between items-center gap-3 mt-4">
  <div>
    <span className="font-semibold text-lg">
      Showing 1 to 2 entries
    </span>
  </div>
  <div>
    <button className="text-white px-4 py-1 rounded-xl bg-blue-500 hover:bg-blue-600 transition">
      Next
    </button>
     <button className="text-white ml-3 px-4 py-1 rounded-xl bg-blue-500 hover:bg-blue-600 transition">
      Prev
    </button>
  </div>
</div>

          </table>
        </div>

        {/* Students Transferred to This School */}
        <div className="text-center font-semibold mt-4 mb-2">
          Students Transferred to this School
        </div>
        <div className="w-full shadow-lg border border-grey-300 overflow-x-auto p-4">
            <div className="files flex  w-[100%] justify-end mt-2 mb-2">
           <input
  type="text"
  placeholder="Search"
  className="form-control form-control-sm mb-2 border border-grey-300 p-2 w-[30%] rounded"
/>

          </div>
          <table className="table  table-bordered table-hover w-full text-sm">
            <thead className="bg-[rgba(1,1,93)] h-12 text-white">
              <tr>
                <th>Student Name</th>
                <th>Admission Number</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Class</th>
                <th>Section</th>
                <th>Father Name</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
                 <tr>
                <td>Andrew Smith</td>
                <td>100001</td>
                <td>9999999999</td>
                <td>andrew_smith@gmail.com</td>
                <td>1st</td>
                <td>A</td>
                <td>Ghulam Ali</td>
              </tr>
            </tbody>

            <div className="flex  justify-between items-center gap-3 mt-4">
  <div>
    <span className="font-semibold text-lg">
      Showing 1 to 2 entries
    </span>
  </div>
  <div>
    <button className="text-white px-4 py-1 rounded-xl bg-blue-500 hover:bg-blue-600 transition">
      Next
    </button>
     <button className="text-white ml-3 px-4 py-1 rounded-xl bg-blue-500 hover:bg-blue-600 transition">
      Prev
    </button>
  </div>
</div>
          </table>
        </div>
       </div>
    </AdminLayout>
  )
}

export default StudentTransfered
