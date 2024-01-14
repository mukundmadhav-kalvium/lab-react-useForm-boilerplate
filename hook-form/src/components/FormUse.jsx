import React, { useState } from "react";
import { Flip, Slide, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const FormUse = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitted },
  } = useForm();
  console.log(watch());
  console.log("errors: ", errors);
  console.log("isSubmitted: ", isSubmitted);
  console.log("isSubmitSuccessful: ", isSubmitSuccessful);

  const FormSubmitHandler = (data) => {
    console.log("data: ", data);
    toast.success("Form Submitted Successfully!", {
      position: "top-center",
      theme: "dark",
      autoClose: 2000,
      transition: Zoom,
    });
  };

  return (
    <div className="form-container">
      <fieldset>
        <legend>Fill this form</legend>
        <form onSubmit={handleSubmit(FormSubmitHandler)}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            {...register("firstName", {
              required: "Fill First Name",
              minLength: {
                value: 4,
                message: "Minimum 4 characters are required",
              },
              maxLength: {
                value: 8,
                message: "Maximum 8 characters are required",
              },
            })}
          />
          {/* {errors.firstName && <p className="error">{errors.firstName.message}</p>} */}
          <p className="error">{errors.firstName?.message}</p>

          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            {...register("lastName", {
              required: "Fill Last Name",
              minLength: {
                value: 4,
                message: "Minimum 8 characters are required",
              },
            })}
          />
          <p className="error">{errors.lastName?.message}</p>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Fill email address",
              minLength: {
                value: 8,
                message: "Minimum 8 characters are required",
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>

          <label>Phone:</label>
          <input
            type="number"
            name="phone"
            {...register("phone", {
              required: "Fill Phone number",
              minLength: {
                value: 10,
                message: "Minimum 10 characters are required",
              },
            })}
          />
          <p className="error">{errors.phone?.message}</p>
          <div className="button-div">
            <input type="submit" value={"Register"} />
            <button
              id="reset-btn"
              style={{ width: "fit-content", placeSelf: "center" }}
              onClick={() => reset()}
            >
              RESET
            </button>
          </div>
        </form>
      </fieldset>
      <ToastContainer />
    </div>
  );
};

export default FormUse;
