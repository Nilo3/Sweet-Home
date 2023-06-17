import style from "./About.module.css";

const About = () => {
  return (
    <div>
        <div className={style.container}>
            <div className={style.img_content}>
                <div className={style.img}>
                    <div className={style.info}>
                        <h1>Ignacio Mander</h1>
                        <h4>Full Stack Developer</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default About;