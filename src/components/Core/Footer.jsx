import { FaFacebook, FaSkype, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import schoolLogo from "/Images/School Logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  let socialMediaIconColor = "#D4AF37"; // Changed to gold
  return (
    <footer className="text-gray-300 pt-10 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-between m-auto ">
        <div className="lg:flex justify-between md:grid-cols-1 md:place-items-start leading-[1.7]">
          <div className="text-center md:text-left mb-4">
            <h2 className="text-gold-500 text-xl font-bold flex flex-col md:flex-row items-center justify-center md:justify-start">
              <img
                src={schoolLogo}
                alt="Logo"
                className="w-20 h-20 mb-2 md:mb-0 md:mr-2"
              />
              <span>Sam Public School</span>
            </h2>
            <p className="mt-4">Box 35300</p>
            <p>1810 Campus Way NE</p>
            <p>Bothell, WA 98011-8246</p>
            <p className="mt-4 font-semibold text-gold-400">+1-2534-4456-345</p>
            <a
              className="text-gold-500 hover:text-gold-300 transition-colors"
              href="mailto:info@sampublicschool.com"
            >
              info@sampublicschool.com
            </a>
            <hr className="border-gold-500 my-4 w-full" />
          </div>

          <div className="mb-4">
            <h3 className="text-gold-400 text-lg font-bold border-b-2 border-gold-500 lg:w-[15vw] md:w-[40vw] sm:w-fit w-fit mx-auto md:mx-0 pb-1">
              Our Campus
            </h3>
            <ul className="mt-4 space-y-2 text-center md:text-left">
              <li className="footerHoverEffect hover:text-gold-300">Academic</li>
              <li className="footerHoverEffect hover:text-gold-300">Planning & Administration</li>
              <li className="footerHoverEffect hover:text-gold-300">Campus Safety</li>
              <li className="footerHoverEffect hover:text-gold-300">Office of the Chancellor</li>
              <li className="footerHoverEffect hover:text-gold-300">Facility Services</li>
              <li className="footerHoverEffect hover:text-gold-300">Human Resources</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-gold-400 text-lg font-bold border-b-2 border-gold-500 lg:w-[15vw] md:w-[40vw] sm:w-fit w-fit mx-auto md:mx-0 pb-1">
              Campus Life
            </h3>
            <ul className="mt-4 space-y-2 text-center md:text-left">
              <li className="footerHoverEffect hover:text-gold-300">Accessibility</li>
              <li className="footerHoverEffect hover:text-gold-300">Financial Aid</li>
              <li className="footerHoverEffect hover:text-gold-300">Food Services</li>
              <li className="footerHoverEffect hover:text-gold-300">Housing</li>
              <li className="footerHoverEffect hover:text-gold-300">Information Technologies</li>
              <li className="footerHoverEffect hover:text-gold-300">Student Life</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-gold-400 text-lg font-bold border-b-2 border-gold-500 lg:w-[15vw] md:w-[40vw] sm:w-fit w-fit mx-auto md:mx-0 pb-1">
              Contact Us
            </h3>
            <div className="mt-4 space-y-2 text-center md:text-left">
              <h2 className="text-gold-300">+91 9023079999</h2>
              <h2 className="text-gold-300">admissions@sampublicschool.com</h2>
              <h2 className="text-gold-300">www.sampublicschool.com</h2>
              <Link to={"/contact"}>
                <button className="mt-4 px-4 py-2 rounded-md text-white bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 transition-colors">
                  Quick Enquiry
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-navy-800 text-gray-400 mt-10 text-sm py-6"
      >
        <div className="mb-[50px] w-[80vw] flex flex-col justify-between items-center m-auto md:flex-row">
          <p className="text-center md:text-left">
            &copy; Copyright All Rights Reserved {new Date().getFullYear()} |
            Developed and maintained <a href="/developer-info" className="text-gold-400 hover:text-gold-300">Developer 401</a>
          </p>
          <div className="flex space-x-4 text-xl mt-4 md:mt-0">
            <Link to="https://www.facebook.com/">
              <FaFacebook
                className="cursor-pointer hover:text-gold-400 transition-colors"
                color={socialMediaIconColor}
              />
            </Link>
            <Link to="https://www.linkedin.com/">
              <IoLogoLinkedin
                className="cursor-pointer hover:text-gold-400 transition-colors"
                color={socialMediaIconColor}
              />
            </Link>
            <Link to="https://www.skype.com/">
              <FaSkype 
                className="cursor-pointer hover:text-gold-400 transition-colors" 
                color={socialMediaIconColor} 
              />
            </Link>
            <Link to="https://twitter.com/">
              <FaXTwitter
                className="cursor-pointer hover:text-gold-400 transition-colors"
                color={socialMediaIconColor}
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram
                className="cursor-pointer hover:text-gold-400 transition-colors"
                color={socialMediaIconColor}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;