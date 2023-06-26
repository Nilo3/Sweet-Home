import style from "./About.module.css";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { teamMembers } from "./profiles/profiles";

const About = () => {
  return (
    <div className={style.all}>
      <div className={style.container}>
        {teamMembers.map((member, index) => (
          <div key={index} className={style.img_content}>
            <div
              className={style.img}
              style={{ backgroundImage: `url(${member.image})` }}
            >
              <div className={style.info}>
                <h4 className="font-bold">{member.name}</h4>
                <p className="p-8 -m-8 mx--1 text-xs">{member.description}</p>
                <div className="flex justify-center mt-2">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 mx-1"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={member.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 mx-1"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 mx-1"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link
          to="/"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
