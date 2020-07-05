import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class login extends Component {

    constructor(props) {
        super(props);

        this.onChangeCode = this.onChangeTodoCode.bind(this);
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

        axios.post('http://localhost:3000/register',{
            random: this.state.random
        })
             .then(res => console.log(res));

      }

    onChangeTodoCode(e) {
        this.setState({
            code: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    // onChangeTodoPriority(e) {
    //     this.setState({
    //         todo_priority: e.target.value
    //     });
    // }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.code}`);
        // console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        // console.log(`Todo Priority: ${this.state.todo_priority}`);
        
        this.setState({
            code: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>code: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.code}
                                onChange={this.onChangeTodoCode}
                                />
                    </div>                 
           
                    <button onClick={this.handleClick.bind(this)}>Click</button>
                              <div>The number is: {this.state.random}</div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}