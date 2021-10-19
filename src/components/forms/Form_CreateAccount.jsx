import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "../../styles/Form_CreateAccount.css";
import { Dropdown } from "bootstrap";
import { DropdownButton } from "react-bootstrap";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

// const MySelect = ({ label, ...props }) => {
//   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//   // which we can spread on <input> and alse replace ErrorMessage entirely.
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
//       <StyledSelect {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <StyledErrorMessage>{meta.error}</StyledErrorMessage>
//       ) : null}
//     </>
//   );
// };

const FORM_CREATE_ACCOUNT = () => {
  return (
    <>
      <h1>Create your account!</h1>
      <Formik
        initialValues={{
          firstName: "John",
          lastName: "Doe",
          username: "",
          email: "",
          country: "",
          city: "",
          terms: false
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),
          username: Yup.string()
            .min(4, "Must be 4 characters or more")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          country: Yup.string()
            .oneOf(["USA", "UK", "Canada", "Afghanistan"], "Invalid Country")
            .required("Required"),
          city: Yup.string().required("Required"),
          terms: Yup.bool().required("Required").oneOf([true], "Terms must be accepted")
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="my@email.com"
          />
          <DropdownButton id="dropdown-basic-button" title="Select a Country">
                    
              <Dropdown.Item href="1">USA</Dropdown.Item>
              <Dropdown.Item href="2">UK</Dropdown.Item>
              <Dropdown.Item href="3">Canada</Dropdown.Item>
              <Dropdown.Item href="4">Afghanistan</Dropdown.Item>
            
          </DropdownButton>

          <MyTextInput
            label="City"
            name="city"
            type="text"
            placeholder="London"
          />
          <MyTextInput
            label="Username"
            name="username"
            type="text"
            placeholder=""
          />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>
          <DropdownButton id="dropdown-basic-button" title="Select type of Cookbook"> 
            <Dropdown.Item value="1">Personal Cookbook</Dropdown.Item>
            <Dropdown.Item value="2">Premium / Family Cookbook</Dropdown.Item>
          </DropdownButton>

          <p>
            Please note: All personal information will be kept strictly
            confidential and will not be sold or disclosed to any third party
            without your express permission. Please read our Privacy Policy.
          </p>
          <button type="submit">Continue</button>
        </Form>
      </Formik>
    </>
  );
};

export default FORM_CREATE_ACCOUNT;
