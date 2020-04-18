import React from 'react';
import PropsValidationApp from './props_validation_app';
function PropsValidationMain(){

    return(
        <div>
               <h1>Assignment 7 Props Validation</h1>
               <PropsValidationApp  Name={"apple"} PreferedCities={["Hyderabad"]} Age={20} />
        </div>
    )
}

export default PropsValidationMain;