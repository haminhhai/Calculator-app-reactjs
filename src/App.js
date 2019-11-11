import React from 'react';

import Button from './component/Button'
import ResultBox from './component/ResultBox'
import './styles/App.css';

const number = {
  type: 'number',
  arr: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0',]
}
const operator = {
  type: 'operator',
  arr: ['CE', 'C', '+', '-', '*', '/', '.', '=']
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    }
  }
  showButtons = (data, type) => {
    var result = []
    if (data.length > 0)
      data.map((item, index) => {
        result.push(
          <Button
            key={index}
            content={item}
            type={type}
            handleContentClick={this.handleContentClick}
          />)
      })
    return result
  }

  handleContentClick = (value) => {
    const { result } = this.state
    console.log(result)
    
    if (value === '=') {
      this.calculate()
    }

    else if (value === 'C') {
      this.reset()
    }
    else if (value === 'CE') {
      this.backspace()
    }

    else {
      this.setState({
        result: result + value
      })
    }
  }

  calculate = () => {
    const { result } = this.state
    var checkResult = ''
    if (result !== '') {
      if (result.indexOf('--') > -1) {
        checkResult = result.replace('--', '+')
      }

      else {
        checkResult = result
      }
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: 'ERROR TYPE'
      })
      setTimeout(() => {
        this.setState({
          result: ''
        })
      }, 2000);

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };
  render() {
    var { result } = this.state
    return (
      <div className="App align-middle">
        <div className='cal-wrapper container'>
          <h3>HMH-Calculator</h3>
          <ResultBox result={result} />
          <div className='row mb-3'>
            <div className='col-6 ml-4'>
              <div className='row justify-content-center'>
                {this.showButtons(number.arr, number.type)}
              </div>
            </div>

            <div className='col-4 ml-4'>
              <div className='row  justify-content-center'>
                {this.showButtons(operator.arr, operator.type)}
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
