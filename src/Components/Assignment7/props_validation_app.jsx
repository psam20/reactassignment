import React from 'react';
import PropTypes from 'prop-types';

class PropsValidationApp extends React.Component {

    render(){
        return (
            <div>
                <h1>
                    {
                        this.props.Name
                    }
                </h1>
                <h1>
                    {
                        this.props.PreferedCities
                    }
                </h1>
                <h1>
                    {
                        this.props.Age
                    }
                </h1>

            </div>
        )
    }
}
PropsValidationApp.propTypes = {
    Name : PropTypes.string.isRequired,
    PreferedCities : PropTypes.array,
    Age:  function(props, propName, componentName) {

        let value= props[propName];
        if(typeof(value)==='number' && value >= 18 && value <=60){
          return null
        }
        
      
         else {
          return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
      }
}

PropsValidationApp.defaultProps = {
    Name : "Steve",
    PreferedCities : ["Bangalore","Chennai"],
    Age : 18
}

export default PropsValidationApp;