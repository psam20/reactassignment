import React from 'react'
import './assignment2.css';
const Assignment2 = (props)=>  (
        <div>
            

            <table className="table" border="1" align="center">
                <thead>
                    <tr>
                    <th className="table-heading">
                       Emp Id
                    </th>
                    <th className="table-heading">
                        Emp Name
                    </th>
                    <th className="table-heading">
                        Emp Email
                    </th>
                    </tr>
                </thead>
                <tbody>
                  {
                    props.empdetails.map( (props,id) => (
                        <tr key={id}>
                        <td>
                        {
                            props.emp_id
                        }
                    </td>
                    <td>
                        {
                            props.emp_name
                        }
                    </td>
                    <td>
                        {
                            props.emp_email
                        }
                    </td>
                </tr>

                    ))
                  }
                </tbody>
            </table>
        </div>
        )

export default Assignment2;