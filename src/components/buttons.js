import React, { Component } from 'react';
import { Button, Card, Row, Col, Statistic } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons'

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
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
        }}>
            <Row justify="center">
                <Col span={12}>
                    <Row gutter={16} justify="center">
                        <Col span={6}>
                            <Card >
                                <Statistic
                                    title="X"
                                    value={this.state.x}
                                    valueStyle={{ color: '#3f8600' }}
                                />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card>
                                <Statistic
                                    title="X Score"
                                    value={this.state.x_score}
                                    valueStyle={{ color: '#3f8600' }}
                                />
                            </Card>
                        </Col>
                    </Row>
                    < br />
                    <Row gutter={16} justify="center">
                        <Col span={12}>
                            <Button onClick={this.IncrementItem_X} block><CaretUpOutlined /></Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row gutter={16} justify="center">
                            <Col span={6}>
                                <Card >
                                    <Statistic
                                        title="Y"
                                        value={this.state.y}
                                        valueStyle={{ color: '#cf1322' }}
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card>
                                    <Statistic
                                        title="Y Score"
                                        value={this.state.y_score}
                                        valueStyle={{ color: '#cf1322' }}
                                    />
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row gutter={16} justify="center">
                            <Col span={12}>
                                <Button onClick={this.IncrementItem_Y} block><CaretUpOutlined /></Button>
                            </Col>
                        </Row>
                </Col>
            </Row>

         </div>
            
            
            
            
            
            
        )
    }
}

