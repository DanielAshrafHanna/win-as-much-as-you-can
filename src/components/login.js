import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { useHistory } from "react-router-dom";

export default class login extends Component {

    constructor(props) {
        super(props);

        this.onChangeCode = this.onChangeCode.bind(this);
        // this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        // this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            code: '',
            // todo_responsible: '',
            // todo_priority: '',
            // todo_completed: false ,
            random: 0
        }
    }


    handleClick() {    // generate random code for LOGIN
        
        var rand =0;
        const min = 1000;
        const max = 9000;
         rand = Math.round(min + Math.random() * (max - min),0);
        this.setState({ random: this.state.random + rand });

        // const random1 = {
        //     name: this.state.random
        //   };

        // axios.post('http://localhost:3000/register',{
        //     random1
        // })
        //      .then(res => { console.log(res)
        //     });

        const rend = {
            random: this.state.random
          };
      
          axios.post(`https://win-as-much-as-you-can-backend.herokuapp.com/register`,  rend )  // http://localhost:3000/register
            .then(res => {
              console.log(res);
              console.log(res.data);
              
            })

            console.log(rend)  // testing 
             

      }

    onChangeCode(e) {
        this.setState({
            code: e.target.value
        });
    }

    // onChangeTodoResponsible(e) {
    //     this.setState({
    //         todo_responsible: e.target.value
    //     });
    // }

    // onChangeTodoPriority(e) {
    //     this.setState({
    //         todo_priority: e.target.value
    //     });
    // }

    

    onSubmit(e) {  // send data to  login
        e.preventDefault();
        
      //  console.log(`Form submitted:`);
        console.log(`the code is : ${this.state.code}`);

        const obj = {
            code: this.state.code
      
        };
        console.log(obj);

        axios.post(`https://win-as-much-as-you-can-backend.herokuapp.com/login`, obj )  // http://localhost:3000/login
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.props.history.push("/buttons");
          
          
        })



    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>ENTER CODE TO ENTER GAME</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>ENTER CODE: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.code}
                                onChange={this.onChangeCode}
                                />
                    </div>                 
           
                  
                              <div>The number is: {this.state.random}</div>
                    <div className="form-group">
                        <input type="submit" value="SUBMIT" className="btn btn-primary" />
                    </div>
                    
                </form>
                <button onClick={this.handleClick.bind(this)}>Click</button>
            </div>
        )
    }
}