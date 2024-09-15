import { Container } from "react-bootstrap";
import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import "./Blog.css";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FcNext } from "react-icons/fc";

import { NavLink } from "react-router-dom";
import Mail from "./assets/mail1.json";
import Mic from "./assets/mic2.json";
import { useRef } from "react";

import Footer from "./Footer";

import Navbar from "./Navbar";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";

function Blog() {
  const mailref = useRef < LottieRefCurrentProps > null;

  return (
    <div className="parentdiv">
      <Container className="div1">
        {/* Navbar */}
        <Navbar />
        <div class="imgdiv">
          <img
            alt=""
            src="https://avatars.githubusercontent.com/u/159712847?s=400&u=be0f86e3bbe120ddd0f3c65975aa3ae43e3a378e&v=4"
            className="image"
          />
        </div>
        <p className="hpdiv">
          <div className="hpdiv1">
            <h1 class="text-3xl  text-left text-slate-100 font-bold mr-3">Hey I'm Nikhil.</h1>

            <h1 class="text-3xl text-left text-sky-400 font-bold">
              I'm a software engineer.
            </h1>
          </div>
          <div className="div2">
            <a
              href="https://www.linkedin.com/in/nikhil-dadhania/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <sapn
                class=" text-gray-400 text-xl flex hover:text-blue-500 cursor-pointer font-lexend 
             "
              >
                <FaLinkedin class="mt-1 fill-blue-500 mr-1" />
                Linkedin
              </sapn>
            </a>

            

            <a
              href="https://x.com/dadhanianik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <sapn
                class=" text-gray-400 text-xl flex hover:text-[#1D9BF9] cursor-pointer  font-lexend
              min-[320px]: max-[600px]:mr-12 max-[600px]:pr-3"
              >
                <FaTwitter class="mt-1 fill-[#1D9BF9] mr-1" />
                Twitter
              </sapn>
            </a>

            <a
              href="https://github.com/NikhilDadhania"
              target="_blank"
              rel="noopener noreferrer"
            >
              <sapn
                class=" text-gray-400 text-xl flex hover:text-white cursor-pointer font-lexend
                            min-[320px]: max-[600px]:gap-0.5"
              >
                <FaGithub class="mt-1 fill-white mr-1" />
                Github
              </sapn>
            </a>
          </div>
        </p>
        <div class="p-2"></div>

        <div class="flex ml-3 mt-5">
          <a href="mailto:dadhanianik@gmail.com">
            <div class="flex">
              <Lottie
                onComplete={() => {
                  mailref.current?.goToAndPlay(48, true);
                }}
                lottieRef={mailref}
                loop={false}
                class=" w-10"
                animationData={Mail}
              />
              <h1 class=" flex text-2xl text-blue-500 hover:underline mt-2">
                {" "}
                Reach out!
              </h1>
            </div>
          </a>
        </div>
        
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossorigin="anonymous"
        />

        {/* cards */}
        {/* <div className="cardsall">
<div class="container1">
   <div class="container__info">
   <NavLink
              to="Project"
              className="
          inline-flex items-center mt-2 py-1.5 text-lg font-medium rounded-md 
          transition-colors duration-200 hover:bg-link/10 focus-visible:bg-link/10 text-white
          min-[320px]: max-[600px]:mr-64 pr-0.5 hover:underline"
            >
              Projects
              <FiChevronRight className="inline w-4 h-4 ml-1" strokeWidth={2} />
            </NavLink>
   </div>
  </div>
  <div class="container1">
   <div class="container__info">
   <NavLink
              to="Project"
              className="
          inline-flex items-center mt-2 py-1.5 text-lg font-medium rounded-md 
          transition-colors duration-200 hover:bg-link/10 focus-visible:bg-link/10 text-white
          min-[320px]: max-[600px]:mr-64 pr-0.5 hover:underline"
            >
              Projects
              <FiChevronRight className="inline w-4 h-4 ml-1" strokeWidth={2} />
            </NavLink>
   </div>
  </div>
  <div class="container1">
   <div class="container__info">
   <NavLink
              to="Project"
              className="
          inline-flex items-center mt-2 py-1.5 text-lg font-medium rounded-md 
          transition-colors duration-200 hover:bg-link/10 focus-visible:bg-link/10 text-white
          min-[320px]: max-[600px]:mr-64 pr-0.5 hover:underline"
            >
              Projects
              <FiChevronRight className="inline w-4 h-4 ml-1" strokeWidth={2} />
            </NavLink>
   </div>
  </div>
  <div class="container1">
   <div class="container__info">
   <NavLink
              to="Project"
              className="
          inline-flex items-center mt-2 py-1.5 text-lg font-medium rounded-md 
          transition-colors duration-200 hover:bg-link/10 focus-visible:bg-link/10 text-white
          min-[320px]: max-[600px]:mr-64 pr-0.5 hover:underline"
            >
              Projects
              <FiChevronRight className="inline w-4 h-4 ml-1" strokeWidth={2} />
            </NavLink>
   </div>
  </div>
  </div> */}
 

     
        <div className="navstyle"></div>
        <div class="leading-6">
        <h1 class="text-3xl  text-left text-slate-100 font-semi-bold ml-4">
          Intro<FcNext class='inline'/></h1>

          <p class="text-xl text-left text-gray-400 mt-2 ml-4">
            Hello Folks!  I'm software developer & designer with a passion for building things
            that are user-friendly , innovative and problem solving.
            
           
          </p>
         
          <p class="text-xl text-left text-gray-400 mt-2 ml-4">
            I write articles and engaging blog posts about tech & lifestyle.
           


          </p>

          <p class="text-xl text-left text-gray-400 mt-2 ml-4">
            When I'm not immersed in code or writing, you can find me behind the
            lens, capturing moments through my photography.
           

          </p>
          <NavLink
          to='/About'
          className="
          inline-flex items-center mt-2 ml-2 px-2 py-1.5 text-md font-medium rounded-md 
          transition-colors duration-200 hover:bg-link/10 focus-visible:bg-link/10 text-blue-500"
        >
          More about me
          <ChevronRightIcon className="inline w-4 h-4" strokeWidth={2} />
        </NavLink>
          
        </div>
        <Footer class='fixed' />

      </Container>
    </div>
  );
}

export default Blog;
