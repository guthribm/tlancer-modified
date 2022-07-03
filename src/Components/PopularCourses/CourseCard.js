const CourseCard = (props) => {
  return (
    <>
      <style>{`
    .popular-courses-card {
        background: #f6fbe7;
        border-radius: 20px;
        border: none;
    }
    .popular-courses-card-body {
        display: flex;
        flex-direction: column;   
        align-items: center;
        justify-content: space-between;     
    }    
    .popular-courses-card h3 {
        color: #00274c;
        font-family: 'Ubuntu', san-serif;
    }
    .popular-courses-card p {
        font-family: 'Work Sans', sans-serif;
        color: #6c757d;
        font-size: 16px;
    }
    `}</style>
      <div className="card popular-courses-card pt-5 pb-2 px-2 m-4">
        <div className="card-body popular-courses-card-body">
          <img src={props.src} alt={props.alt} width={"60"} height={"60"} />
          <h3 className="card-title fw-bold my-4 h5">{props.title}</h3>
          <p className="card-text lh-sm">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
