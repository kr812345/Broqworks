import { React, useState } from "react";
import "./Banner.css";
import { RxCross1 } from "react-icons/rx";

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
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="banner_image"
              />
            </div>
            <div className="right">
              <div onClick={HandleClick && ToggleScroll}>
                <RxCross1 className="cross" />
              </div>
              <h2>Getting your FREE website & marketing Training is just a click away.</h2>
              <h4>Get a professional website for FREE and learn how to boost gym membership with expert sales & marketing guidance.</h4>
              <a onClick={HandleClick && ToggleScroll} target="_blank" href="https://forms.gle/gdWr1bhE6To4dR4m8">
                <button>Get it now!</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default poster;
