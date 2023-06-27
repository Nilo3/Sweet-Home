import ChatBot from "react-simple-chatbot";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        {children}
        <div style={{ float: "right" }}>
    <ChatBot steps={steps} />
  </div>
        <Footer />
      </>
    );
  };

  export default Layout