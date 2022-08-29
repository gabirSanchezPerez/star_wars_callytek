import { useContext } from "react";
import PeopleContext from "./PeopleProvider";

const usePeople = () => {
  return useContext(PeopleContext);
};

export default usePeople;