import React from "react";

const education = [
  {
    degree:
      " BSS Studying Political Science. Passion about computer science and engineering ",
    institution: "National University",
    year: "2021 - 2026",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "A.B.C.D. College,Chowjacha,Jessore",
    year: "2018 - 2020",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Patibila H.S.A High School,Chowjacha,Jessore",
    year: "2016 - 2017",
  },
];

// const certifications = [
//   { title: "Full-Stack Web Development", provider: "Programing Hero", year: "2023" },
//   { title: "React & Redux Mastery", provider: "Udemy", year: "2022" },
//   { title: "MongoDB Essentials", provider: "MongoDB University", year: "2021" },
// ];

// const workExperience = [
//   {
//     role: "Frontend Developer",
//     company: "Tech Solutions Inc.",
//     year: "2023 - Present",
//   },
//   {
//     role: "Web Development Intern",
//     company: "Startup Hub",
//     year: "2022 - 2023",
//   },
// ];

const Qualification = () => {
  return (
    <section id="qualification" className="w-full py-16 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold  text-center mb-8">
          My Qualifications
        </h2>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold  mb-6">Education</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-800">
                  {item.degree}
                </h4>
                <p className="text-sm text-gray-600">{item.institution}</p>
                <p className="text-sm text-gray-500">{item.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Section */}
        {/* <div className="mb-12">
          <h3 className="text-2xl font-semibold  mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-800">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600">{cert.provider}</p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Work Experience Section */}
        {/* <div>
          <h3 className="text-2xl font-semibold  mb-6">Work Experience</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workExperience.map((work, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-800">
                  {work.role}
                </h4>
                <p className="text-sm text-gray-600">{work.company}</p>
                <p className="text-sm text-gray-500">{work.year}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Qualification;
