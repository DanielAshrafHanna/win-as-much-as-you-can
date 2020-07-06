import React, { Component } from 'react'
import { Button, Card, Row, Col, Statistic, Progress } from 'antd'

export default class Demo extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
          choice: null,
          currRound: null,
          team: null,
          score: 0
        }

        this.checkRound = this.checkRound.bind(this)
        this.calcScore = this.calcScore.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.checkLocalStorage = this.checkLocalStorage.bind(this)

        window.addEventListener('storage', this.checkLocalStorage)
      
    }

    componentDidMount(){
        
        const { match: { params } } = this.props;
        console.log(params.team)

        let currRound = localStorage.getItem('currRound')
        if(!currRound){
            currRound = 1
            localStorage.setItem('currRound', currRound)
        }

        localStorage.setItem(`${params.team}Score`, 0)

        this.setState({
            team: params.team,
            currRound: parseInt(currRound),
        })

    }

    checkLocalStorage(){
        if(this.state.team){
            this.setState({
                choice: localStorage.getItem(`${this.state.team}Choice`),
                currRound: localStorage.getItem(`currRound`),
                score: localStorage.getItem(`${this.state.team}Score`)
            })
        }
    }

    calcScore(x, y, choice){
        if(x === 1 && y === 3){
            if(choice === 'x'){
                return 3
            }
            if(choice === 'y'){
                return -1
            }
        }
        if(x === 2 && y === 2){
            if(choice === 'x'){
                return 2
            }
            if(choice === 'y'){
                return -2
            }
        }
        if(x === 3 && y === 1){
            if(choice === 'x'){
                return 1
            }
            if(choice === 'y'){
                return -3
            }
        }
        if(x === 4 && y === 0){
            if(choice === 'x'){
                return -1
            }
            if(choice === 'y'){
                return 0
            }
        }
        if(x === 0 && y === 4){
            if(choice === 'x'){
                return 0
            }
            if(choice === 'y'){
                return 1
            }
        }
    }

    checkRound(){
        if(localStorage.getItem('blueChoice') && localStorage.getItem('redChoice') && 
            localStorage.getItem('greenChoice') && localStorage.getItem('yellowChoice')){

            const x = (localStorage.getItem('blueChoice')==='x') + (localStorage.getItem('redChoice')==='x') + 
                (localStorage.getItem('greenChoice')==='x') + (localStorage.getItem('yellowChoice')==='x')
            
            const y = (localStorage.getItem('blueChoice')==='y') + (localStorage.getItem('redChoice')==='y') + 
                (localStorage.getItem('greenChoice')==='y') + (localStorage.getItem('yellowChoice')==='y')
            
            localStorage.setItem('currRound', parseInt(this.state.currRound) + 1)
            
            console.log('X: ',x,' Y :',y)
            console.log(this.calcScore(x, y, localStorage.getItem('blueChoice')))
            
            localStorage.setItem('blueScore',  parseInt(localStorage.getItem('blueScore')) + this.calcScore(x, y, localStorage.getItem('blueChoice')))
            localStorage.setItem('redScore',   parseInt(localStorage.getItem('redScore')) + this.calcScore(x, y, localStorage.getItem('redChoice')))
            localStorage.setItem('greenScore', parseInt(localStorage.getItem('greenScore')) + this.calcScore(x, y, localStorage.getItem('greenChoice')))
            localStorage.setItem('yellowScore',parseInt(localStorage.getItem('yellowScore')) + this.calcScore(x, y, localStorage.getItem('yellowChoice')))

            localStorage.removeItem('blueChoice')
            localStorage.removeItem('redChoice')
            localStorage.removeItem('greenChoice')
            localStorage.removeItem('yellowChoice')

            this.setState({
                choice: null,
                currRound: parseInt(localStorage.getItem('currRound')),
                score: parseInt(localStorage.getItem(`${this.state.team}Score`)),
            })

           } 
    }

    handleClick(choice){

        
        switch(this.state.team){
            case 'blue':
                localStorage.setItem('blueChoice', choice)
                break;
            case 'red':
                localStorage.setItem('redChoice', choice)
                break;
            case 'green':
                localStorage.setItem('greenChoice', choice)
                break;
            case 'yellow':
                localStorage.setItem('yellowChoice', choice)
                break;
            default:
                break; 
        }

        this.setState({
            choice: choice
        })

        this.checkRound()

    }

    componentWillUnmount(){
        window.removeEventListener('storage', this.checkLocalStorage())

        // localStorage.removeItem('blueChoice')
        // localStorage.removeItem('redChoice')
        // localStorage.removeItem('greenChoice')
        // localStorage.removeItem('yellowChoice')

        // localStorage.removeItem('blueScore')
        // localStorage.removeItem('redScore')
        // localStorage.removeItem('greenScore')
        // localStorage.removeItem('yellowScore')

    }

    render() {
        return (
        <div>
            <div style={{
                textAlign: 'center',
                margin: '1em',
            }}>
                <h1 style={{
                    color: 'white',
                }}>Welcome {this.state.team?this.state.team.charAt(0).toUpperCase() + this.state.team.slice(1):''} Team.</h1>
                <h3 style={{
                    color: 'white',
                }}>Round {this.state.currRound||0}</h3>
            </div>
            <Row gutter={24} justify="center">
                <Col span={2}>
                    <Button onClick={() => this.handleClick('x')} type={this.state.choice==='x'?'primary':'default'} danger={this.state.choice==='x'} block><strong>X</strong></Button>
                </Col>
                <Col span={2}>
                    <Button onClick={() => this.handleClick('y')} type={this.state.choice==='y'?'primary':'default'} danger={this.state.choice==='y'} block><strong>Y</strong></Button>
                </Col>
            </Row>

            <br /><br />

            <Row gutter={16} justify="center" style={{margin: '0.5em'}}>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Blue Team Score"
                            value={localStorage.getItem('blueScore')||0}
                            valueStyle={{ color: 'blue' }}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Red Team Score"
                            value={localStorage.getItem('redScore')||0}
                            valueStyle={{ color: 'red' }}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Green Team Score"
                            value={localStorage.getItem('greenScore')||0}
                            valueStyle={{ color: 'green' }}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="Yellow Team Score"
                            value={localStorage.getItem('yellowScore')||0}
                            valueStyle={{ color: '#CCCC00' }}
                        />
                    </Card>
                </Col>
            </Row>

         </div>
            
            
            
            
            
            
        )
    }
}

