import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Button, Input } from "react-bootstrap";

import LoadingSpinner from "../shared/components/LoadingSpinner";
import { VALIDATOR_REQUIRE } from "../shared/util/validators";
import { useForm } from "../shared/hooks/form-hook";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../user/auth-context";
import "./RecipeForm.css";

const NewRecipe = () => {
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();
  const [formState, inputHandler] = useForm(
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

  const history = useHistory();

  const recipeSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        "http://localhost:5000/api/recipes",
        "POST",
        JSON.stringify({
          title: formState.inputs.title.value,
          ingredients: formState.inputs.ingredients.value,
          method: formState.inputs.method.value,
          creator: auth.userId
        }),
        { "Content-Type": "application/json" }
      );
      history.push("/");
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <form className="recipe-form" onSubmit={recipeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="ingredients"
          element="input"
          type="list"
          label="Ingredients"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid ingredient."
          onInput={inputHandler}
        />
        <Input
          id="method"
          element="input"
          type="textarea"
          label="Method"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the method."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD RECIPE
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewRecipe;
