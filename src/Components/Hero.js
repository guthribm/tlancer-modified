import hero from "../images/hero-img.png";
import imunify from "../images/partners/imunify.png";
import ibm from "../images/partners/ibm.png";
import microsoft from "../images/partners/microsoft.png";
import certiport from "../images/partners/certiport.png";
import ic3 from "../images/partners/ic3.png";
import apple from "../images/partners/apple.png";

const Hero = () => {
  const partnersList = [imunify, ibm, microsoft, certiport, ic3, apple];
  const partnersRow = partnersList.map((partner, index) => {
    return (
      <div className="col">
        <img
          key={index}
          src={partner}
          alt="partner logo"
          className="img-fluid"
        />
      </div>
    );
  });

  return (
    <>
      <style>{`
        #hero-section h1 {
            font-family: 'Ubuntu', san-serif;
            font-weight: medium;
        }

        #hero-search {
            border: none;
        }

        #search-icon {
            opacity: .5;
        }
    
        #hero-search-container {
            border: 1px solid #d1d5db;
            border-radius: 20px;
            padding: 1rem;
        }

        #hero-search-btn {
            background: none;
            padding: .25rem 1rem;
            margin: 0;
            border: none;
            color: var(--active-link);
        }
    `}</style>
      <section id="hero-section" className="container-fluid">
        <div className="container d-flex justify-content-center align-items-start p-5 my-5">
          <div className="col col-md-7 me-5 pt-5">
            <h1 className="mb-5 display-4 fw-bold">
              Learn any course at your own pace here from world class tutors
            </h1>
            <div id="hero-search-container" className="mb-5">
              <svg
                id="search-icon"
                className="mx-3 bi bi-search"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <input
                id="hero-search"
                className="w-75"
                placeholder="Search for any course, tutors, categories"
                type={"text"}
              />
              <button id="hero-search-btn" className="fw-medium">
                Search
                <span className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <br />
            <div className="row pt-5 align-items-center">{partnersRow}</div>
          </div>
          <div className="col col-md-5">
            <img
              className="img-fluid"
              src={hero}
              alt="students studying at computers"
              width="846"
              height="724"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
