"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const contactMethods = [
  {
    title: "Email",
    description: "Drop me a message",
    href: "mailto:hp.harishprasad",
    icon: <FaEnvelope className="w-6 h-6" />,
  },
  {
    title: "LinkedIn",
    description: "Let's connect professionally",
    href: "https://linkedin.com/in/imharishprasad",
    icon: <FaLinkedin className="w-6 h-6" />,
  },
  {
    title: "GitHub",
    description: "Check out my projects",
    href: "https://github.com/imharishprasad",
    icon: <FaGithub className="w-6 h-6" />,
  },
  {
    title: "Twitter",
    description: "Follow me for updates",
    href: "https://twitter.com/imharishprasad",
    icon: <FaTwitter className="w-6 h-6" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Let’s <span className="text-green-500">Connect</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Whether you have a project in mind, want to collaborate, or just want
          to say hi, my inbox is always open!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-green-500 text-white group-hover:rotate-[10deg] transition-transform">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {contact.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
