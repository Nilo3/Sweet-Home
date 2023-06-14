import "./Recommendations.css"
import Footer from "../Footer/Footer"
import livingroomRecommendations from "./images/recomm1.jpg.webp"
import recomm2 from "./images/recomm2.jpeg"

export default function Recommendations () {
    return (
        <>
        <div className="Recommendations">
            <div className="recomContainer">
                <h2 className="titleRecommendations1">Achieve that sweet exclusive space </h2>
                <p className="recommendationstext1">We offer furniture of the highest quality, designed exclusively for our customers. We are dedicated to helping you create a space that reflects your unique personality. </p>
                <img className = "livingroom" alt="livingroom" src={livingroomRecommendations}></img>
                <p className="recommendationstext2">Find the perfect piece of furniture that complements your style and transforms your home into an authentic and inviting place.</p>
                <img className="recomm2" alt="Modern Living Room" src={recomm2}></img>
                <div className="recommSeparation"></div>
            </div>
         </div>
        {/* <div className="footer">
        <Footer/>
        </div> */}
        </>
    )}