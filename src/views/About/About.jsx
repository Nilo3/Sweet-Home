import style from "./About.module.css";
// import Fran from "./frannpor.png"

const About = () => {
  return (
    <div className={style.all}>
        <div className={style.container}>
            <div className={style.img_content}>
                <div className={style.img}>
                    <div className={style.info}>
                        <h1>FERNANDA</h1>
                        <h1>Full Stack Developer</h1>
                    </div>
                </div>
            </div>
            <div className={style.img_content}>
                <div className={style.img}>
                    <div className={style.info}>
                        <h1>FRANCISCO</h1>
                        <h1>Saraza</h1>
                    </div>
                </div>
            </div>
            <div className={style.img_content}>
                <div className={style.img}>
                    <div className={style.info}>
                        <h1>HECTOR</h1>
                        <h1>LOL</h1>
                    </div>
                </div>
            </div>
            <div className={style.img_content}>
                <div className={style.img}>
                    <div className={style.info}>
                        <h1>IGNACIO MANDER</h1>
                        <h1>Ya Supiste</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.container}>
            <div className={style.img_content}>
                <div className={style.img}>
                    <div className={style.info}>
                        <h1>NILO</h1>
                        <h1>Ya Supiste</h1>
                    </div>
                </div>
            </div>
            <div className={style.img_content}>
                <div className={style.img}>
                    <div className={style.info}>
                        <h1>STEFANO</h1>
                        <h4>Full Stack Developer</h4>
                    </div>
                </div>
            </div>
            <div className={style.img_content}>
                <div className={style.img}>
                    <div className={style.info}>
                        <h1>STELLA</h1>
                        <h4>Full Stack Developer</h4>
                    </div>
                </div>
            </div>
            <div className={style.img_content}>
                <div className={style.img}>
                    <div className={style.info}>
                        <h1>VALENTÍN</h1>
                        <h4>Full Stack Developer</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default About;