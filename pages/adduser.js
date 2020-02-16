import React, { Component } from "react";
import { Formik } from "formik";
import axios from "axios";

class UserForm extends Component {
  handleSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "/api/v1/users",
      data: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      console.log(response.data);
      actions.setSubmitting(false);
      actions.resetForm();
    });
  };
  handleRules = values => {
    let errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.lastname) {
      errors.lastname = "Required";
    }

    if (!values.age) {
      errors.age = "Required";
    } else if (values.age < 20) {
      errors.age = "Sorry you need to be older than 20";
    }

    return errors;
  };
  render() {
    return (
      <>
        <div>Add user</div>
        <Formik
          initialValues={{ name: "", lastname: "", age: "" }}
          validate={values => this.handleRules(values)}
          onSubmit={(values, actions) => this.handleSubmit(values, actions)}
        >
          {({
            errors,
            values,
            handleSubmit,
            handleChange,
            isSubmitting,
            handleBlur,
            touched
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.name && touched.name ? (
                  <div style={{ color: "red" }}>{errors.name}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label>Lastname</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  placeholder="Enter lastname"
                  value={values.lastname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.lastname && touched.lastname ? (
                  <div style={{ color: "red" }}>{errors.lastname}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  placeholder="Enter age"
                  value={values.age}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.age && touched.age ? (
                  <div style={{ color: "red" }}>{errors.age}</div>
                ) : null}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </>
    );
  }
}

export default UserForm;
