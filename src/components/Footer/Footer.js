import "./Footer.scss";
import { FiMap } from "react-icons/fi";
import { SlCallOut } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Badge } from "antd";
const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="about-container">
        <h1 className="about-heading">About Us</h1>
        <p className="about-matter">
          Duis semper mauris vitae purus rhoncus suscipit. Nunc dictum dapibus
          tellus, at viverra risus pharetra id. Nulla facilisi. Ut mollis et
          augue non gravida. Sed ipsum urna, venenatis ut vehicula nec, ultrices
          quis sapien.
        </p>
      </div>
      <div className="contacts-container">
        <h1 className="contact-heading">Contacts</h1>
        <div className="each-contact-container">
          <FiMap className="contact-icon" />
          <p className="contact-matter">County, Street name - number</p>
        </div>
        <div className="each-contact-container">
          <SlCallOut className="contact-icon" />
          <p className="contact-matter">032 267 899 442</p>
        </div>
        <div className="each-contact-container">
          <AiOutlineMail className="contact-icon" />
          <p className="contact-matter">company@name.com</p>
        </div>
        <div className="each-contact-container">
          <AiOutlineClockCircle className="contact-icon" />
          <p className="contact-matter">Mon.-Fri.: 10-20 Sun.: 12-16</p>
        </div>
      </div>
      <div className="recents-container">
        <h1 className="recent-title">Recent Posts</h1>
        <div className="each-post-container">
          <Badge count={1}>
            <img
              src="https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Blog_1-150x150.jpg"
              alt="/"
              className="post-image"
            />
          </Badge>
          <div className="post-matter-container">
            <p className="post-matter">TRAVEL, UNCATEGORIZED</p>
            <p className="post-heading"> The team watchers</p>
          </div>
        </div>
        <div className="each-post-container">
          <Badge count={1}>
            <img
              src="https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Blog_2-150x150.jpg"
              alt="/"
              className="post-image"
            />
          </Badge>
          <div className="post-matter-container">
            <p className="post-matter">DESIGN, TRAVEL</p>
            <p className="post-heading"> Creative day off </p>
          </div>
        </div>
        <div className="each-post-container">
          <Badge count={1}>
            <img
              src="https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Blog_3-150x150.jpg"
              alt="/"
              className="post-image"
            />
          </Badge>
          <div className="post-matter-container">
            <p className="post-matter">NEWS, TRAVEL</p>
            <p className="post-heading"> The smell of roses </p>
          </div>
        </div>
      </div>
      <div className="latest-container">
        <h1 className="latest-title">Latets Projects</h1>
        <div className="latest-image-container">
          <img
            src="https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Portfolio_2_2-150x150.jpg"
            alt="/"
            className="latest-each-image"
          />
          <img
            src="https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Portfolio_3-150x150.jpg"
            alt="/"
            className="latest-each-image"
          />
          <img
            src="https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Portfolio_6_4-150x150.jpg"
            alt="/"
            className="latest-each-image"
          />
          <img
            src="https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Paperback-Book-Mockup-vol-2-150x150.jpg"
            alt="/"
            className="latest-each-image"
          />
          <img
            src="https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Portfolio_5_1-150x150.jpg"
            alt="/"
            className="latest-each-image"
          />
          <img
            src="https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Portfolio_6-150x150.jpg"
            alt="/"
            className="latest-each-image"
          />
          <img
            src="https://jevelin.shufflehound.com/wp-content/uploads/2016/01/photo-1455612810508-8faae6db6455-150x150.jpg"
            alt="/"
            className="latest-each-image"
          />
          <img
            src="https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Portfolio_1_1-150x150.jpg"
            alt="/"
            className="latest-each-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
