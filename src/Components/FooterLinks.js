const FooterLinks = () => {
  return (
    <>
      <style>{`
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
      <div className="container d-flex mb-5">
        <div className="col">
          <ul className="footer-col">
            <li className="top">Categories</li>
            <li>Mathematics</li>
            <li>Writitng & Language</li>
            <li>Data Analytics</li>
            <li>Design</li>
            <li>Programming</li>
            <li>Business</li>
            <li>Photography</li>
            <li>Video & Animation</li>
            <li>Digital marketing</li>
            <li>Music & Audio</li>
          </ul>
        </div>
        <div className="col">
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
        <div className="col">
          <ul className="footer-col">
            <li className="top">Company</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col">
          <ul className="footer-col">
            <li className="top">Resources</li>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help center</li>
            <li>Tutorials</li>
            <li>Help & Support</li>
          </ul>
        </div>
        <div className="col">
          <ul className="footer-col">
            <li className="top">Legal</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default FooterLinks;
