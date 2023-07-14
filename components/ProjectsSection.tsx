import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare, } from "react-icons/bs"
import { AiOutlineInstagram ,AiOutlineYoutube, AiOutlineFilePdf} from "react-icons/ai"

const projects = [
  {
    name: "Prblmsolvers",
    description: "\"Modern problems require modern solutions\", Prblmsolvers is a social network dedicated to developers and their innovative problem-solving solutions.",
    image: "/projects/prlms1.jpg",
    instagram: "https://www.instagram.com/prblmsolvers/",
    link: "https://prblmsolvers.com/",
    technologies: ["NextJs", "Mongodb", "Azure", "Vercel", "Sendgrid", "Tailwinds"]
  },
  {
    name: "Documents manager",
    description: "Creation of a docs managerProject dedicated to the Nrj+ club in our school that serves to manage documents for the G3EI department at the National School of Applied Sciences in Tanger. ",
    image: "/projects/g3ei.png",
    github: "https://github.com/abderrahimFizazi/g3ei",
    link: " https://abderrahimfizazi.github.io/g3ei/",
    youtube: "https://www.youtube.com/watch?v=uunhRpZU7Eo",
    technologies: ["ReactJs","Laravel", "Bootstrap","MySql"],


  },
  {
    name: "School system manager",
    description:
      "The School System Manager is a graduation project developed in our school's 3rd year, aiming to provide an attractive web application that offers flexible and optimal student management solutions. It enables the administrative staff at ENSAT to efficiently manage student data such as profiles, grades, and validations. Additionally, the project aims to create a student portal where engineering students can access their grades and contact professors via email. Throughout the project's development phases, our mission is to deploy various programming languages and tools that we have learned during this academic year, as well as through self-guided learning. We have also honed our teamwork, communication, and collaboration skills... you can find the project report down below",
    image: "/projects/schoolsystem.png",
    github: "https://github.com/abderrahimFizazi/react_laravel_school_system.git",
    technologies: ["ReactJs","Laravel", "Bootstrap","MySql"],
    youtube: "https://www.youtube.com/watch?v=VsRo9I5u5lY",
    pdf: "/projects/RapportSM.pdf"
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    {project.link ? <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={400}
                        height={400}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link> :
                      <Image
                        src={project.image}
                        alt=""
                        width={400}
                        height={400}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-2xl font-bold mb-6">{project.name}</h1>
                    <p className="text-md leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github && <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>}
                      {project.link && <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>}
                      {project.instagram && <Link href={project.instagram} target="_blank">
                        <AiOutlineInstagram
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>}

                      {project.youtube && <Link href={project.youtube} target="_blank">
                        <AiOutlineYoutube
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>}

                      {project.pdf && <Link href={project.pdf} target="_blank">
                        <AiOutlineFilePdf
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>}

                    </div>
                    <br/>
                    <div style={{ display: 'inline' }}>
                      {project.technologies &&
                        project.technologies.map((item, idx) => (
                          <p key={idx} className="inline-block bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">{item}</p>
                        ))}
                    </div>

                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection



