import styled from "@emotion/styled";
import {CSSProperties} from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

function Loader() {
  return (
    <Overlay>
      <ClipLoader
        color="#00ffae"
        cssOverride={override}
        size={150}
      />
    </Overlay>
  );
}

export const Overlay = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;

export default Loader;