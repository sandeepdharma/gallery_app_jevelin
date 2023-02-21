import "./Main.scss";
import { Menu } from "antd";
import React, { useState, useEffect } from "react";
const menuData = [
  {
    image:
      "https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Portfolio_2_2-420x660.jpg",
    type: ["COMMERCIAL", "MISC"],
    heading: "Stack of bottles",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies, rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...",
  },
  {
    image:
      "https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Portfolio_3-420x660.jpg",
    type: ["DESIGN", "MOCH-UP"],
    heading: "Brand in the bag",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies, rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...",
  },
  {
    image:
      "https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Portfolio_6_4-420x660.jpg",
    type: ["MISC", "DESIGN"],
    heading: "Mock up of the web",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies, rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...",
  },
  {
    image:
      "https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Paperback-Book-Mockup-vol-2-420x660.jpg",
    type: ["DESIGN", "COMMERCIAL"],
    heading: "Books & covers",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies, rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...",
  },
  {
    image:
      "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Portfolio_5_1-420x660.jpg",
    type: ["DESIGN", "MISC"],
    heading: "Notebook design",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies, rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...",
  },
  {
    image:
      "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Portfolio_6-420x660.jpg",
    type: ["MISC", "MOCH-UP"],
    heading: "Three moch up stack",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies, rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...",
  },
  {
    image:
      "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/photo-1455612810508-8faae6db6455-420x660.jpg",
    type: ["COMMERCIAL", "DESIGN"],
    heading: "Office composition",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies, rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...",
  },
  {
    image:
      "https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Portfolio_1_1-420x660.jpg",
    type: ["DESIGN", "COMMERCIAL"],
    heading: "Half & frame",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies, rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...",
  },
  {
    image:
      "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/techandall-minimalist-waterbottle-420x660.jpg",
    type: ["DESIGN", "COMMERCIAL", "MOCH-UP"],
    heading: "Bottle of video",
    matter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices diam lorem, sit amet ullamcorper elit vulputate posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec lacus ultricies, rhoncus risus eget, sodales ex. In malesuada urna magna. Vestibulum ante...",
  },
];

const Main = () => {
  const [current, setCurrent] = useState("ALL");
  const [data, setData] = useState(menuData);
  const [animate, setAnimate] = useState(false);
  const items = [
    {
      label: "ALL",
      key: "ALL",
    },
    {
      label: "COMMERCIAL",
      key: "COMMERCIAL",
    },
    {
      label: "DESIGN",
      key: "DESIGN",
    },

    {
      label: "MOCH-UP",
      key: "MOCH-UP",
    },
    {
      label: "MISC",
      key: "MISC",
    },
  ];
  const showDesiredImages = (data) => {
    if (data === "ALL") {
      setData(menuData);
    } else {
      let ele = [];
      menuData.forEach((element) => {
        if (element.type.includes(data)) {
          ele.push(element);
        }
      });
      setData(ele);
    }
  };
  const onClick = (e) => {
    setCurrent(e.key);
    showDesiredImages(e.key);
    setAnimate(!animate);
    disableAnimation()
  };
  const disableAnimation = () => {
    setTimeout(()=>{
      setAnimate(false)
      console.log('annima')
    },900)
  }
  const updateData = (menuData) => {
    setData(menuData);
  };
  useEffect(() => {
    if (data === undefined) {
      updateData(menuData);
    }
  });
  return (
    <div className="Main-container">
      <Menu
        className="menu-container"
        mode=""
        items={items}
        onClick={onClick}
        selectedKeys={[current]}
      />
      <div className="gallery-container">
        {data.map((item) => (
          <div className={animate ? "each-container enable-animation" : 'each-container'}>
            <div
              className="each-image-container"
              style={{
                backgroundSize: "contain",
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="image-title-container">
                <spam className="image-title">{item.heading}</spam>
              </div>
            </div>
            <div className="each-matter-container">
              <p className="image-matter">{item.matter}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
