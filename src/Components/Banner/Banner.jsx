import { React, useState } from "react";
import "./Banner.css";
import { RxCross1 } from "react-icons/rx";
import banner_img from "../../assets/banner_img.webp";

const poster = () => {
  const [Isvisible, setIsvisible] = useState(true);
  const [scroll, setscroll] = useState(false);

  function HandleClick() {
    setIsvisible(false);
  }

  function ToggleScroll() {
    setscroll(true);
  }

  !scroll ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  return (
    <>
      {!scroll && Isvisible && (
        <div className="poster-bg">
          <div className="poster">
            <div className="left">
              <img
                src={banner_img}                alt="banner_image"
              />
            </div>
            <div className="right">
              <div onClick={HandleClick && ToggleScroll}>
                <RxCross1 className="cross" />
              </div>
              <h2>Getting your FREE website & marketing Training is just a click away.</h2>
              <h4>Get a professional website for FREE and learn how to boost gym membership with expert sales & marketing guidance.</h4>
              <a onClick={HandleClick && ToggleScroll}target="_blank" href="https://forms.gle/gdWr1bhE6To4dR4m8">
                <button>Get it now!</button>
              </a>
            </div>
          </div>
          {/* <Draggable initialPosition={[0,0]} className="dongle">
            <p>Banner</p>
          </Draggable> */}
        </div>
      )}
    </>
  );
};

export default poster;
