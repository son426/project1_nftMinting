import styled from "styled-components";
import { accentColor } from "../style";
import data from "../data.json";

const CardList = styled.div`
  .container {
    padding: 50px;
    position: absolute;
    height: 400px;
    width: auto;
    overflow: scroll;
    box-sizing: border-box;
    display: flex;
  }

  .card {
    display: flex;
    height: 280px;
    width: 200px;
    background-color: white;
    border: 1px solid ${accentColor};
    border-radius: 10px;

    /*   margin-left: -50px; */
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
  }

  .card:not(:first-child) {
    margin-left: -50px;
  }

  .card:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
    box-shadow: -1rem 0 3rem ${accentColor};
  }

  .card:hover ~ .card {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
  }

  .title {
    color: ${accentColor};
    font-weight: 600;
    position: absolute;
    left: 20px;
    top: 15px;
  }
`;

const Img = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 150px;
    height: 150px;
  }
`;

const Practice = () => {
  return (
    <CardList>
      <div className="container">
        <div className="card">
          <h3 className="title">Card 1</h3>
          <Img>
            <img src={data[0].img_src} />
          </Img>
        </div>
        <div className="card">
          <h3 className="title">Card 1</h3>
          <Img>
            <img src={data[0].img_src} />
          </Img>
        </div>
        <div className="card">
          <h3 className="title">Card 1</h3>
          <Img>
            <img src={data[0].img_src} />
          </Img>
        </div>
        <div className="card">
          <h3 className="title">Card 1</h3>
          <Img>
            <img src={data[0].img_src} />
          </Img>
        </div>
        <div className="card">
          <h3 className="title">Card 2</h3>
        </div>
        <div className="card">
          <h3 className="title">Card 3</h3>
        </div>
        <div className="card">
          <h3 className="title">Card 4</h3>
        </div>
        <div className="card">
          <h3 className="title">Card 4</h3>
        </div>
      </div>
    </CardList>
  );
};

export { CardList, Img, Practice };
