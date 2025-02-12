"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { FaSchool, FaUniversity, FaLaptopCode } from "react-icons/fa";

const educationData = [
  {
    title: "Schooling",
    description: "Completed my primary and secondary education at KVS School.",
    year: "2007 - 2016",
    icon: <FaSchool />,
  },
  {
    title: "College",
    description: "Completed my 12th in science stream at St.Francis College.",
    year: "2016 - 2018",
    icon: <FaUniversity />,
  },
  {
    title: "Engineering",
    description: "Pursued a Bachelor's degree in Computer Science at Cambridge Institute of Technology. focusing on software development.",
    year: "2018 - 2022",
    icon: <FaLaptopCode />,
  },
];

const workExperience = [
  {
    company: "Light & Wonder",
    role: "SDE",
    duration: "Aug 2022 - Present",
    description: [
      "yet to update..."
    ],
    skills: ["TypeScript", "ReactJS", "Unity", "C#", "Scripting"],
  }
];

export default function Timeline() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section id="timeline" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8">
        My Story: Education & Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full border-l-2 border-gray-300 dark:border-gray-600"></div>
            <div className="space-y-12 pl-12">
              {educationData.map((edu, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-green-500 text-2xl">
                    {edu.icon}
                  </div>
                  <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
              <Tab.List className="flex space-x-2 border-b border-gray-300 dark:border-gray-600">
                {workExperience.map((job, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      `py-2 px-4 text-lg font-medium focus:outline-none ${
                        selected
                          ? "border-b-2 border-green-500 text-green-500"
                          : "text-gray-600 dark:text-gray-400"
                      }`
                    }
                  >
                    {job.company}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {workExperience.map((job, index) => (
                  <Tab.Panel key={index} className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {job.role} @ <span className="text-green-500">{job.company}</span>
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{job.duration}</p>
                    <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                      {job.description.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-green-500">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 font-semibold text-gray-900 dark:text-white">Skills:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </section>
  );
}