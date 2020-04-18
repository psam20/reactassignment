import React from 'react';
import Details from './details'
const  Header= ()=> (
    <div>
       <h1>
           Student Details
       </h1>
    </div>
)
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            students :[
                {
                    studentId : 1,
                    studentName : "kishan",
                    marks : 100
                },
                {
                    studentId : 2,
                    studentName : "Gaurav",
                    marks : 10
                },
                {
                    studentId : 3,
                    studentName : "Shubham",
                    marks : 100
                }
                ,  {
                    studentId : 4,
                    studentName : "Ojus",
                    marks : 100
                },
                {
                    studentId : 5,
                    studentName : "Rutu",
                    marks : 100
                }
            ]
        }
    }
      
    render(){
        return(
            <div>
                <h1>Assignment 4 and 5 State and Props</h1>
                  <Header />
                  <Details student={this.state.students}/>
            </div>
        )
    }
}
export default Main;