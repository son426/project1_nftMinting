import styled from "styled-components";

export const accentColor = "#4e39f9";
export const bgColor = "#F1F4F8";

export const Project = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  img {
    width: 100%;
  }
  span {
    padding: 20px;
    line-height: 1.2rem;
  }
  .summary {
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const ImgList = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 30px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  img {
    margin-right: 20px;
    border: 1px solid rgba(0, 0, 0, 0.7);
    width: 150px;
    height: 150px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  }
  img:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  }
  .img:hover ~ .img {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
  }
`;
