import React from 'react';

function Details(props){
    
    return (
        <div>
            <table border="1" align="center">
                <thead>
                   <tr>
                   <th>
                        Student Id
                    </th>
                    <th>
                        Student Name
                    </th>
                    <th>
                        Marks
                    </th>
                   </tr>
                </thead>
                <tbody>
                    {
                      props.student.map((el,id) => (
                          <tr key={id}>
                              <td>
                                  {
                                el.studentId
                                  }
                              </td>
                              <td>
                                  {
                                      el.studentName
                                  }
                              </td>
                              <td>
                                  {
                                      el.marks
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
export default Details;