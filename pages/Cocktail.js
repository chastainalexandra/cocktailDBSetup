import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const cocktailDB = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?1='

const Cocktail = () => {
    const {cocktailId} = useParams()
    const [isLoading, setIsLoading] = React.useState(false);
    const [cocktail, setCocktail] = React.useState(null)

    React.useEffect(() => {
        setIsLoading(true);
        async function getCocktail() {
            try {
                const response = await fetch(`${cocktailDB}${cocktailId}`)
                const data = await response.json();
                if(data.drinks) {
                    const {
                        strDrink:name,
                        strDrinkAltername:alternate,
                        strTags: tags,
                        strVideo: video,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strDrinkThrumb: picture,
                        strIngredient1: ingredient1,
                        strIngredient2: ingredient2,
                        strIngredient3: ingredient3,
                        strIngredient4: ingredient4,
                        strIngredient5: ingredient5,
                        strIngredient6: ingredient6,
                        strIngredient7: ingredient7,
                        strIngredient8: ingredient8,
                        strIngredient9: ingredient9,
                        strIngredient10: ingredient10,
                        strIngredient11: ingredient11,
                        strIngredient12: ingredient12,
                        strIngredient13: ingredient13,
                        strIngredient14: ingredient14,
                        strIngredient15: ingredient15,
                        strMeasure1: measure1,
                        strMeasure2: measure2,
                        strMeasure3: measure3,
                        strMeasure4: measure4,
                        strMeasure5: measure5,
                        strMeasure6: measure6,
                        strMeasure7: measure7,
                        strMeasure8: measure8,
                        strMeasure9: measure9,
                        strMeasure10: measure10,
                        strMeasure11: measure11,
                        strMeasure12: measure12,
                        strMeasure13: measure13,
                        strMeasure14: measure14,
                        strMeasure15: measure15,
                        strAlcoholic: info
                    } = data.drinks[0]

                    const indgreients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strIngredient6,
                        strIngredient7,
                        strIngredient8,
                        strIngredient9,
                        strIngredient10,
                        strIngredient11,
                        strIngredient12,
                        strIngredient13,
                        strIngredient14,
                        strIngredient15
                    ]

                    const measures = [
                        strMeasure1,
                        strMeasure2,
                        strMeasure3,
                        strMeasure4,
                        strMeasure5,
                        strMeasure6,
                        strMeasure7,
                        strMeasure8,
                        strMeasure9,
                        strMeasure10,
                        strMeasure11,
                        strMeasure12,
                        strMeasure13,
                        strMeasure14,
                        strMeasure15
                    ]

                    const newCocktail = {
                        name, 
                        picture,
                        info,
                        glass, 
                        category,
                        indgreients,
                        measures,
                        instructions
                    }
                    setCocktail(newCocktail)

                } else {
                    setCocktail(null)
                }
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        }
        getCocktail()
    }, [cocktailId])

    if(isLoading) {
        return <Loading />
    }

    if(!cocktail){
        return <h2 className='section-title'>no cocktail found</h2>
      }
        const {name,image,category,info,glass,instructions,ingredients} = cocktail;
        return (
          <section className='section cocktail-section'>
            <Link to={"/"} className="btn btn-primary">
              back home
            </Link>
            <h2 className='section-title'>{name}</h2>
            <div className="drink">
              <img src={image} alt={name} />
              <div className="drink-info">
                <p>
                  <span className="drink-data">name: </span>{name}
                </p>
                <p>
                  <span className="drink-data">category: </span>{category}
                </p>
                <p>
                  <span className="drink-data">info: </span>{info}
                </p>
                <p>
                  <span className="drink-data">glass: </span>{glass}
                </p>
                <p>
                  <span className="drink-data">instructions: </span>{instructions}
                </p>
                <p>
                  <span className="drink-data">instructions: </span>
                  {
                  ingredients.map((item,index)=>(
                    item?<span key={index}>{item}</span>:null
                  ))}
                </p>
                <p>
                  <span className="drink-data">measures: </span>{measures}
                </p>
                <p>
                  <span className="drink-data">measures: </span>
                  {
                  measures.map((item,index)=>(
                    item?<span key={index}>{item}</span>:null
                  ))}
                </p>
              </div>
            </div>
          </section>
        )
}

export default Cocktail