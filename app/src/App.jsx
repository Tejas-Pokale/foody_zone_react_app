import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredData,setFilteredData] = useState(null)
  const [selectedBtn, setSelectedBtn] = useState('all')

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setFilteredData(json)
        setData(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Unable to fetch data");
      }
    };

    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value
    console.log(searchValue)
    if(searchValue == ''){
        setFilteredData(null)
    }

    const filter = data?.filter((val) => 
       val.name.toLowerCase().includes(searchValue.toLowerCase()))
      
       setFilteredData(filter)
   }

   const filterFood =(type) => {
    if(type == 'all'){
        setFilteredData(data)
        setSelectedBtn('all')
        return 
    }

    const filter = data?.filter((val) => 
    val.type == type)
   
    setFilteredData(filter)
    
   }

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading....</div>;

  return (
    <MainContainer>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>

          <div className="search">
            <input placeholder="Search food...." onChange={searchFood}></input>
          </div>
        </TopContainer>

        <FilterContainer>
          <Button>All</Button>
          <Button>Breackfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>
      </Container>

      <SearchResult data={filteredData}/>
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div``;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search input {
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: red;
  padding: 10px 5px;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  min-width: 5em;

  &:hover {
    background-color: #770101;
    font-weight: 500;
    border: 1px solid white;
    cursor: pointer;
  }
`;
