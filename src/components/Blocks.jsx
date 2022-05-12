import React from "react";
import Input from "./Input";
import Form from "./Create";
import "./blocks.css";

function Blocks() {
  function edit() {
    document.getElementById("old").style.display = "none";
    document.getElementById("new").style.display = "block";
  }

  function required() {
    let data = document.getElementById("label");
    data.innerHTML = document.getElementById("edited").value;

    document.getElementById("old").style.display = "block";
    document.getElementById("new").style.display = "none";
  }

  return (
    <div>
      <div className="flexbox">
        <Form id="form1" className="form">
          <Input id="ip1" className="ip" draggable="true" clone="true">
            <div id="old">
              <p id="label">First Name</p>
              <button
                onClick={() => {
                  edit();
                }}
              >
                Edit
              </button>{" "}
              <br />
            </div>

            <div
              id="new"
              style={{
                display: "none",
              }}
            >
              <input type="text" id="edited" />
              <button
                onClick={() => {
                  required();
                }}
              >
                OK
              </button>
            </div>
            <input type="text" placeholder="First name" />
          </Input>
        </Form>

        <Form id="form2" className="form">
          <Input id="ip2" className="ip" draggable="true">
            <input type="text" placeholder="last name" />
            <button>Edit</button>
          </Input>
        </Form>

        <hr />
        <div className="formfix">
          <h1>Create Form Here</h1>
          <Form id="formfix" className="form"></Form>
          <Form id="formfix" className="form"></Form>
          <Form id="formfix" className="form"></Form>
          <Form id="formfix" className="form"></Form>
          <Form id="formfix" className="form"></Form>
          <Form id="formfix" className="form"></Form>
        </div>
      </div>
    </div>
  );
}

export default Blocks;
