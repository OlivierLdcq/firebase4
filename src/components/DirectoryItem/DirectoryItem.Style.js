import styled from "styled-components";

export const BackgroundImageCS = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const BodyCS = styled.div`
  color: grey;
  background-color: white;
  padding: 10px;
  opacity: 0.7;
  position: absolute;
  text-align: center;
  height: 90px;
  border: solid white 2px;
  cursor: pointer;
  transition: all ease 1s;
  h2 {
    text-transform: uppercase;
    font-weight: bolder;
    padding: 0px;
    margin: 0px;
  }
  p {
    color: rgb(142, 142, 142);
    position: relative;
    bottom: 10px;
  }
`;

export const DirectoryCS = styled.div`
  min-width: 30%;
  height: 240px;
  display: flex;
  flex: 1 1 auto;
  border: solid black 2px;
  justify-content: center;
  align-items: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;

    & ${BackgroundImageCS} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${BodyCS} {
      opacity: 0.9;
    }
  }
`;

/* 
.Category {
 
  }
  .backgroundImage {
 
  }
  .categoryBody {
    color: grey;
    background-color: white;
    padding: 10px;
    opacity: 0.7;
    position: absolute;
    text-align: center;
    height: 90px;
    border: solid white 2px;
    cursor: pointer;
    transition: all ease 1s;
    & h2 {
      font-weight: bolder;
      padding: 0px;
      margin: 0px;
    }
    p {
      color: rgb(142, 142, 142);
      position: relative;
      bottom: 10px;
     
    }
  }
} */
