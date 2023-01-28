import Component  from 'react'
import './index.css'

 class SpeedoMeter extends Component {
    state={
        speed:0,
    }
    
    onClickAccelerate =() =>{
        const {speed} = this.state 
        if (speed > 0){
            this.setState(prevState => ({speed :prevState.speed - 10}))
        }

    }
    onClickApplyBreak = () =>{
        const {speed} = this.state 

        if (speed < 200){
            this.setState(prevState =>({spedd: prevState.speed+10}))
        }
    }

  render() {
    const {speed} = this.state
    return (
      <div className="app-container">
      <div className='main-container'>
        <h1 className='heading'>SPEEDOMETER</h1>
        <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer" className="image" />
        <h1 className="text"> speed is {speed}mph</h1>
        <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
            <button 
            className="accelerate-button button "
            type="button"
            onClick={this.onClickAccelerate}
            >
            Accelerate
            </button>
            <button 
            type="button"
            className="break-button button"
            onClick={this.onClickApplyBreak} 
            >
            Apply Break
            </button>
        </div>
      </div>
        
      </div>
    )
  }
}
export default SpeedoMeter
