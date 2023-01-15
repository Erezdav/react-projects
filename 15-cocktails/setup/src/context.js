import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const ApContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCoctails] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);

      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            drinkId: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            alcohole: strAlcoholic,
            amount: strGlass,
          };
        });

        setCoctails(newCocktails);
        setLoading(false);
      } else {
        setCoctails([]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <ApContext.Provider
      value={{ loading, cocktails, setSearchTerm, setLoading }}
    >
      {children}
    </ApContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(ApContext);
};

export { ApContext, AppProvider };
