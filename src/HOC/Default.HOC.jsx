//Transforms one component into another
//Adding additional functionalities to existing components.

import React from 'react';
import { Routes,Route } from 'react-router-dom';
//Layouts
import DefaultLayout from '../layouts/Default.layout.jsx';

function DefaultHOC ({ component:Component , ...rest }){
   //component
   //props -> path
   return(
    <Routes>
        <Route 
            {...rest}
            component = {(props)=>(
                <DefaultLayout>
                    <Component {...props}/>
                </DefaultLayout>
            )}
        
        />
    </Routes>
   )
}

export default DefaultHOC;