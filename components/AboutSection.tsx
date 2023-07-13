import React from "react"
import Image from "next/image"

const skills = [
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "ReactJs" },
  { skill: "NextJs" },
  { skill: "Azure" },
  { skill: "IBM Cloud" },
  { skill: "Docker" },
  { skill: "Bootstrap" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Linux" },
  { skill: "Shell" },
  { skill: "C" },
  { skill: "C++" },
  { skill: "C#" },
  { skill: "php" },
  { skill: ".NET" },
  { skill: "Java" },
  { skill: "Nginx" },
  { skill: "Apache2" },
  { skill: "MySQL" },
  { skill: "Mongodb" },
  { skill: "Rails" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Abderrahim and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> student software engineer.
            </p>
            <br />
            <p>
            I have expertise in web development and cloud computing. Over the past three years, 
             I have focused on React and Next.js, gaining 
             proficiency in creating dynamic and interactive web applications.
            </p>
            <br />
            <p>
            I am passionate about cloud technologies and currently preparing to obtain the 
            Azure Cloud Developer 204 certificate. Additionally, I have experience with 
            IBM cloud infrastructure and have worked with both relational
             and non-relational databases. My skill set also extends to desktop application development
            </p>
            <br/>
            <p>
            I am an active freelancer and engage in social activities, aiming to leverage technology 
            for positive change in the community.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/avt.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
