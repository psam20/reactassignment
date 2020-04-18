import React from 'react'
import Assignment2 from './assignment2';
import './assignment1.css'
class Assignment1 extends React.Component{

    constructor(props){
        super();
        this.state={
            heading : "Topic 3: React JS - JSX assignment 1",
            empdetails : [  {
                emp_id : 1,
                emp_name: "kishan",
                emp_email:"kishan.gupta2@wipro.com"
            },
            {
                emp_id : 2,
                emp_name: "Gaurav",
                emp_email:"gaurav2@wipro.com"
            },
            {
                emp_id : 3,
                emp_name: "Shubham",
                emp_email:"Shubham2@wipro.com"
            },
            {
                emp_id : 4,
                emp_name: "Ojus",
                emp_email:"Ojus2@wipro.com"
            },
            {
                emp_id : 5,
                emp_name: "RUTU",
                emp_email:"RUTU2@wipro.com"
            }]
        }
    }

    render(){
        return (
        <div>
            <h1>{this.state.heading}</h1>

            <table border="1" align="center">
                <thead>
                    <tr>
                    <th>
                       Emp Id
                    </th>
                    <th>
                        Emp Name
                    </th>
                    <th>
                        Emp Email
                    </th>
                    </tr>
                </thead>
                <tbody>
                  
                        {
                            this.state.empdetails.map( (emp,id)=>(
                            <tr key={id}>
                                    <td>
                                    {
                                        emp.emp_id
                                    }
                                </td>
                                <td>
                                    {
                                        emp.emp_name
                                    }
                                </td>
                                <td>
                                    {
                                        emp.emp_email
                                    }
                                </td>
                            </tr>
                            ))
                        }
                
                </tbody>
            </table>
            <br />
            
            <div>
                
                        <Assignment2  empdetails={this.state.empdetails} />
              
               
            </div>
        </div>
        )
    }
}

export default Assignment1;