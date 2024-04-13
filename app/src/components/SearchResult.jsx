import styled from "styled-components";
import { BASE_URL, Button } from "../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardsContainer>
      <FoodCards>
        {data?.map(({ name, image, text, price }) => (
          <FoodCard key={name}>
            <div className="food_image">
              <img src={BASE_URL + image} alt={name} />
            </div>

            <div className="food_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>

              <div className="price">
                <Button>$ {price.toFixed(2)}</Button>
              </div>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodCardsContainer>
  );
};

export default SearchResult;

const FoodCardsContainer = styled.section`
  min-height: calc(100vh - 180px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

const FoodCard = styled.div`
  width: 250;
  height: 200;
  display: flex;
  margin: 10px;
  padding: 10px;
  background: url(.png),radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(83, 83, 83, 0.2) 100%);
  border: .3px solid white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-blend-mode: overlay,normal;
  backdrop-filter: blur(3px);

  .food_info {
    max-lines: 5;
    overflow: visible;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    gap: 18px;


    .info{
      column-gap: 20px;
      p{
        font-size: 14px;
        text-align: justify;
        padding-top: 10px;
      }
    }
  }

  &:hover{
    box-shadow: 0px 0px 14px 16px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    border: 3px solid white;
  }
`;
