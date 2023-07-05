import style from "./About.module.css";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { teamMembers } from "./profiles/profiles";
import reactLog from "../../assets/image/reactlogo.png"
import trelloLog from "../../assets/image/trellogo.svg"
import discordLog from "../../assets/image/discordlogo.png"
import firebaseLog from "../../assets/image/firebaselogo.svg"
import githubLog from "../../assets/image/githublogo.svg"
import pagoLog from "../../assets/image/mercadopagologo.webp"
import mongoLog from "../../assets/image/mongoDBlogo.svg"
import tailLog from "../../assets/image/tailwindcsslogo.svg"

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <h1 className={style.title}>ABOUT THE DEVELOPERS</h1>

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
      <h2 className={style.title}>TECHNOLOGIES APPLIED TO THE PROJECT</h2>
      <div className={style.row}>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${reactLog})` }}
            />
          </div>
          <div className={style.info}>
            <h4 className={style.name}>React</h4>
            <p className={style.description}>
              React is a JavaScript library for building user interfaces.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${trelloLog})` }}
            />
          </div>
          <div className={style.info}>
            <h4 className={style.name}>Trello</h4>
            <p className={style.description}>
              Trello is a web-based project management and collaboration tool.
            </p>
          </div>
        </div>
        {/* Add more cards for other technologies */}
        <div className={style.card}>
          <div className={style.imageContainer}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${discordLog})` }}
            />
          </div>
          <div className={style.info}>
            <h4 className={style.name}>Discord</h4>
            <p className={style.description}>
              React is a JavaScript library for building user interfaces.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${firebaseLog})` }}
            />
          </div>
          <div className={style.info}>
            <h4 className={style.name}>Tailwind</h4>
            <p className={style.description}>
              React is a JavaScript library for building user interfaces.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${githubLog})` }}
            />
          </div>
          <div className={style.info}>
            <h4 className={style.name}>MongoDB</h4>
            <p className={style.description}>
              React is a JavaScript library for building user interfaces.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${pagoLog})` }}
            />
          </div>
          <div className={style.info}>
            <h4 className={style.name}>Mercado Pago</h4>
            <p className={style.description}>
              React is a JavaScript library for building user interfaces.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${mongoLog})` }}
            />
          </div>
          <div className={style.info}>
            <h4 className={style.name}>Firebase</h4>
            <p className={style.description}>
              React is a JavaScript library for building user interfaces.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${tailLog})` }}
            />
          </div>
          <div className={style.info}>
            <h4 className={style.name}>Mongoose</h4>
            <p className={style.description}>
              React is a JavaScript library for building user interfaces.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${reactLog})` }}
            />
          </div>
          <div className={style.info}>
            <h4 className={style.name}>Git + GitHub</h4>
            <p className={style.description}>
              React is a JavaScript library for building user interfaces.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${reactLog})` }}
            />
          </div>
          <div className={style.info}>
            <h4 className={style.name}>Visual Studio Code</h4>
            <p className={style.description}>
              React is a JavaScript library for building user interfaces.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${reactLog})` }}
            />
          </div>
          <div className={style.info}>
            <h4 className={style.name}>Vite</h4>
            <p className={style.description}>
              React is a JavaScript library for building user interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
