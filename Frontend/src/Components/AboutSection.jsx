// import React from "react";

// const AboutSection = () => {
//   return (
// //     <div className="container pt-[70px] pb-[100px]  px-0">
// //       <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 pt-[30px] gap-x-[30px]">
// //         {/* Left: Image Area */}
// //         <div
// //           data-aos="fade-up"
// //           className="relative z-0 mb-[30px] flex items-center justify-center lg:mb-0 pb-0 md:pb-[30px] xl:pb-0 overflow-visible"
// //         >
// //           <div className="tilt flex  items-center justify-center animate-pulse">
// //             <img
// //               src="https://weblizar.com/wp-content/uploads/2019/09/School-Management-Education-Learning-Management-system.jpg"
// //               alt="Main AI Visual"
// //               width="800"
// //               height="800"
// //               className="w-full h-auto animate-[move-hor_6s_ease-in-out_infinite]"
// //             />
// //           </div>
// //         </div>

// //         {/* Right: Content */}
// //          <div data-aos="fade-up">
// //           <div className="relative z-0 rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-8">
// //           <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter"> School Management - Education & Learning Management </h1>

// // <p className="text-white mt-2 text-md font-semibold">School Management is a WordPress plugin to manage one or multiple schools and their entities such as classes, sections, students, exams, ID cards, admit cards, teachers, staff, fees, invoices, income, expense, noticeboard, study materials, staff/teacher can send the homework SMS on student/ parents mobile number and much more.  Your school take live classes of your students using the zoom, Create an unlimited live session with our system. You can publish the result and admit cards,  certificates in publically.  without any logging of students, they can get the result using student details.

// // Now eLearning management : You can upload the subject wise Video Classes ( Recorded Video Classes ) and Documents PNG, JPG, PDF Files or YouTube Video also.

// // Payment gateway: Paypal, Stripe, Pesapal, Paystack, Razorpay, PayTM, Bank Transfer, UPI Transfer

// // SMS Service Provider: Nexmo, Twilio, MsgClub, SMS Striker, Msg91, TextLocal, EBulkSMS, Infigo SMS

// // Android Mobile App :  It allow to student and parents login and manage the student related activities just like, Home work, Study Material, Book issue, Class Time-table,  Attendance , Student profile details. Exam result, admit card, Notification, Events, Fee Invoice, Payment History and More etc.
// //   </p>          
// //           </div>
// //         </div>
// //       </div>
// //     </div>


// <div className="container mx-auto px-4 py-10">
//   <div className="flex flex-col lg:flex-row items-center gap-10">
    

//      {/* Content Area */}
//     <div className="w-full lg:w-1/2 bg-[#01015d] text-white rounded-xl shadow-lg p-6 space-y-4">
// <button className="bg-[rgb(250,26,6)] px-3 py-1 rounded-md">About Us</button>
//       <h1 className="text-2xl md:text-3xl font-bold leading-snug">
//        The Complete Solution for Modern Education Practices.
//       </h1>

//       <p className="text-sm md:text-base">
//         Meri Taleem is a software to manage all school operations and their entities such as classes, sections, students, exams, students cards,teachers, staff, fees, invoices, income, expense, noticeboard, study materials, staff/teacher and much more.

//       </p>
//     </div>
//     {/* Image Area */}
//     <div className="w-full lg:w-1/2 flex justify-center">
//       <div className="relative animate-pulse">
//         <img
//           src="https://awferalms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout_ai.2fdd8417.jpg&w=640&q=75"
//           alt="School Management System"
//           className="w-full max-w-[600px] rounded-xl shadow-lg animate-[move-hor_6s_ease-in-out_infinite]"
//         />
//         <img src="https://awferalms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fai_4%20(1).33b63175.webp&w=640&q=75" alt="" />
//       </div>
//     </div>
//   </div>
// </div>

//   );
// };

// export default AboutSection;




































import React from "react";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-14">
       {/* <h1 className="text-3xl text-white">About Us</h1> */}
        <button className="bg-red-600 text-white px-4 ml-8 py-1 rounded-md text-2xl">
            About Us
          </button>
      <div className="flex flex-col lg:flex-row  gap-12">
        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 text-white rounded-xl  p-6 md:p-8 space-y-4">
          {/* <button className="bg-red-600 text-white px-4 py-1 rounded-md text-sm">
            About Us
          </button> */}
          <h1 className="text-2xl md:text-3xl text-[#c19303] font-bold leading-snug">
            The Complete Solution for Modern Education Practices.
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            Meri Taleem is a software to manage all school operations and their entities such as
            classes, sections, students, exams, ID cards, teachers, staff, fees, invoices,
            expenses, noticeboard, study materials, and much more. Designed for both academic and
            administrative efficiency.
          </p>
        </div>

        {/* Right Image Area */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative max-w-[600px] w-full animate-pulse">
            {/* Main Image */}
            <img
              src="https://awferalms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout_ai.2fdd8417.jpg&w=640&q=75"
              alt="School Management System"
              className="w-full rounded-xl shadow-lg animate-[move-hor_6s_ease-in-out_infinite]"
            />

            {/* Overlay Image */}
            <img
              src="https://awferalms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fai_4%20(1).33b63175.webp&w=640&q=75"
              alt="Overlay"
              className="absolute bottom-4 right-4 w-62 h-52 object-cover   shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
