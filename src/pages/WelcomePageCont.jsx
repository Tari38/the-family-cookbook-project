import React from "react";

import { Button, Form } from "react-bootstrap";

export default function WelcomePageCont() {
return(
  <>
  <div>
    <p>
      Our first step together is to give this project a name. This name will become the title of the cookbook.
      The name can be as simple as the "Clark Family Cookbook" or as inventive as "The Clark Guide to Food, Family and Fun", or "Eating with the Clarks: a Midwestern Experience"
      These items can be changed at any time in the future so you don't have to get it perfect right now.
    </p>
    <Form>
      <Form.Group>
        <Form.Label>Cookbook Project Name</Form.Label>
        <Form.Control 
          type="text"
          placeholder="My Cookbook">
        </Form.Control>
      </Form.Group>

      <p>
        Next: If you are going to have others contributing recipes, setting a deadline will help motivate them. 
        Remember this date can be changed at any time.
      </p>

      <Form.Group>
        <Form.Label>Deadline for Contributions</Form.Label>
        <Form.Control
          type="date">
        </Form.Control>
      </Form.Group>

      <h5>Notifications:</h5>

      <Form.Group>
        <Form.Control
        type="check">
        </Form.Control>
        <Form.Label>Yes, please send me site content notifications.</Form.Label>
        <Form.Control
        type="check">
        </Form.Control>
        <Form.Label>Yes, please send me the Family Cookbook Project Newsletter.</Form.Label>
        <Form.Control
        type="check">
        </Form.Control>
        <Form.Label>Yes, please make FamilyCookbookProject.com my home page.</Form.Label>
        <Form.Control
        type="check">
        </Form.Control>
        <Form.Label>Yes, please send me special offers by email from partners of FamilyCookbookProject.com.</Form.Label>
      </Form.Group>

      <Button>Create Site</Button>
    </Form>

    <h5>Terms and Conditions</h5>
    <p>By clicking Create Site, you agree to these <span><a href="./pages/Terms">terms and conditions</a></span></p>

    <textarea>
      FamilyCookbookProject.com License and Terms and Conditions of use.

      FamilyCookbookProject.com is an Internet Service (the service) owned and operated by the Family Cookbook Project, LLC
      (hereafter 'we', 'our' or 'us').
      'You' or 'your' means an adult user of the Service for itself and you as a parent or guardian for any minor
      which you allow to access the Service, for whom you will be held strictly responsible.
      
      In the
    </textarea>
  </div>
  </>
  );
}