import "./RightFixNav.scss";
import { Popover } from "antd";
import { SlLayers } from "react-icons/sl";
import { BiGlassesAlt } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { SlSupport } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
const RightFixNav = () => {
  return (
    <div className="RightFixNav-container">
      <div className="icons-container">
        <Popover placement="left" content={<p>Showcase</p>} trigger="hover">
          <div className="each-icon-container">
            <SlLayers className="icon" />
          </div>
        </Popover>
        <Popover placement="left" content={<p>Demo viewer</p>} trigger="hover">
          <div className="each-icon-container">
            <BiGlassesAlt className="icon" />
          </div>
        </Popover>
        <Popover
          placement="left"
          content={<p>Purchase Jevelin</p>}
          trigger="hover"
        >
          <div className="each-icon-container">
            <HiOutlineShoppingBag className="icon" />
          </div>
        </Popover>
        <Popover
          placement="left"
          content={<p>Questiosn / Answers</p>}
          trigger="hover"
        >
          <div className="each-icon-container">
            <AiOutlineQuestionCircle className="icon" />
          </div>
        </Popover>
        <Popover placement="left" content={<p>Get Support</p>} trigger="hover">
          <div className="each-icon-container">
            <SlSupport className="icon" />
          </div>
        </Popover>
        <Popover
          placement="left"
          content={<p>Ask a Pre-Sale Question</p>}
          trigger="hover"
        >
          <div className="each-icon-container">
            <AiOutlineMail className="icon" />
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default RightFixNav;
