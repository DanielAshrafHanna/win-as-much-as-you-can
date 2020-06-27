import React, { Component } from 'react';

export default class buttons extends Component {

    constructor(props) {
        super(props);
        this.state = {
          x: 0,
          y: 0,
          xy:0, // max number is 4
          x_score: 0,
          y_score: 0,
          show: true
        };
      }

      Score= () => {
        // this.setState({ Y: this.state.Y + 10 });   // for testing 

        console.log('x now is ',this.state.x, 'y now is ',this.state.y)


        if (this.state.x === 1 && this.state.y === 3){
            // this.setState({ X_score: this.state.X_score + 10 }); 
            this.setState({x_score: this.state.x_score + 3});
            this.setState({y_score: this.state.y_score - 1});
            console.log('x=1 y=3')

   }

        if (this.state.x === 2 && this.state.y === 2){
            this.setState({x_score: this.state.x_score + 2});
            this.setState({y_score: this.state.y_score - 2});
            console.log('x=2 y=2 ')
        }

        if (this.state.x === 3 && this.state.y === 1){
            this.setState({x_score: this.state.x_score +1});
            this.setState({y_score: this.state.y_score -3});
            console.log('x=3 y=1 ')
        }

        if (this.state.x === 4 && this.state.y === 0){
            this.setState({x_score: this.state.y_score -1});
            console.log('x=4 y=0 ')
        }

        if (this.state.x === 0 && this.state.y === 4){
            this.setState({y_score: this.state.y_score +1});
            console.log('x=0 y=4 ')
        }
        
        }

  IncrementItem_X = (e) => {
    e.preventDefault()
    this.setState({ x: this.state.x + 1 }, this.Score);
    this.setState({ xy: this.state.xy + 1 });   // incremeting total score 
    // this.Score() // test
       
          }

  IncrementItem_Y = (e) => {
      e.preventDefault()
      this.setState({ y: this.state.y + 1 }, this.Score);
      this.setState({ xy: this.state.xy + 1 });  // incremeting total score 
    //   this.Score() // test
     
          }



 



    render() {
        return (
        <div>
            <div class="mt-3 col-md-12">
                <button onClick={this.IncrementItem_X} type="button"  className="btn btn-secondary btn-lg">X  </button>
                X: { this.state.show ? <h2>{ this.state.x }</h2> : '' }
                X Score: { this.state.show ? <h2>{ this.state.x_score }</h2> : '' }
                {/* { this.state.show ? <h2>{ this.state.xy }</h2> : '' } */}
                 
                
            </div>

            <div class="mt-3 col-md-12">
                <button onClick={this.IncrementItem_Y} type="button"  className="btn btn-secondary btn-lg">Y </button>
                Y:{ this.state.show ? <h2>{ this.state.y }</h2> : '' }
                Y Score:{ this.state.show ? <h2>{ this.state.y_score }</h2> : '' }
            </div>

                
         </div>
            
            
            
            
            
            
        )
    }
}

