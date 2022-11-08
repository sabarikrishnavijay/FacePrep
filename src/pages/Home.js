import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import NameCard from "../components/NameCard";
import Skelton from "../components/Skelton";

const result = 10;
const fetchData = async (setItems, items, setIsLoading) => {
  axios.get(`https://randomuser.me/api/?results=${result}`).then((res) => {
    console.log(res);
    setItems([...items, ...res.data.results]);
    setIsLoading(false);
  });
};

const refresh = (setItems) => {};

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    fetchData(setItems, items, setIsLoading);
  }, []);

  return (
    <>
      <Navbar />

      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={() => {
          fetchData(setItems, items, setIsLoading);
        }}
        hasMore={true}
        loader={
          <div>
            <Skelton />
            <Skelton />
           
          </div>
        }
        scrollThreshold="50px"
        refreshFunction={refresh}
        pullDownToRefresh
        
      >
        <div style={{ minHeight: "100vh" }}>
          {isLoading && <Skelton />}
          {items.map((user) => (
            <NameCard user={user} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default Home;
