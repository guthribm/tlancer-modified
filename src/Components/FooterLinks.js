const FooterLinks = () => {
  return (
    <>
      <style>{`
        .footer-col {
          padding-left: 0;
        }
        .footer-col li {
            color: #6b7280;
            font-family: 'Work Sans', sans-serif;
            list-style: none;            
        }
        .footer-col li:first-of-type {
            font-family: 'Ubuntu', san-serif;
            color: #00274c;
            font-weight: 500;
        }
      `}</style>
      <div className="container d-flex mb-5 text-center text-md-start">
        <div className="col-6 text-center">
          <ul className="footer-col">
            <li className="top">Products</li>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div className="col-6 text-center">
          <ul className="footer-col">
            <li className="top">Company</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default FooterLinks;
