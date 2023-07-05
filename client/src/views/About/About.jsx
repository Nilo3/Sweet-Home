import style from "./About.module.css";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { teamMembers } from "./profiles/profiles";
import { tecnologies } from "./tecnologies/tecnologies";

const About = () => {
  return (
    <div className="text-center mx-auto max-w-6xl px-2 select-none">
      <div className={style.intro}>
        <h1 className="text-4xl font-bold mb-4 mt-4">About us</h1>
        <p className="mb-8">
          Welcome to our Henry's Full Stack development team. We are a group of
          8 students passionate about the world of web development. We decided
          to come together and form a cohesive team with the goal of creating
          this exceptional e-commerce platform. We stand out for our
          collaborative approach and strong teamwork. Each member brings their
          unique skills and knowledge, allowing us to tackle challenging
          projects with confidence and creativity. Our main objective is to
          exceed our clients' expectations and deliver innovative and
          high-quality solutions. We are driven by a constant effort to improve
          and learn new technologies. We stay updated with the latest trends in
          web development to provide modern and efficient solutions. We are
          committed to continuing our professional growth and taking our
          projects to the next level. We thrive on challenges and we are ready
          to bring your ideas to life!
        </p>
      </div>

      <div className={style.container}>
        <div className={style.row}>
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={index} className={style.card}>
              <div className={style.imageContainer}>
                <div
                  className={style.image}
                  style={{ backgroundImage: `url(${member.image})` }}
                />
              </div>
              <div className={style.info}>
                <h4 className={style.name}>{member.name}</h4>
                <p className={style.description}>{member.description}</p>
                <div className={style.contactIcons}>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.contactIcon}
                  >
                    <FaGithub size={30} />
                  </a>
                  <a
                    href={member.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.contactIcon}
                  >
                    <FaEnvelope size={30} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.contactIcon}
                  >
                    <FaLinkedin size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.row}>
          {teamMembers.slice(4, 8).map((member, index) => (
            <div key={index} className={style.card}>
              <div className={style.imageContainer}>
                <div
                  className={style.image}
                  style={{ backgroundImage: `url(${member.image})` }}
                />
              </div>
              <div className={style.info}>
                <h4 className={style.name}>{member.name}</h4>
                <p className={style.description}>{member.description}</p>
                <div className={style.contactIcons}>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.contactIcon}
                  >
                    <FaGithub size={30} />
                  </a>
                  <a
                    href={member.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.contactIcon}
                  >
                    <FaEnvelope size={30} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.contactIcon}
                  >
                    <FaLinkedin size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-16 mb-4">Technologies 🦾</h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {tecnologies.map((technology, index) => (
          <div key={index} className="bg-white p-8 shadow rounded">
            <div className="mb-4">
              <a
                href={technology.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={technology.image}
                  alt={technology.title}
                  className="w-24 h-24 object-contain mx-auto"
                />
              </a>
            </div>
            <p className="text-gray-900 text-sm">{technology.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
