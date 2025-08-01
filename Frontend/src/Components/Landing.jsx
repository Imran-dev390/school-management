import React from 'react'
import AboutSection from './AboutSection'
import LoginGrid from './LoginGrid'
import Footer from './Footer'

const Landing = () => {
  return (
    <div className='w-full min-h-screen  bg-white'>
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
          <span className="uppercase text-blue-400 text-sm tracking-widest font-semibold block mb-3">
            Education Solution
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight text-white font-bold mb-6">
           School Management - <span className='text-amber-700'>Education</span> & Learning Management
          </h1>
          <p className='text-2xl md:text-3xl lg:text-4xl text-white'>School Management is the best to manage complete school operation. The system has different access rights for Super Admin, School Admin, Teacher, Student and Parent.
</p>

<span className='text-white text-lg'>Home /
School Management - Education & Learning Management</span>
<div className="flex items-center justify-center">
          <a
            href="https://app.awferalms.com/"
            className="inline-block w-fit justify-center items-center bg-gradient-to-r from-[rgb(1,1,93)] to-yellow-400 font-bold rounded-full hover:bg-blue-600 text-white  px-6 py-3  shadow transition text-xl"
          >
            Start Learning
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
        <h1 className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">School Management Admin Demo Login Details:</h1>
        <LoginGrid/>
        </div>
        <div className="p-8">
            <h1 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-3xl tracking-tighter font-semibold text-center'>School Management - Education & Learning Management Features</h1>
       <div className="img w-[80%] mt-4  h-[50%] mx-auto rounded-xl">
        <img className="w-full h-full " src="https://weblizar.com/wp-content/uploads/2020/05/school-managementent-presentation-mobile.jpg" alt="" />
       </div>
        </div>
    </section>
    <section>
        <Footer/>
    </section>
    </div>
  )
}

export default Landing
