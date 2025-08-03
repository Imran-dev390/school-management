import React from 'react'
import AboutSection from './AboutSection'
import LoginGrid from './LoginGrid'
import Footer from './Footer'
import Navbar from './Navbar'
import FeaturesGrid from './FeaturesGrid'
import SecuredGird from './SecuredGird'
import Faqs from './Faqs'

const Landing = () => {
  return (
    <div className='w-full min-h-screen  bg-white'>
      <Navbar/>
          <section
      data-aos="fade-up"
      className="hero relative z-0  overflow-hidden"
    >
      {/* Animated Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="Hero_IMG_5457.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Decorative Animated Elements */}
      <img
        src="https://awferalms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fherobanner__1.79bac3be.png&w=128&q=75"
        className="absolute left-10 bottom-[233px] md:left-[248px] md:bottom-[143px] lg:left-10 lg:bottom-[112px] 3xl:bottom-[233px] opacity-35 animate-bounce z-10"
        alt="Decorative"
      />
      <img
        src="https://awferalms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fherobanner__1.79bac3be.png&w=128&q=75"
        className="absolute left-0 top-0 md:left-[50px] md:top-[110px] lg:left-[30px] lg:top-[75px] 2xl:left-[50px] 2xl:top-16 animate-spin"
        alt="Decorative"
      />
      <img
        src="https://awferalms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fherobanner__1.79bac3be.png&w=128&q=75"
        className="absolute md:left-[210px] md:top-[50px] animate-pulse hidden md:block z-10"
        alt="Decorative"
      />
      <img
        src="https://awferalms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fherobanner__1.79bac3be.png&w=128&q=75"
        className="absolute top-20 left-[872px] md:left-[872px] lg:left-[595px] 2xl:left-[872px] hidden md:block animate-bounce"
        alt="Decorative"
      />
      {/* <img
        src="https://awferalms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fherobanner__1.79bac3be.png&w=128&q=75"
        className="absolute top-0 right-0 md:right-[110px] md:top-[100px] lg:right-[13px] lg:top-[90px] 2xl:right-[82px] 2xl:top-[100px] 3xl:right-[110px] animate-pulse z-10"
        alt="Decorative"
      /> */}
      

      {/* Content */}
      <div className="bg-black bg-opacity-70 pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-24 lg:pb-40 text-center relative">
        <div className="container mx-auto px-4 space-y-3 flex flex-col">
          <span className="uppercase text-white text-sm tracking-widest font-semibold block mb-3">
            Education Solution
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight text-white font-bold mb-6">
           Versatile - <span className='text-white'>AI-Powered</span> ERP System For <span className='text-[#c19703]'>School</span>
          </h1>
          <p className='text-2xl tracking-tighter md:text-3xl lg:text-4xl text-white'>Meri Taleem ERP system is the best to manage complete school operations. The system has different access rights for School Admin, Teacher, Student and Accountant
</p>

<span className='text-white text-lg'>Home /
School Management - Education & Learning Management</span>
<div className="flex items-center justify-center">
          <a
            href="https://app.awferalms.com/"
            className="inline-block w-fit justify-center items-center bg-gradient-to-r from-[rgb(1,1,93)] to-yellow-400 font-bold rounded-full hover:bg-blue-600 text-white  px-6 py-3  shadow transition text-xl"
          >
            Request for a Demo
          </a>
          </div>
        </div>
      </div>
    </section>
    <section className="px-6 bg-[rgb(12,14,43)] flex items-center justify-center h-full w-full">
         <AboutSection/>
    </section>
    <section className="bg-[rgb(23,15,47)]">
        <div className="p-8">
        <h1 className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl font-semibold ">Simply Your Workflow and Save Time</h1>
        <LoginGrid/>
        </div>
        {/* <div className="p-8">
            <h1 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-3xl tracking-tighter font-semibold'>Manage Your School with Ease, Anytime, Anywhere</h1>
            <p className='text-white text-pretty text-xl'>What make it smart School Management System
</p>
       <div className="grid grid-cols-1 px-8 sm:grid-cols-2 bg-red-500 h-full w-full  md:grid-cols-2 lg:grid-col-2 items-center">
             <div className="left flex flex-col gap-3 items-center bg-emerald-500 w-fit">
                <h1 className='bg-[#c19703] text-2xl  p-2 w-fit text-black'>Academic</h1>
<div className="Classes and Sections">
<h1>Clases and Sections</h1>
<p>Create Classes and Sections in a School</p>
</div>
<div className="Subjects">
<h1 className='text-2xl'>Subjects</h1>
<p className=''>Add Differeny Types of Subjects</p>
</div>
<div className="Study-materials">
<h1 className='text-2xl'>Study Materials</h1>
<p className=''>Add and distribute study materials to classes</p>
</div>
<div className="attendance">
<h1 className='text-2xl'>Attendance</h1>
<p className=''>Take Date Wise Attendance of Students</p>
</div>
<div className="notice-board">
<h1 className='text-2xl'>NoticeBoard</h1>
<p className=''>Display recent notices using wiget</p>
</div>

             </div>

             <div className="right flex flex-col gap-3 items-center bg-red-500">
<h1 className='bg-[#c19703] text-white text-2xl font-semibold'>Student</h1>
<div className="student-admission">
<h1>Student Admission</h1>
<p>Add new admissions to a class</p>
</div>
<div className="Student-promotion">
<h1 className='text-2xl'>Student Promotion</h1>
<p className=''>Promote student from one class to another</p>
</div>
<div className="Student-transfer">
<h1 className='text-2xl'>Student Transfer</h1>
<p className=''>Transfer student from one school to another</p>
</div>
             </div>



             <div className="left mt-4 flex flex-col gap-3 items-center bg-emerald-500 w-fit">
                <h1 className='bg-[#c19703] text-2xl  p-2 w-fit text-black'>Administrator</h1>
<div className="roles and permissions">
<h1>Roles and Permissions</h1>
<p>Create Custom Roles and assign permissions</p>
</div>
<div className="Admin">
<h1 className='text-2xl'>Admin</h1>
<p className=''>Add school admins to manage the school</p>
</div>
<div className="Staff">
<h1 className='text-2xl'>Staff</h1>
<p className=''>Add School Staff With Permissions</p>
</div>
<div className="Teacher">
<h1 className='text-2xl'>Teacher</h1>
<p className=''>Add School teacher to manage students</p>
</div>
<div className="accountant">
<h1 className='text-2xl'>Accountant</h1>
<p className=''>Add accountant to manage fees and,expense and income</p>
</div>

             </div>

               <div className="right flex flex-col gap-3 items-center bg-red-500">
<h1 className='bg-[#c19703] text-white text-2xl font-semibold'>Accounting</h1>
<div className="student-admission">
<h1 className='text-2xl'>Fee Invoice Generation</h1>
<p>Generate Fee Invoices in bulk</p>
</div>
<div className="expense-management">
<h1 className='text-2xl'>Expanse Management</h1>
<p className=''>Add expense categories & date wise expense</p>
</div>
<div className="income-management">
<h1 className='text-2xl'>Income Management</h1>
<p className=''>Add income categoies & date wise income</p>
</div>
<div className="payment-collection">
<h1 className='text-2xl'>Payment Collection</h1>
<p className=''>Collect Payment Offline and Online</p>
</div>
<div className="custom-Fees-structure">
<h1 className='text-2xl'>Custom Fees Structure</h1>
<p className=''>Add Fees structure at the time of admission</p>
</div>
             </div>
       </div>
        </div> */}

        {/* <div className="p-8 bg-gradient-to-b from-[rgb(23,15,47)] to-[rgb(12,14,43)] text-white">
  <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight'>
    Manage Your School with Ease, Anytime, Anywhere
  </h1>
  <p className='text-center text-lg sm:text-xl mb-10'>
    What makes it a smart School Management System
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    {/* Academic Section */}
    {/* <div className="bg-[#1e293b] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
      <h2 className="bg-[#c19703] text-black text-xl font-bold px-4 py-2 inline-block rounded-md mb-4">
        Academic
      </h2>
      <div className="space-y-3 text-white">
        <div>
          <h3 className="text-lg font-semibold">Classes and Sections</h3>
          <p className="text-sm">Create Classes and Sections in a School</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Subjects</h3>
          <p className="text-sm">Add Different Types of Subjects</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Study Materials</h3>
          <p className="text-sm">Add and distribute study materials to classes</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Attendance</h3>
          <p className="text-sm">Take Date Wise Attendance of Students</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Notice Board</h3>
          <p className="text-sm">Display recent notices using widget</p>
        </div>
      </div>
    </div> */}

    {/* Student Section */}
    {/* <div className="bg-[#1e293b] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
      <h2 className="bg-[#c19703] text-black text-xl font-bold px-4 py-2 inline-block rounded-md mb-4">
        Student
      </h2>
      <div className="space-y-3 text-white">
        <div>
          <h3 className="text-lg font-semibold">Student Admission</h3>
          <p className="text-sm">Add new admissions to a class</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Student Promotion</h3>
          <p className="text-sm">Promote student from one class to another</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Student Transfer</h3>
          <p className="text-sm">Transfer student from one school to another</p>
        </div>
      </div>
    </div> */}

    {/* Administrator Section */}
    {/* <div className="bg-[#1e293b] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
      <h2 className="bg-[#c19703] text-black text-xl font-bold px-4 py-2 inline-block rounded-md mb-4">
        Administrator
      </h2>
      <div className="space-y-3 text-white">
        <div>
          <h3 className="text-lg font-semibold">Roles and Permissions</h3>
          <p className="text-sm">Create custom roles and assign permissions</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Admin</h3>
          <p className="text-sm">Add school admins to manage the school</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Staff</h3>
          <p className="text-sm">Add school staff with permissions</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Teacher</h3>
          <p className="text-sm">Add teachers to manage students</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Accountant</h3>
          <p className="text-sm">Manage fees, expenses, and income</p>
        </div>
      </div>
    </div> */}

    {/* Accounting Section */}
    {/* <div className="bg-[#1e293b] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
      <div className="wrapp bg-[#c19703] w-[50%] rounded-full flex items-center justify-center ">
      <h2 className="text-black text-xl font-bold px-4 py-2 inline-block rounded-md mb-4">
        Accounting
      </h2>
      </div>
      <div className="space-y-3 mt-2 text-white">
        <div>
          <h3 className="text-lg font-semibold">Fee Invoice Generation</h3>
          <p className="text-sm">Generate fee invoices in bulk</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Expense Management</h3>
          <p className="text-sm">Add categories and manage expenses</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Income Management</h3>
          <p className="text-sm">Track income sources and date-wise income</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Payment Collection</h3>
          <p className="text-sm">Collect payments offline and online</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Custom Fee Structure</h3>
          <p className="text-sm">Define fee structure at admission</p>
        </div>
      </div>
    </div>
  </div>
</div> */}
<FeaturesGrid/>
<SecuredGird/>
<Faqs/>

    </section>
    <section>
        <Footer/>
    </section>

    {/* WhatsApp Floating Button */}
<a
  href="https://wa.me/923268808826"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300"
  title="Chat on WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.3 5.295.165 11.529.165c3.17 0 6.142 1.237 8.385 3.48a11.79 11.79 0 0 1 3.48 8.384c-.003 6.234-5.138 11.37-11.373 11.37a11.87 11.87 0 0 1-5.943-1.586L.057 24zM6.11 19.29c1.676.995 3.276 1.591 5.419 1.593 5.448.003 9.886-4.435 9.889-9.882.002-2.64-1.027-5.123-2.89-6.987A9.828 9.828 0 0 0 11.53 2.13c-5.448 0-9.885 4.437-9.885 9.885a9.82 9.82 0 0 0 1.592 5.418l-.999 3.662 3.872-.985zm11.387-5.465c-.171-.286-.63-.458-1.318-.802-.688-.344-1.191-.575-1.694.115-.502.689-.776 1.146-1.464.802-.689-.344-1.19-.63-1.714-1.155-.525-.525-.812-.998-1.156-1.687-.344-.689.113-.962.802-1.464.689-.502.459-1.006.115-1.694-.345-.688-.517-1.146-.803-1.317-.286-.172-.63-.115-1.005.229-.373.344-1.264 1.239-1.264 3.014 0 1.775 1.292 3.493 1.472 3.735.172.229 2.535 3.87 6.16 5.17 3.626 1.3 3.626.86 4.278.803.653-.057 2.138-.872 2.44-1.716.301-.843.301-1.567.215-1.716z" />
  </svg>
</a>

    </div>
  )
}

export default Landing
