import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaTelegram, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function SocialMediaIcons() {
  const iconClass =
    'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300';

  return (
    <div className="flex justify-center space-x-6">
      <a
        href="https://www.linkedin.com/in/imharishprasad"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="LinkedIn"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://github.com/imharishprasad"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="GitHub"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://twitter.com/imharishprasad"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Twitter"
      >
        <FaTwitter size={30} />
      </a>
      <a
        href="https://www.instagram.com/imharishprasad"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Instagram"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.facebook.com/imharishprasad"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Facebook"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="mailto:imharishprasad@gmail.com"
        className={iconClass}
        aria-label="Email"
      >
        <SiGmail size={30} />
      </a>
      <a
        href="https://t.me/imharishprasad"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Telegram"
      >
        <FaTelegram size={30} />
      </a>
      <a
        href="https://www.youtube.com/@imharishprasad"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className={iconClass}
      >
        <FaYoutube size={30} />
      </a>
    </div>
  );
}
