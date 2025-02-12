import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Experience", href: "#timeline" },
  { name: "Projects", href: "#projects" },
  { name: "Get in Touch", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            NextVibe
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
            Elevating digital experiences with cutting-edge technology and
            passion-driven development.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Quick Navigation
          </h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-700 dark:text-gray-400 hover:text-green-500 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Get in Touch
          </h3>
          <p className="mt-3 text-gray-700 dark:text-gray-400 leading-relaxed">
            Let's collaborate! Feel free to reach out for new opportunities or
            just a tech talk.
          </p>
          <p className="mt-3 flex items-center space-x-3 text-gray-900 dark:text-gray-300">
            <FaEnvelope className="text-green-500" />
            <a
              href="mailto:hp.harishprasad@gmail.com"
              className="hover:underline"
            >
              hp.harishprasad@gmail.com
            </a>
          </p>
          <p className="mt-1 flex items-center space-x-3 text-gray-900 dark:text-gray-300">
            <FaPhone className="text-green-500" />
            <span>+91 99009 22237</span>
          </p>
          <div className="mt-5 flex space-x-5">
            {[
              { href: "https://github.com/imharishprasad", icon: <FaGithub /> },
              {
                href: "https://www.linkedin.com/in/imharishprasad",
                icon: <FaLinkedin />,
              },
              {
                href: "https://twitter.com/imharishprasad",
                icon: <FaTwitter />,
              },
              {
                href: "https://www.youtube.com/@imharishprasad",
                icon: <FaYoutube />,
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social Link"
                className="text-gray-700 dark:text-gray-400 hover:text-green-500 transition-all duration-200 transform hover:scale-110"
              >
                {React.cloneElement(social.icon, { size: 22 })}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-6">
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        <p>
          Designed & Built by{" "}
          <strong className="text-gray-900 dark:text-gray-100">
            Harish Prasad
          </strong>
        </p>
      </div>
    </footer>
  );
}
