import React, { useState, useEffect } from "react";
import ObjectList from "./objectList";

const Search = ({ date }) => {
  const [object, setObject] = useState();
  const { day, year } = date;
  const months = [
    {
      id: "01",
      $month: "january",
    },
    {
      id: "02",
      $month: "february",
    },
    {
      id: "03",
      $month: "march",
    },
    {
      id: "04",
      $month: "april",
    },
    {
      id: "05",
      $month: "may",
    },
    {
      id: "06",
      $month: "june",
    },
    {
      id: "07",
      $month: "july",
    },
    {
      id: "08",
      $month: "august",
    },
    {
      id: "09",
      $month: "september",
    },
    {
      id: "10",
      $month: "october",
    },
    {
      id: "11",
      $month: "november",
    },
    {
      id: "12",
      $month: "december",
    },
  ];

  const searchApi = async () => {
    const Month = months.find((month) => month.id === date.month);
    const month = Month.$month;
    const $date = `${parseInt(day)}-${month}-${year}`;
    console.log($date);
    const res = await fetch(
      `https://jsonmock.hackerrank.com/api/stocks?date=${$date}`
    );
    const data = await res.json();
    setObject(data.data[0]);
  };
  useEffect(() => {
    searchApi();
  }, [date]);
  const content = object ? (
    <ObjectList object={object} />
  ) : (
    "no hay resultados prueba otra fecha"
  );
  return <div>{content}</div>;
};

export default Search;
