// import hero from "../images/hero-img.png";

// const HeroImage = () => {
//   return (
//     <>
//       <style>{``}</style>
//       <div id="hero-img" className="col col-md-5">
//         <img
//           className="img-fluid"
//           src={hero}
//           alt="students studying at computers"
//           width="846"
//           height="724"
//         />
//       </div>
//     </>
//   );
// };
import { useState } from "react";
import hero1 from "../images/hero/hero1.png";
import hero2 from "../images/hero/hero2.png";
import hero3 from "../images/hero/hero3.png";
// import hero4 from "../images/hero/hero4.png";
import beard from "../images/hero/beard/beard.png";
import beardtxt from "../images/hero/beard/beardtxt.png";
import hat from "../images/hero/hat/hat.png";
import hattxt from "../images/hero/hat/hattxt.png";
import purple from "../images/hero/purple/purple.png";
import purpletxt from "../images/hero/purple/purpletxt.png";

// const beardEl = document.getElementById("beard");
// const beardTxtEl = document.getElementById("beard-txt");
// const purpleEl = document.getElementById("purple");
// const purpleTxtEl = document.getElementById("purple-txt");
// const hatEl = document.getElementById("hat");
// const hatTxtEl = document.getElementById("hat-txt");

const HeroImage = () => {
  console.log("hero image rendered");
  const [avatar, setAvatar] = useState(1);
  setTimeout(() => {
    animationHandler();
  }, 6100);

  const animationHandler = () => {
    setAvatar(avatar >= 3 ? avatar - 2 : avatar + 1);
  };
  return (
    <>
      <style>{`
        
        #beard-txt {
            transform: scale(0);
            z-index: 3;
            transition: 2s;
        }
        #beard {                        
            z-index: 2;
            border-radius: 100%;
        }

        .grow-beard-head {
            animation: grow-head 6s linear forwards;
        }
        .grow-beard-text {
            animation: grow-text-beard 5.8s linear forwards;
            transition: 2s;
        }

        #purple-txt {
            transform: scale(0);
            z-index: 3;
        }
        #purple {  
            z-index: 2;
            border-radius: 100%;
        }

        #hat-txt {
            transform: scale(0);
            z-index: 3;
        }
        #hat {            
            z-index: 2;
            border-radius: 100%;
        }

        .grow-head {
            animation: grow-head 6s linear forwards;
            
        }
        .grow-text {
            animation: grow-text 5.8s ease-in-out forwards;
        }
        
        @keyframes grow-head {
            0%{transform: scale(1)} 
            30%{transform: scale(1.5) translateY(-1rem)}
            50%{transform: scale(1.45) translateY(-1rem)}
            80%{transform: scale(1.5) translateY(-1rem)} 
            100%{transform: scale(1) translateY(0)}
        }
        @keyframes grow-text-beard {
            0%{transform:  scale(0) translateX(0) translateY(0)}             
            20%{transform: scale(1.75) translateX(-10px) translateY(-1rem)}
            50%{transform: scale(1.65) translateX(-10px) translateY(-1.25rem)}
            80%{transform: scale(1.75) translateX(-10px) translateY(-1rem)} 
            100%{transform: scale(0) translateY(0)}
        }


        @keyframes grow-text {
            0%{transform:  scale(0) translateX(0) translateY(0)}             
            20%{transform: scale(1.75) translateX(15px) translateY(-1rem)}
            50%{transform: scale(1.65) translateX(15px) translateY(-1.25rem)}
            80%{transform: scale(1.75) translateX(15px) translateY(-1rem)} 
            100%{transform: scale(0) translateY(0)}
        }

        #hero-left, #hero-right {
          animation: slide 8s linear infinite;
        }

        #hero-right {
          animation: slide 7.5s linear infinite;
          animation-delay: 1s;
        }
        
        #hero-center {
          animation: slide-middle 8s linear infinite;
        }

        .bobble {
          animation: bobble 3.5s linear infinite;
        }

        @keyframes bobble {
          0%{transform: scale(1)}
          25%{transform: translateY(5px) scale(1.06)}
          50%{transform: scale(1)}
          75%{transform: translateY(-5px) scale(1.06)}
          100%{transform: scale(1)}
        }

        @keyframes slide {
          0%{transform: translateY(0)}         
          50%{transform: translateY(8px)}
          100%{transform: translateY(0)}
        }

        @keyframes slide-middle {
          0%{transform: translateY(0)}         
          50%{transform: translateY(18px)}
          100%{transform: translateY(0)}
        }
    `}</style>
      <div className="container col col-md-5 d-flex align-items-center justify-content-between">
        <div className="col px-2">
          <div
            id="beard-container"
            className="d-flex flex-column align-items-center my-4"
          >
            <img
              className={
                avatar === 1 ? "img-fluid grow-beard-text" : "img-fluid"
              }
              id="beard-txt"
              src={beardtxt}
              alt="I enjoyed my class"
            />
            <img
              className={
                avatar === 1 ? "img-fluid grow-beard-head" : "img-fluid bobble"
              }
              id="beard"
              src={beard}
              alt="guy with beard"
            />
          </div>
          <img
            className="img-fluid"
            id="hero-left"
            src={hero1}
            alt="student studying"
          />
        </div>

        <div className="col px-2">
          <img
            id="hero-center"
            className="img-fluid"
            src={hero2}
            alt="student studying"
          />
          <div
            id="hat-container"
            className="d-flex flex-column align-items-center mb-4 mt-0"
          >
            <img
              className={avatar === 2 ? "img-fluid grow-text" : "img-fluid"}
              id="hat-txt"
              src={hattxt}
              alt="The math class really helped me with my grades"
            />
            <img
              className={
                avatar === 2 ? "img-fluid grow-head" : "img-fluid bobble"
              }
              id="hat"
              src={hat}
              alt="girl in brown hat"
            />
          </div>
        </div>

        <div className="col px-2">
          <div
            id="purple-container"
            className="d-flex flex-column align-items-center my-4"
          >
            <img
              className={avatar === 3 ? "img-fluid grow-text" : "img-fluid"}
              id="purple-txt"
              src={purpletxt}
              alt="My class was very interactive"
            />
            <img
              className={
                avatar === 3 ? "img-fluid grow-head" : "img-fluid bobble"
              }
              id="purple"
              src={purple}
              alt="girl with purple hair"
            />
          </div>
          <img
            id="hero-right"
            className="img-fluid"
            src={hero3}
            alt="student studying"
          />
        </div>
      </div>
    </>
  );
};
export default HeroImage;
