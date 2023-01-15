import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const SingleCocktail = () => {
  const { drinkId } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.drinks);

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktails(newCocktail);
          setLoading(false);
        } else {
          setCocktails(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, [drinkId]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktails) {
    return <h2 className="section-title">no matches...</h2>;
  } else {
    const { name, image, info, category, glass, instructions, ingredients } =
      cocktails;

    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {name}
            </p>
            <p>
              <span className="drink-data">category :</span> {category}
            </p>
            <p>
              <span className="drink-data">info :</span> {info}
            </p>
            <p>
              <span className="drink-data">glass :</span> {glass}
            </p>
            <p>
              <span className="drink-data">instructons :</span> {instructions}
            </p>
            <p>
              <span className="drink-data">ingredients :</span>
              {ingredients.map((item) => {
                return item + ",";
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

//
export default SingleCocktail;
