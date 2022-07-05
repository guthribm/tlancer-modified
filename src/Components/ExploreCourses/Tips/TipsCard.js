const TipsCard = (props) => {
  return (
    <>
      <style>{`
        .tip-card {
            border: none;
            box-shadow: 0px 5px 30px rgba(0,0,0,0.06);
            margin-bottom: 6rem;
            color: #00274c;
        }
        .tricks {
            font-family: 'Work Sans', sans-serif;
            font-size: .9rem;
            color: #0ebe6a;
        }
        .tips-title {
            font-family: 'Ubuntu', san-serif;
        }
        .tips-text {
            font-family: 'Work Sans', sans-serif;
            color: #6c757d;
        }
    `}</style>
      <div className="card tip-card mx-4 p-4">
        <img className="card-img-top" src={props.src} alt="Suggested Tip" />
        <div className="card-body p-0">
          <p className="my-3 tricks">Tips & Tricks</p>
          <h5 className="card-title mb-3 h6 fw-bold tips-title">
            {props.title}
          </h5>
          <p className="card-text tips-text">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default TipsCard;
