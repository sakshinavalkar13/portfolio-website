import React from "react";
import Heroimage from "../assets/MY-image.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-white py-4 max-w-md" >
            I'm a skilled programmer in Java with a strong background in web development. I’m a full stack developer with experience in both front-end and back-end technologies. 
            I create and maintain web applications from start to finish, handling everything from user interfaces to server-side logic. 
            My skills ensure smooth and efficient development throughout the entire project. I’m passionate about building seamless 
            and functional digital solutions.
            </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2 mt-8 md:mt-0">
          <img
            className="rounded-full w-1/2 mb-40 md:w-auto max-w-xs mt-5 "
            src={Heroimage}
            alt="myImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
