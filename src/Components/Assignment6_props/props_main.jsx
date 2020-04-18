import React from 'react';
import PropsApp from './props_app';
function PropsMain(){

    return(
        <div>
            <h1>Assignment 6 Props</h1>
            <h1>Customized Props Value</h1>
               <PropsApp companyName="Infosys" companyLocation="Chennai"/>
               <h1>Default Props Value</h1>
               <PropsApp/>
        </div>
    )
}

export default PropsMain;