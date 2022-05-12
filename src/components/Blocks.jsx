import React from 'react'
import Input from './Input'
import Form from './Create'
import './blocks.css'

function Blocks() {
  return (
    <div>
        <div className='flexbox'>
        <Form id="form1" className="form">
            
              <Input id="ip1" className="ip" draggable="true" clone="true">
                <input type="text" placeholder="First name" />
                <button>Edit</button>
              </Input>
            </Form>

            <Form id="form2" className="form">
              <Input id="ip2" className="ip" draggable="true">
                <input type="text" placeholder="last name" />
                <button>Edit</button>
              </Input>
            </Form>

            <hr />
            <div className='formfix'>
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
  )
}

export default Blocks