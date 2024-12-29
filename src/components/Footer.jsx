import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext"; // Import dark mode context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faInfoCircle, faCalendarAlt, faFileAlt, faQuestionCircle, faHome, faTag, faUtensils, faFeed, faMessage } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const { darkMode } = useDarkMode(); // Get dark mode state from context
  const year = new Date().getFullYear();

  return (
    <div className="mt-5">
      {/* Apply conditional class for dark mode */}

      <hr className={`${darkMode ? "border-gray-700" : ""}`} />

      <footer
        className={`footer items-center xl:px-24 px-4 py-4 mt-2 ${darkMode ? "bg-gray-900 text-white" : "text-black"
          }`}
      >
        <aside className="items-center grid-flow-col">
          <p>
            Copyright &copy; <span id="year">{year}</span>. All Rights Reserved Event Pulse
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://X.com/IInfomerical"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a
            href="https://youtube.com/islamicinfomerical"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            href="https://facebook.com/islamicinfomericalofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.991 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.643c0-3.007 1.793-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.492 0-1.953.931-1.953 1.891v2.233h3.328l-.532 3.469h-2.796v8.385c5.737-.9 10.125-5.863 10.125-11.854z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
