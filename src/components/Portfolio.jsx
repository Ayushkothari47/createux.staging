import React from 'react';
import { FaStar, FaDownload, FaEye, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

import profile from '../assets/pic.jpg'

function FullPortfolio() {
  return (
    // <div className="min-h-screen bg-[#141414] flex flex-col lg:flex-row p-6 gap-6">
    <div className="min-h-screen bg-[#141414] flex flex-col lg:flex-row p-6 gap-6 ml-[10%]">

      {/* Left Sidebar */}
      <div className="w-full lg:w-80 bg-[#1c1c1c] rounded-xl shadow-md p-6 flex-shrink-0 text-center">

        {/* Profile */}
        <img
          src={profile}
          alt={profile}
          className="w-28 h-28 mx-auto rounded-full border-5 border-[#fd596c] object-cover mb-3"
        />
        <h2 className="text-xl font-semibold text-white">Ayush Kothari</h2>
        <p className="text-[#ff5052] text-sm mb-3">Backend Developer</p>
        <div className="flex justify-center gap-1 mb-3">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400" />
          ))}
        </div>

        <hr className="my-5 border-gray-300" />

        {/* Stats */}
        <div className="flex justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-[#ff5052]">10</h3>
            <p className="text-gray-500 text-xs">PROJECTS</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#ff5052]">5+</h3>
            <p className="text-gray-500 text-xs">YEARS</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#ff5052]">3</h3>
            <p className="text-gray-500 text-xs">AWARDS</p>
          </div>
        </div>

        <hr className="my-5 border-gray-300" />

        {/* Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <button className="flex items-center justify-center gap-2 bg-[#ff4c4f] text-white py-2 px-4 rounded transition">
            <FaDownload /> Download CV <FaEye />
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-200 py-2 px-4 rounded hover:bg-gray-300 transition">
          <FaEnvelope/>
            Email Me
          </button>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-gray-600 text-xl">
          <a href="#" className="hover:text-blue-600 transition"><FaLinkedin /></a>
          <a href="#" className="hover:text-white transition"><FaGithub /></a>
          <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
        </div>
      </div>

      {/* Right Main Content */}
      <div className="flex-1 bg-[#141414] rounded-xl shadow-md p-6">
        {/* About Me Badge */}
        <span className="bg-[#2c1a1a] text-[#ff4c4f] px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
          ABOUT ME
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-white">
          Transforming Ideas into Digital Reality
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-white text-sm">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
          mollitia animi.
          <br /><br />
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[#1c1c1c] flex items-center">
            <FaBriefcase className="text-[#ff4c4f] text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-xs">EXPERIENCE</p>
              <h3 className="text-md text-white">8+ Years</h3>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#1c1c1c] flex items-center">
            <FaGraduationCap className="text-[#ff4c4f] text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-xs">DEGREE</p>
              <h3 className="text-md text-white">Master of Science</h3>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#1c1c1c] flex items-center">
            <FaMapMarkerAlt className="text-[#ff4c4f] text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Based In</p>
              <h3 className="text-md text-white">Portland, OR</h3>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#1c1c1c] flex items-center">
            <FaEnvelope className="text-[#ff4c4f] text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <h3 className="text-md text-white">contact@example.com</h3>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#1c1c1c] flex items-center">
            <FaPhone className="text-[#ff4c4f] text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <h3 className="text-md text-white">+1 (555) 234-5678</h3>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#1c1c1c] flex items-center">
            <FaClock className="text-[#ff4c4f] text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Availability</p>
              <h3 className="text-md text-white">Open to Work</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FullPortfolio;
