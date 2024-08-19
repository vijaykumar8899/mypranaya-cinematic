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
        {/* <img
          src="../../../public/Images/CameraImages/5.jpg"
          alt="HomeCameraImage"
        /> */}
        // * spotlight-new-talent START
        <div className="spotlight-new-talent">
          <h3>Spotlight on New Talent</h3>
          <p>
            We are passionate about discovering and promoting new talent.Each
            issue of My Pranaya Cinematic World features a spotlight section
            where we highlight the work of up-and-coming scriptwriters. Submit
            your scripts, participate in our competitions, and let your voice be
            heard.
          </p>
          <a href="https://www.youtube.com/embed/MKo06Ndx76U?si=CnW2FhsGBpLwd66l">
            Youtube Video{" "}
          </a>
        </div>
        // * submit-your-talent START
        <div className="submit-your-talent">
          <h2>Submit your talent here.</h2>
          <h3>A platform for your stories.</h3>
          <p>
            We understand that every great project begins with a compelling
            script and a director's unique vision. Whether you're a scriptwriter
            with a story that needs to be told or a director ready to bring your
            vision to life, we are here to support you every step of the way.
            Our resources and network are designed to help you refine your
            craft, connect with industry professionals, and reach a wider
            audience.
          </p>
        </div>
        // * submit-your-talent END
        <div className="new-era">
          <h2>Welcome to My Pranaya Cinematic World: A New Era for Scriptwriting Talent</h2>
          <p>We are thrilled to announce the launch of My Pranaya Cinematic World, a dedicated platform for upcoming scriptwriters. Our mission is to shine a spotlight on emerging talent and provide the resources and inspiration needed to craft compelling stories for the screen. Whether you're a novice writer or someone with a few scripts under your belt, our magazine is here to support your journey.</p>
          <img src="" alt="welcome-to-my-pranaya-cinematic-world" />
        </div>
        // * celebrating-creativity
        <div className="celebrating-creativity">
          <h2>Celebrating Creativity and Innovation</h2>
          <p>We celebrate creativity and innovation in all its forms. At My Pranaya Cinematic World, we are passionate about discovering new talent and showcasing it to the world. We host regular events, workshops, and competitions that provide opportunities for you to gain recognition and build your portfolio. Your unique voice and vision are what drive us, and we are excited to see what you will create. Are you a talented writer or scriptwriter with a compelling story to tell? At My Pranaya Cinematic world, we believe in the power of great storytelling. We are dedicated to discovering and nurturing new talent, offering a unique platform where your creativity can shine. Since its inception, the platform has grown rapidly, attracting thousands of registered users. The community is a vibrant mix of aspiring writers, film enthusiasts, and industry professionals, all working together to elevate the art of storytelling. Ajith's dedication and the platform's innovative features have made "My Pranaya Cinematic World" a cornerstone in the Indian film industry, inspiring countless writers to pursue their dreams and share their unique stories with the world."My Pranaya Cinematic World" stands as a testament to the power of storytelling and the impact of a supportive community. It continues to inspire and empower scriptwriters, ensuring their voices are heard and their stories are brought to life.</p>
        </div>
        // * why-choose-us
        <div className="why-choose-us">
          <div className="why-choose-us-container">
          <h3>Opportunity to be produced.</h3>
          <p>If your story stands out, we'll bring it to life on the screen. We are always on the lookout for fresh, original, and captivating narratives.</p>
          </div>
          <div className="why-choose-us-container">
            <h3>Support for new talent</h3>
            <p>Whether you're an experienced writer or just starting out, we welcome you. Our team is here to support you through the journey from script to screen.</p>
          </div>
          <div className="why-choose-us-container">
            <h3>Collaborative Environment</h3>
            <p>Join a community of like-minded creatives. Share your ideas, get feedback, and collaborate with other writers and industry professionals.
            </p>
          </div>
          <h3>Dedicated Magazine</h3>
          <p>Our newly launched magazine is dedicated to showcasing upcoming scriptwriters. Get your work featured and gain the recognition you deserve.</p>
          <div className="why-choose-us-container">
          </div>
        </div>
        <img src="" alt="you-can-break-the-readers-heart" />
        // * 
        <div></div>
      </div>
    </header>
  );
};

export default Home;
