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
    data.style.marginBottom = "0px"

    document.getElementById("old").style.display = "block";
    document.getElementById("new").style.display = "none";

    document.getElementById("edited").value = "";
  }

  function edit1() {
    document.getElementById("old1").style.display = "none";
    document.getElementById("new1").style.display = "block";
  }

  function required1() {
    let data = document.getElementById("label1");
    data.innerHTML = document.getElementById("edited1").value;

    document.getElementById("old1").style.display = "block";
    document.getElementById("new1").style.display = "none";

    document.getElementById("edited1").value = "";
  }

  function edit2() {
    document.getElementById("old2").style.display = "none";
    document.getElementById("new2").style.display = "block";
  }

  function required2() {
    let data = document.getElementById("label2");
    data.innerHTML = document.getElementById("edited2").value;

    document.getElementById("old2").style.display = "block";
    document.getElementById("new2").style.display = "none";

    document.getElementById("edited2").value = "";
  }

  function edit21() {
    document.getElementById("old21").style.display = "none";
    document.getElementById("new21").style.display = "block";
  }

  function required21() {
    let data = document.getElementById("label21");
    data.innerHTML = document.getElementById("edited21").value;

    document.getElementById("old21").style.display = "block";
    document.getElementById("new21").style.display = "none";

    document.getElementById("edited21").value = "";
  }

  function edit3() {
    document.getElementById("old3").style.display = "none";
    document.getElementById("new3").style.display = "block";
  }

  function required3() {
    let data = document.getElementById("label3");
    data.innerHTML = document.getElementById("edited3").value;

    document.getElementById("old3").style.display = "block";
    document.getElementById("new3").style.display = "none";

    document.getElementById("edited3").value = "";
  }

  function edit4() {
    document.getElementById("old4").style.display = "none";
    document.getElementById("new4").style.display = "block";
  }

  function required4() {
    let data = document.getElementById("label4");
    data.innerHTML = document.getElementById("edited4").value;

    document.getElementById("old4").style.display = "block";
    document.getElementById("new4").style.display = "none";

    document.getElementById("edited4").value = "";
  }

  return (
    <div>
      <div className="flexbox">
        <div style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "0px",
        }}>
        <Form id="form1" className="form">
          <Input id="ip1" className="ip" draggable="true" clone="true">
            <div id="old" style={{
              display:"flex",
            }}>
              <p id="label">First Name</p>
              <button onClick={() => {edit();}}>
                Edit
              </button>
              <br />
            </div>

            <div id="new" style={{display: "none",}}>
              <input type="text" id="edited" placeholder="Enter Edited Details"/>
              <button onClick={() => {required();}}>
                OK
              </button>
            </div>
            <input type="text" placeholder="Enter Details" />
          </Input>
        </Form>

        <Form id="form2" className="form">
        <Input id="ip2" className="ip" draggable="true" clone="true">
            <div id="old1" style={{
              display:"flex",
            }}>
              <p id="label1">Last Name</p>
              <button onClick={() => {edit1();}}>
                Edit
              </button>
              <br />
            </div>

            <div id="new1" style={{display: "none",}}>
              <input type="text" id="edited1" placeholder="Enter Edited Details"/>
              <button onClick={() => {required1();}}>
                OK
              </button>
            </div>
            <input type="text" placeholder="Enter Details" />
          </Input>
        </Form>

        <Form id="form3" className="form">
        <Input id="ip3" className="ip" draggable="true" clone="true">
            <div id="old2" style={{
              display:"flex",
            }}>
              <p id="label2">Email</p>
              <button onClick={() => {edit2();}}>
                Edit
              </button>
              <br />
            </div>

            <div id="new2" style={{display: "none",}}>
              <input type="text" id="edited2" placeholder="Enter Edited Details"/>
              <button onClick={() => {required2();}}>
                OK
              </button>
            </div>
            <input type="email" placeholder="Enter Details" />
          </Input>
        </Form>

        <Form id="form31" className="form">
        <Input id="ip31" className="ip" draggable="true" clone="true">
            <div id="old21" style={{
              display:"flex",
            }}>
              <p id="label21">Password</p>
              <button onClick={() => {edit21();}}>
                Edit
              </button>
              <br />
            </div>

            <div id="new21" style={{display: "none",}}>
              <input type="text" id="edited21" placeholder="Enter Edited Details"/>
              <button onClick={() => {required21();}}>
                OK
              </button>
            </div>
            <input type="password" placeholder="Enter Details" />
          </Input>
        </Form>

        <Form id="form4" className="form">
        <Input id="ip4" className="ip" draggable="true" clone="true">
            <div id="old3" style={{
              display:"flex",
            }}>
              <p id="label3">Phone Number</p>
              <button onClick={() => {edit3();}}>
                Edit
              </button>
              <br />
            </div>

            <div id="new3" style={{display: "none",}}>
              <input type="text" id="edited3"  placeholder="Enter Edited Details"/>
              <button onClick={() => {required3();}}>
                OK
              </button>
            </div>
            <input type="number" placeholder="Enter Details" />
          </Input>
        </Form>

        <Form id="form5" className="form">
        <Input id="ip5" className="ip" draggable="true" clone="true">
            <div id="old4" style={{
              display:"flex",
            }}>
              <p id="label4">Address</p>
              <button onClick={() => {edit4();}}>
                Edit
              </button>
              <br />
            </div>

            <div id="new4" style={{display: "none",}}>
              <input type="text" id="edited4" placeholder="Enter Edited Details" />
              <button onClick={() => {required4();}}>
                OK
              </button>
            </div>
            <input type="text" placeholder="Enter Details" />
          </Input>
        </Form>
        </div>

        <hr />
        <div className="formfix">
          <h1 style={{
        textAlign:"center",
        paddingBottom:"10px"

        }}>Create Form Here</h1>
          <Form id="formfix" className="form1"></Form>
          <Form id="formfix" className="form1"></Form>
          <Form id="formfix" className="form1"></Form>
          <Form id="formfix" className="form1"></Form>
          <Form id="formfix" className="form1"></Form>
          <Form id="formfix" className="form1"></Form>
        </div>
      </div>
    </div>
  );
}

export default Blocks;
