"use client";

export default function AboutMe() {
  return (
    <section id="about" className="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-16">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            className="text-gray-300 dark:text-gray-800"
            d="M0,256L48,245.3C96,235,192,213,288,186.7C384,160,480,128,576,122.7C672,117,768,139,864,170.7C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">
          Who Am I?
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative">
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 rounded-full p-1">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src="/Images/AboutImage.png"
                  alt="Harish Prasad"
                  className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-left text-gray-700 dark:text-gray-300">
            <p className="text-lg md:text-xl leading-relaxed">
              I'm a passionate <span className="text-green-500 font-semibold">Software Engineer</span> specializing in crafting innovative digital experiences. My expertise spans across <span className="text-green-500 font-semibold">Full-Stack Development</span>, creating modern, scalable, and performance-driven applications.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Programming Languages
                </h3>
                <ul className="flex flex-wrap gap-2 text-sm">
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">JavaScript</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">Python</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">TypeScript</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">Java</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">C#</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Frameworks & Libraries
                </h3>
                <ul className="flex flex-wrap gap-2 text-sm">
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">React</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">Next.js</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">Node.js</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">Tailwind CSS</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">Material UI</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">Flask</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">ExpressJS</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">Tkinter</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">WPF .NET</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Databases
                </h3>
                <ul className="flex flex-wrap gap-2 text-sm">
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">MongoDB</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">Firebase</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">MySQL</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">OracleDB</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Design & Tools
                </h3>
                <ul className="flex flex-wrap gap-2 text-sm">
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">GitHub</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">Vim</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">Figma</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">VS Code</li>
                  <li className="bg-green-500 text-white px-3 py-1 rounded-lg">JIRA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
