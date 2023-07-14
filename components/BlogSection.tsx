import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare, } from "react-icons/bs"
import { AiOutlineInstagram ,AiOutlineYoutube, AiOutlineFilePdf} from "react-icons/ai"

const blogs = [
  {
    name: "Set up CI CD using Jenkins for your NextJs app",
    description: "In this article we are going through prerequisites and steps of setting up Jenkins, linking to your GitHub repository as well as automating the building process...",
    image: "/blogs/jenkins.webp",
    link: "https://medium.com/@abderrahimfazazi/set-up-ci-cd-using-jenkins-for-your-nextjs-app-db933ac87e93",
    technologies: ["NextJs", "Jenkins", "GitHub"]
  }
]

const BlogSection = () => {
  return (
    <section id="blogs">
      <h1 className="my-10 text-center font-bold text-4xl">
        Blog
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {blogs.map((blog, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    {blog.link ? <Link href={blog.link}>
                      <Image
                        src={blog.image}
                        alt=""
                        width={400}
                        height={400}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link> :
                      <Image
                        src={blog.image}
                        alt=""
                        width={400}
                        height={400}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-2xl font-bold mb-6">{blog.name}</h1>
                    <p className="text-md leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {blog.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {blog.link && <Link href={blog.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>}



                    </div>
                    <br/>
                    <div style={{ display: 'inline' }}>
                      {blog.technologies &&
                        blog.technologies.map((item, idx) => (
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

export default BlogSection



