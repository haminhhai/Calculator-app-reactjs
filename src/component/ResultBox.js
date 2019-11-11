import React, { Component } from 'react';
import '../styles/resbox.css';

class ResultBox extends Component {
    render() {
        const { result } = this.props
        return (
            <div className='result container text-right mt-3'>
                {result}
            </div>
        );
    }
}

export default ResultBox;