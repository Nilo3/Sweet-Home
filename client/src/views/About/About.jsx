import style from "./About.module.css";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { teamMembers } from "./profiles/profiles";

const About = () => {
  return (
    <div className={style.aboutContainer}>
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
                    <FaGithub />
                  </a>
                  <a
                    href={member.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.contactIcon}
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.contactIcon}
                  >
                    <FaLinkedin />
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
                    <FaGithub />
                  </a>
                  <a
                    href={member.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.contactIcon}
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.contactIcon}
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
