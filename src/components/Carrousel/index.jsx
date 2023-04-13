import React, { useRef } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import "./index.css";

const ContentCarrousel = styled.div`
  display: flex;
  scroll-behavior: smooth;
  overflow-x: scroll;
  align-items: center;
  padding: 10px 0 30px 0;
  ::-webkit-scrollbar {
    height: 0px;
  }
  ::-mox-scrollbar P
    height: 0px;
`;

function Carrousel({ title, children }) {
  const refArrowRight = useRef();
  const refArrowLeft = useRef();
  const refCarrousel = useRef();

  const handleClickRight = () => {
    refCarrousel.current.scrollLeft += 200;
    if (
      refCarrousel.current.scrollLeft >=
      refCarrousel.current.scrollLeft.clientWidth
    ) {
      refCarrousel.current.scrollLeft =
        refCarrousel.current.scrollLeft.clientWidth;
    } else {
      refCarrousel.current.scrollLeft += refCarrousel.current.clientWidth;
    }
  };
  const handleClickLeft = () => {
    if (refCarrousel.current.scrollLeft <= 0) {
      refCarrousel.current.scrollLeft = 0;
    } else {
      refCarrousel.current.scrollLeft -= refCarrousel.current.clientWidth;
    }
  };
  return (
    <div>
      <h3 className="title-carrousel">{title}</h3>
      <ContentCarrousel ref={refCarrousel} className="carrousel">
        <div
          style={{ position: "absolute", left: "30px", zIndex: "2" }}
          ref={refArrowLeft}
        >
          <button
            className="btn-carrousel"
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              color: "#181818",
              fontSize: "27px",
            }}
            ref={refArrowLeft}
            onClick={handleClickLeft}
          >
            <IoIosArrowBack />
          </button>
        </div>
        <div
          style={{
            width: "max-content",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          {children}
        </div>
        <div style={{ position: "absolute", right: "30px" }}>
          <button
            className="btn-carrousel"
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              color: "#181818",
              fontSize: "27px",
            }}
            ref={refArrowRight}
            onClick={handleClickRight}
          >
            <IoIosArrowBack style={{ transform: "rotate(180deg)" }} />
          </button>
        </div>
      </ContentCarrousel>
    </div>
  );
}

export default Carrousel;
