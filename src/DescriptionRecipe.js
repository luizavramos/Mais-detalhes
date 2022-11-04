import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import DetailRecipe from "./DetailRecipe";


export default function DescritionRecipe() {
    const params = useParams()
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState(null);

    function handleBack() {
        navigate("/");
    }
    console.log(params)
    

    useEffect(() => {
        const promise = axios.get(`http://localhost:1234/recipes/${params.recipesId}`)
        promise.then(response => setRecipes(response.data));
        promise.catch(error => console.log("error", error));
  }, []);

  return (
    <div>
      {
        recipes ?
          <DetailRecipe
            title={recipes.title}
            time={recipes.time}
            ingredients={recipes.ingredients}
            steps={recipes.steps}
          /> :
          <div>Não há nada para exibir</div>
      }
      <div className="actions">
        <button onClick={handleBack}>Voltar</button>
      </div>
    </div>
  )}