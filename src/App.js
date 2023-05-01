// import React, { createContext, useState } from 'react';
// import logo from './logo.svg';
// import Tabledata from './Components/Tabledata';
// import Tablesearch from './Components/Tablesearch';
// import Welcomemessage from './Welcomemessage';
// import Usestate from './Components/Usestate';
// import Useeffect from './Components/Useeffect';
// import UseCallback from './Components/UseCallback';
// import Useref from './Components/Useref';
// import {Translator} from './Translator';
import './App.css';
import Tablesearchdata from './Components/Tablesearchdata';
import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Tablesearchdataedit from './Components/Tablesearchdataedit';
import Dashboard from './Components/Dashboard';
import Formik from './Components/Formik/Formik';
import Edit from './Components/Formik/Edit';
// import Formikdata from './Components/Formik/Formikdata';
import  MaterialUi from './Components/MaterialUi/Material';
import Table from './Components/MaterialUi/Table';
import Form from './Components/MaterialUi/Form';
// import MaterialUi from './Components/MaterialUi/FormsUI/TextField/index';

export const ColorContext = createContext();


function App() {

  const [theme, settheme] = useState(true);


  return (
    <div className="App">


      {/* <h1>React hooks</h1>
     <Usestate></Usestate>
      <Useeffect></Useeffect>
      <UseCallback/>
      <Useref/> */}

      {/* <Tabledata/> */}
      {/* <Tablesearch/> */}
      <h1>Table data search</h1>
      <Dashboard />
      {/* <ColorContext.Provider value={{ theme, settheme }}>
        <button onClick={() => { settheme(!theme) }} className='btn btn-primary'>change Mode</button>
        {/* <Routes>
          <Route path="/" element={<Tablesearchdata />}></Route>
          <Route path="/tablesearchdataedit" element={<Tablesearchdataedit />}></Route>
          <Route path="/formik" element={<Formik/>}></Route>
          <Route path="/edit" element={<Edit/>}></Route>
        </Routes>
      </ColorContext.Provider> */} 
      {/* <Formik/> */}
      {/* <MaterialUi/> */}
      {/* <Table/> */}
      <Form/>
      {/* <MaterialUi/> */}
      {/* <Formikdata/> */}

      {/* <Welcomemessage myprops={'Hi React js'}/> */}


    </div>
  );
}

export default App;
