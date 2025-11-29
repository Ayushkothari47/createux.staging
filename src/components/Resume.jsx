import React from "react";
import { FaBuilding } from "react-icons/fa";

function Resume() {
  return (
    <div className="bg-[#141414] text-white min-h-screen py-5 px-4 md:px-16 lg:px-32 relative">
      <div className="flex flex-col justify-center items-center text-center py-20 px-4 md:px-16 lg:px-32">
        <h1 className="text-4xl text-white mb-4">Resume</h1>
        <h3 className="text-md text-white max-w-3xl">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row relative">
        {/* Left Container - Experience */}
        <div className="flex-1 relative z-10 pr-8">
          <span className="bg-[#ed4d65] text-white px-3 py-2 font-semibold rounded-full uppercase text-xs">
            Experience
          </span>
          <h2 className="text-3xl mt-4 mb-2">Professional Journey</h2>
          <p className="text-gray-300 mb-6">
            Overview of my professional experience and key roles I’ve undertaken.
          </p>

          {/* Experience Cards */}
          <div className="bg-[#1c1b19] border-1 border-[#ed4d65] rounded-lg p-6 mb-6 shadow-md">
            <div className="flex justify-between items-center mb-2">

              {/* Left Side – Icon */}
              <div className="bg-[#ed4d65] p-2 rounded-full">
                <FaBuilding className="w-6 h-6 text-white" />
              </div>

              {/* Right Side – Current Badge */}
              <span className="bg-[#3f2120] text-[#ff4c4f] px-3 py-1 rounded-full uppercase text-xs">
                Current
              </span>
            </div>

            <h3 className="text-xl">Frontend Developer</h3>
            <p className="text-gray-400 text-xs">ABC Tech Company</p>

            <span className="bg-[#ed4d65] text-white border-1 border-[#ed4d65] text-xs px-2 py-1 rounded-full mt-3 inline-block">
              2023 - Present
            </span>

            <p className="text-white text-sm mt-2">
              Worked on building responsive web applications using React and Tailwind CSS.
            </p>

            <div className="flex gap-2 mt-3">
              <span className="bg-[#2c1a1a] text-[#ff4c4f] border-1 border-[#ed4d65] text-xs px-2 py-1 rounded-full">Leadership</span>
              <span className="bg-[#2c1a1a] text-[#ff4c4f] border-1 border-[#ed4d65] text-xs px-2 py-1 rounded-full">Strategy</span>
              <span className="bg-[#2c1a1a] text-[#ff4c4f] border-1 border-[#ed4d65] text-xs px-2 py-1 rounded-full">Innovation</span>
            </div>
          </div>


          <div className="bg-[#1c1b19] border-1 border-[#ed4d65] rounded-lg p-6 mb-6 shadow-md">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">

                {/* Icon */}
                <div className="bg-[#ed4d65] p-2 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 22V2h18v20H3zm2-2h14V4H5v16z" />
                  </svg>
                </div>

                {/* Previous Badge */}
                <span className="bg-[#3f2120] text-[#ff4c4f] px-3 py-1 rounded-full uppercase text-xs block text-left">
                  Previous
                </span>
              </div>
            </div>

            <h3 className="text-xl text-white">Junior Developer</h3>
            <p className="text-gray-400 text-xs">XYZ Solutions</p>

            <span className="bg-[#ed4d65] text-white border-1 border-[#ed4d65] text-xs px-2 py-1 rounded-full mt-3 inline-block">
              2021 - 2023
            </span>

            <p className="text-white text-sm mt-2">
              Assisted in developing web interfaces and maintaining company websites.
            </p>

            <div className="flex gap-2 mt-3">
              <span className="bg-[#2c1a1a] text-[#ff4c4f] border-1 border-[#ed4d65] text-xs px-2 py-1 rounded-full">Teamwork</span>
              <span className="bg-[#2c1a1a] text-[#ff4c4f] border-1 border-[#ed4d65] text-xs px-2 py-1 rounded-full">Creativity</span>
              <span className="bg-[#2c1a1a] text-[#ff4c4f] border-1 border-[#ed4d65] text-xs px-2 py-1 rounded-full">Problem Solving</span>
            </div>
          </div>

        </div>

        {/* Divider with Icons */}
        <div className="hidden lg:flex flex-col items-center relative w-1">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#ed4d65] text-white z-0"></div>

          {/* Icons */}
          <div className="flex flex-col justify-between h-full py-10 z-10 relative">
            <div className="bg-[#ed4d65] text-white p-3 rounded-full mb-8">
              {/* Degree hat icon */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
              </svg>
            </div>
            <div className="bg-[#ed4d65] text-white p-3 rounded-full mb-8">
              {/* Bulb icon */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 21h6v-1H9v1zm3-19a7 7 0 00-7 7c0 3.14 2.05 5.78 4.88 6.73V19h4.25v-4.27C16.95 14.78 19 12.14 19 9a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="bg-[#ed4d65] text-white p-3 rounded-full">
              {/* Check icon */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.285 6.709l-11.025 11.025-5.55-5.55 1.414-1.414 4.136 4.136L18.87 5.295z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Container - Academics */}
        <div className="flex-1 relative z-10 pl-8">
          <span className="bg-[#ed4d65] text-white px-3 py-2 font-semibold rounded-full uppercase text-xs">
            Academics
          </span>
          <h2 className="text-3xl mt-4 mb-2">Academic Background</h2>
          <p className="text-gray-300 mb-6">
            Summary of my educational qualifications and awards received.
          </p>

          {/* Academic Cards */}
          <div className="bg-[#1c1b19] border-1 border-[#ed4d65] rounded-lg p-6 mb-6 shadow-md">

            {/* Top Badges */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">

                {/* Year Badge */}
                <span className="bg-[#ed4d65] text-white text-xs px-2 py-1 rounded-full border-1 border-[#ed4d65]">
                  2019 - 2021
                </span>

                {/* Degree Badge */}
                <span className="bg-[#3f2120] text-[#ff4c4f] text-xs px-3 py-1 rounded-full uppercase">
                  Masters
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-xl text-white">Master of Science in Computer Science</h3>
            <p className="text-gray-400 text-xs">ABC University</p>

            {/* Description */}
            <p className="text-white text-sm mt-2">
              Specialized in Web Development and Cloud Computing.
            </p>

            {/* Award Section */}
            <div className="flex items-center gap-2 mt-3">
              <svg className="w-5 h-5 text-[#ff4c4f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 6.91-1.01L12 2z" />
              </svg>
              <span className="text-[#ff4c4f] text-sm">Best Thesis Award</span>
            </div>
          </div>


          <div className="bg-[#1c1b19] border-1 border-[#ed4d65] rounded-lg p-6 mb-6 shadow-md">

            {/* Top Badges */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">

                {/* Year Badge */}
                <span className="bg-[#ed4d65] text-white text-xs px-2 py-1 rounded-full border-1 border-[#ed4d65]">
                  2015 - 2019
                </span>

                {/* Degree Badge */}
                <span className="bg-[#3f2120] text-[#ff4c4f] text-xs px-3 py-1 rounded-full uppercase">
                  Bachelors
                </span>

              </div>
            </div>

            {/* Heading */}
            <h3 className="text-xl text-white">Bachelor of Science in Information Technology</h3>
            <p className="text-gray-400 text-xs">XYZ University</p>

            {/* Description */}
            <p className="text-white text-sm mt-2">
              Focused on software development and data structures.
            </p>

            {/* Award Section */}
            <div className="flex items-center gap-2 mt-3">
              <svg className="w-5 h-5 text-[#ff4c4f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 6.91-1.01L12 2z" />
              </svg>
              <span className="text-[#ff4c4f] text-sm">Dean's List</span>
            </div>
          </div>


          <div className="bg-[#1c1b19] border-1 border-[#ed4d65] rounded-lg p-6 mb-6 shadow-md">

            {/* Top Row */}
            <div className="flex justify-between items-center mb-3">

              {/* Left – Year Badge */}
              <span className="bg-[#ed4d65] text-white text-xs px-2 py-1 rounded-full border-1 border-[#ed4d65]">
                2022 - 2025
              </span>

              {/* Right – Subheading */}
              <span className="text-gray-500 text-xs uppercase tracking-wide">
                Certificates
              </span>

            </div>

            {/* Section Title */}
            <h3 className="text-xl text-white mb-3">Professional Certifications</h3>

            {/* Certificate List */}
            <div className="space-y-3">

              {/* Certificate 1 */}
              <div>
                <div className="flex justify-between text-sm text-white">
                  <span>Certified Frontend Specialist</span>
                  <span className="text-[#ff4c4f]">2023</span>
                </div>
                <div className="border-b border-[#ed4d65]/40 mt-2"></div>
              </div>

              {/* Certificate 2 */}
              <div>
                <div className="flex justify-between text-sm text-white">
                  <span>UI/UX Design Fundamentals</span>
                  <span className="text-[#ff4c4f]">2024</span>
                </div>
                <div className="border-b border-[#ed4d65]/40 mt-2"></div>
              </div>

              {/* Certificate 3 */}
              <div>
                <div className="flex justify-between text-sm text-white">
                  <span>Advanced React Developer</span>
                  <span className="text-[#ff4c4f]">2025</span>
                </div>
                <div className="border-b border-[#ed4d65]/40 mt-2"></div>
              </div>

            </div>

          </div>


        </div>
      </div>
    </div>
  );
}

export default Resume;
