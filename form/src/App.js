//import logo from './logo.svg';
import './App.css';
import formJSON from './dummy_payload.json';
import React from "react";
//import Textfeild from "./textfeild";
import { useState, useEffect } from 'react';
//import Dropdown from "./dropdown";
import Element from './components/element';


function News() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    console.log(formJSON);
    setElements(formJSON[0])

  }, [])
  const { page, fields } = elements ?? {}
  return (
    <>

      < form >
        <div className="outer">
          <h1>{page}</h1>
          <h1>gu</h1>
          {fields ? fields.map((fields, i) => <Element key={i} />) :
            null}
          <div className="inner">


            <input type="text" id="fname" name="fname" placeholder="name" /><br />

            <input type="text" id="lname" name="lname" placeholder="name" />
          </div>
          <div className="inner">

            <input type="text" id="fname" name="fname" placeholder="name" /><br />
            <input type="text" id="fname" name="fname" placeholder="name" /><br />
            <input type="text" id="lname" name="lname" placeholder="name" />
          </div>
        </div>
      </form >
    </>
  );
}
function App() {
  return <News />
}

export default App;
