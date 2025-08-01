import React from "react";

const AboutSection = () => {
  return (
//     <div className="container pt-[70px] pb-[100px]  px-0">
//       <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 pt-[30px] gap-x-[30px]">
//         {/* Left: Image Area */}
//         <div
//           data-aos="fade-up"
//           className="relative z-0 mb-[30px] flex items-center justify-center lg:mb-0 pb-0 md:pb-[30px] xl:pb-0 overflow-visible"
//         >
//           <div className="tilt flex  items-center justify-center animate-pulse">
//             <img
//               src="https://weblizar.com/wp-content/uploads/2019/09/School-Management-Education-Learning-Management-system.jpg"
//               alt="Main AI Visual"
//               width="800"
//               height="800"
//               className="w-full h-auto animate-[move-hor_6s_ease-in-out_infinite]"
//             />
//           </div>
//         </div>

//         {/* Right: Content */}
//          <div data-aos="fade-up">
//           <div className="relative z-0 rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-8">
//           <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter"> School Management - Education & Learning Management </h1>

// <p className="text-white mt-2 text-md font-semibold">School Management is a WordPress plugin to manage one or multiple schools and their entities such as classes, sections, students, exams, ID cards, admit cards, teachers, staff, fees, invoices, income, expense, noticeboard, study materials, staff/teacher can send the homework SMS on student/ parents mobile number and much more.  Your school take live classes of your students using the zoom, Create an unlimited live session with our system. You can publish the result and admit cards,  certificates in publically.  without any logging of students, they can get the result using student details.

// Now eLearning management : You can upload the subject wise Video Classes ( Recorded Video Classes ) and Documents PNG, JPG, PDF Files or YouTube Video also.

// Payment gateway: Paypal, Stripe, Pesapal, Paystack, Razorpay, PayTM, Bank Transfer, UPI Transfer

// SMS Service Provider: Nexmo, Twilio, MsgClub, SMS Striker, Msg91, TextLocal, EBulkSMS, Infigo SMS

// Android Mobile App :  It allow to student and parents login and manage the student related activities just like, Home work, Study Material, Book issue, Class Time-table,  Attendance , Student profile details. Exam result, admit card, Notification, Events, Fee Invoice, Payment History and More etc.
//   </p>          
//           </div>
//         </div>
//       </div>
//     </div>


<div className="container mx-auto px-4 py-10">
  <div className="flex flex-col lg:flex-row items-center gap-10">
    
    {/* Image Area */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <div className="relative animate-pulse">
        <img
          src="https://weblizar.com/wp-content/uploads/2019/09/School-Management-Education-Learning-Management-system.jpg"
          alt="School Management System"
          className="w-full max-w-[600px] rounded-xl shadow-lg animate-[move-hor_6s_ease-in-out_infinite]"
        />
      </div>
    </div>

    {/* Content Area */}
    <div className="w-full lg:w-1/2 bg-[#01015d] text-white rounded-xl shadow-lg p-6 space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold leading-snug">
        School Management - Education & Learning Management
      </h1>

      <p className="text-sm md:text-base">
        School Management is a system to manage schools, classes, students, staff, fees, exams, ID cards, admit cards, SMS alerts, and much more. 
        Easily conduct live classes using Zoom, share study material, results, certificates, and video classes without requiring student login.
      </p>

      <p className="text-sm md:text-base">
        🔗 <strong>Payment gateways:</strong> PayPal, Stripe, Razorpay, PayTM, etc.
      </p>
      <p className="text-sm md:text-base">
        📲 <strong>SMS Services:</strong> Twilio, Nexmo, Msg91, TextLocal, and more.
      </p>
      <p className="text-sm md:text-base">
        📱 <strong>Mobile App:</strong> Lets students and parents manage homework, results, fees, timetable, and attendance.
      </p>

      <a
        href="https://app.awferalms.com/"
        className="inline-block bg-gradient-to-r from-yellow-400 to-[#01015d] text-white font-bold py-2 px-6 rounded-full hover:opacity-90 transition"
      >
        Start Learning
      </a>
    </div>
  </div>
</div>

  );
};

export default AboutSection;
