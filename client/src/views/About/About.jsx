import style from "./About.module.css";
import frannpor from "./frannpor.png";
import ferron from "./ferron.jpeg";
import nachoman from "./nachoman.jpeg";
import niloeche from "./niloeche.jpg";
import stellcomi from "./stellcomi.jpg"
import valenzal from "./valenzal.png";
import stefbrav from "./stefbrav.png";
import titoxd from "./titoxd.webp";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={style.all}>
      <div className={style.container}>
        <div className={style.img_content}>
          <div className={style.img} style={{ backgroundImage: `url(${ferron})` }}>
            <div className={style.info}>
              <h4 className="font-bold">Fernanda Ron</h4>
              <p className="p-8 -m-8 mx-2 text-xs">
                Fernanda is a talented Full Stack Developer with expertise in
                both front-end and back-end development. She has contributed to
                the project by working on design elements and implementing logic.
              </p>
            </div>
          </div>
        </div>
        <div className={style.img_content}>
          <div className={style.img} style={{ backgroundImage: `url(${frannpor})` }}>
            <div className={style.info}>
              <h4 className="font-bold">Francisco Porciel</h4>
              <p className="p-8 -m-8 mx-2 text-xs">
                Francisco, also known as Fran, is one of the back-end developers
                in the team. He has been a strong leader throughout the project,
                showcasing excellent problem-solving skills and logical
                thinking.
              </p>
            </div>
          </div>
        </div>
        <div className={style.img_content}>
          <div className={style.img} style={{ backgroundImage: `url(${titoxd})` }}>
            <div className={style.info}>
              <h4 className="font-bold">Hector Granucci</h4>
              <p className="p-8 -m-8 mx-2 text-xs">
                Hector, commonly known as Tito, is a dedicated back-end developer
                who brings valuable insights and contributes to the project with
                his logical approach. He plays a key role in developing robust
                solutions.
              </p>
            </div>
          </div>
        </div>
        <div className={style.img_content}>
          <div className={style.img} style={{ backgroundImage: `url(${nachoman})` }}>
            <div className={style.info}>
              <h4 className="font-bold">Ignacio Mander</h4>
              <p className="p-8 -m-8 mx-2 text-xs">
                Ignacio, also known as Nacho, has been involved in various
                design aspects of the project. He has a keen eye for aesthetics
                and has contributed significantly to creating visually appealing
                interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.img_content}>
          <div className={style.img} style={{ backgroundImage: `url(${niloeche})` }}>
            <div className={style.info}>
              <h4 className="font-bold">Nilo Echezarreta</h4>
              <p className="p-8 -m-8 mx-2 text-xs">
                Nilo is one of the back-end developers who brings strong
                leadership to the team. He is highly skilled in problem-solving
                and plays a crucial role in developing the projects core
                functionalities.
              </p>
            </div>
          </div>
        </div>
        <div className={style.img_content}>
          <div className={style.img} style={{ backgroundImage: `url(${stefbrav})` }}>
            <div className={style.info}>
              <h4 className="font-bold">Stefano Bravi</h4>
              <p className="p-8 -m-8 mx-2 text-xs">
                Stefano is a passionate Full Stack Developer with a particular
                interest in design. He has contributed extensively to creating
                visually appealing interfaces and ensuring a seamless user
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className={style.img_content}>
          <div className={style.img} style={{ backgroundImage: `url(${stellcomi})` }}>
            <div className={style.info}>
              <h4 className="font-bold">Stella Cominotti</h4>
              <p className="p-8 -m-8 mx-2 text-xs">
                Stella, with her strong background in design, has played a key
                role in creating beautiful and intuitive interfaces. She
                combines her design skills with development expertise to deliver
                outstanding results.
              </p>
            </div>
          </div>
        </div>
        <div className={style.img_content}>
          <div className={style.img} style={{ backgroundImage: `url(${valenzal})` }}>
            <div className={style.info}>
              <h4 className="font-bold">Valentin Zalazar</h4>
              <p className="p-8 -m-8 mx-2 text-xs">
                Valentin is a skilled Full Stack Developer who brings valuable
                contributions to the project. With expertise in both front-end
                and back-end development, he has been instrumental in
                implementing key features.
              </p>
            </div>
          </div>
        </div>
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
