import React from 'react';

class Multiplication extends React.Component {

    constructor(props) {
        super();

        this.state = {
            num: 5,
            data: [],
            
        }
    }
    count = 0;
    handleClick = () => {

        var myarray = this.state.data.slice();
       
        var item = this.state.num + "*" + this.count;
       
        myarray.push(item);
        this.setState({ data: myarray })
       
        this.count = this.count + 1;

    }
    render() {
        return (

            <div>
                <h1>Assignment 8 , React JS Components Api</h1>

                <p>
                    Click the Below Button To Generate Table of a Number
                </p>
                <button onClick={this.handleClick}>
                    Click Me
                </button>
                <table border="1">
                  <thead>
                  <tr>
                        <th>
                            Multiplication
                         </th>
                        <th>
                            result
                         </th>
                    </tr>
                  </thead>
                    <tbody>
                        {
                            this.state.data.map((el, id) => (
                                <tr key={id}>
                                    <td>
                                        {
                                            el
                                        }
                                    </td>
                                    <td >
                                       {
                                         parseInt(el)*id
                                       }
                                    </td>
                                </tr>
                            ))
                        }

                     

                    </tbody>
                </table>
            </div>
        )
    }

}

export default Multiplication;