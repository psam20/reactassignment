import React from 'react';

class PropsApp extends React.Component {

    render(){
        return (
            <div>
                <h1>
                    {
                        this.props.companyName
                    }
                </h1>
                <h1>
                    {
                        this.props.companyLocation
                    }
                </h1>

            </div>
        )
    }
}

PropsApp.defaultProps = {
    companyName : "Wipro",
    companyLocation : "Bangalore"
}

export default PropsApp;