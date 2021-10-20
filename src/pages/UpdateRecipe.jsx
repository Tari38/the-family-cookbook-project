import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import { Button, Card, Input } from "react-bootstrap";
import LoadingSpinner from "../shared/components/LoadingSpinner";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../shared/util/validators";
import { useForm } from "../shared/hooks/form-hook";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../user/auth-context";
import "./RecipeForm.css";

const UpdateRecipe = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest } = useHttpClient();
  const [loadedRecipe, setLoadedRecipe] = useState();
  const recipeId = useParams().recipeId;
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false
      },
      ingredients: {
        value: "",
        isValid: false
      },
      method: {
        value: "",
        isValid: false
      }
    },
    false
  );

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/recipes/${recipeId}`
        );
        setLoadedRecipe(responseData.recipe);
        setFormData(
          {
            title: {
              value: responseData.recipe.title,
              isValid: true
            },
            ingredients: {
              value: responseData.recipe.ingredients,
              isValid: true
            },
            method: {
              value: responseData.recipe.method,
              isValid: true
            }
          },
          true
        );
      } catch (err) {}
    };
    fetchRecipe();
  }, [sendRequest, recipeId, setFormData]);

  const recipeUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/recipes/${recipeId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          method: formState.inputs.method.value
        }),
        {
          "Content-Type": "application/json"
        }
      );
      history.push("/" + auth.userId + "/recipes");
    } catch (err) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedRecipe && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find recipe!</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      {!isLoading && loadedRecipe && (
        <form className="recipe-form" onSubmit={recipeUpdateSubmitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={loadedRecipe.title}
            initialValid={true}
          />
          <Input
            id="ingredients"
            element="input"
            tyoe="list"
            label="Ingredients"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid ingredient."
            onInput={inputHandler}
            initialValue={loadedRecipe.ingredients}
            initialValid={true}
          />
          <Input
            id="method"
            element="input"
            type="textarea"
            label="Method"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter the method."
            onInput={inputHandler}
            initialValue={loadedRecipe.method}
            initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE RECIPE
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdateRecipe;
