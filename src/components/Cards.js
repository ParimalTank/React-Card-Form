import React, { useEffect, useState } from "react";

import axios from "axios";
import UserCard from "./UserCard";
import { Row } from "reactstrap";

const Cards = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/users");

    setData(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
   
      setIsActive(current => !current);
      // setData([...data, isActive])
    }

  // console.log('isActive Status' , isActive);

  return (
    <div className="m-2">
      <Row className="gx-5">
        {data &&
          data.map((user) => {
            return <UserCard data={{ user }} allData={data} isActive={isActive} handleClick={handleClick} />;
          })}
      </Row>
    </div>
  );
};

export default Cards;
