import imgCommunity from "../images/img-community.png";
import logoTutors from "../images/logoTutors.svg";
const TlancerCommunity = () => {
  return (
    <>
      <style>
        {`
        .community-container {
            border-radius: 40px;
            box-shadow: 0px 0px 60px rgba(0,0,0,.05);
            padding: 7rem;
        }
        .community, .community-p {
            font-family: 'Work Sans', sans-serif;
            font-weight: 500;
        }
        .community-heading, .btn-community {
            font-family: 'Ubuntu', san-serif;
            font-weight: 500;
        }
        .community-heading span{
            font-family: 'Work Sans', sans-serif;
            font-weight: 700;
        }
        
        .btn-community {
            border: 1px solid var(--dark-blue);
        }
        .btn-community:hover {
            background: var(--dark-blue);
            color: #fff;
        }
        `}
      </style>
      <section className="container-fluid p-5">
        <div className="container community-container d-flex flex-column flex-lg-row">
          <div className="col col-lg-7">
            <div className="my-4">
              <img
                className="img-fluid"
                src={logoTutors}
                alt="tlancer"
                width="107"
                height="28"
              />
              <span className="community ms-2 h4">Community</span>
            </div>
            <h2 className="h1 display-4 community-heading">
              Learn and connect.
              <span className="h1 display-4"> Join learning community</span>
            </h2>
            <p className="community-p h5 mt-4 mb-5">
              Connect with your course mate and share ideas
            </p>
            <button className="btn btn-community px-5 py-3">
              Find communities near you
            </button>
          </div>
          <div className="col col-lg-5">
            <img
              className="img-fluid"
              width={"591"}
              height={"426"}
              src={imgCommunity}
              alt="avatars around a chat box"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TlancerCommunity;
