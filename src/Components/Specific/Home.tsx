import React from "react";
import "../../assets/Styles/Components/Home.css";
import "../../assets/Styles/Global.css";
import "../../assets/Styles/default.css";

// import "../../assets/Styles/output.css";
// import "../../assets/Styles/responsive.css";
// import "../../assets/Styles/style.css";

// import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>MyPranaya Cinematic World</h1>
        <p>
          Our Commitment to New Scriptwriters and Directors At My Pranaya
          Cinematic World , we believe in the power of fresh perspectives and
          innovative storytelling. The future of c television relies on the
          creativity and vision of emerging scriptwriters and directors. We are
          dedicated to providing a platform where new voices can be heard and
          nurtured, ensuring a diverse and dynamic future for the entertainment
          industry.
        </p>
        <p>
          Join Our Community We invite you to join our community of passionate
          storytellers and filmmakers. At My Pranaya Cinematic World, you'll
          find a supportive and inspiring environment where your ideas can
          flourish.
        </p>
        <img
          src="../../../public/Images/CameraImages/8.jpg"
          alt="HomeCameraImage"
        />
        
      </div>
    </header>
  );
};

export default Home;
