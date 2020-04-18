import React from 'react'



function Assignment3(){

    const num=5;
    const arr=[];
    for(let i=0;i<11;i++){
        arr.push(i);
    }
    return (
        <div>
            <h1>
                Assignment3 of JSX
            </h1>

            <table border="1" align="center">
               <thead>
                 <tr>
                 <th>
                       Operand
                   </th>
                   <th>
                       multiplier
                   </th>
                   <th>
                       result
                   </th>
                 </tr>
               </thead>
               <tbody>
                   {
                     arr.map((el,id)=> (
                         <tr key={id}>
                             <td>
                                 {num}
                             </td>
                             <td>
                                 {
                                     el
                                 }
                             </td>
                             <td>
                                 {
                                     el*num
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

export default Assignment3;