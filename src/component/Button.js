import React, { Component } from 'react';
import '../styles/button.css'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content: ''
         }
    }

    componentDidMount() {
        const { content } = this.props
            this.setState({ content: content })
    }
    render() {
        const { content } = this.state
        const { type } = this.props
        return (
            <div>
                {
                    type === 'number' &&
                        <button className='button-box' id='num' name={content} onClick={e => this.props.handleContentClick(e.target.name)}>
                            {content}
                        </button>
                }

                {
                    type === 'operator' &&
                        <button className='button-box' id='oper' name={content} onClick={e => this.props.handleContentClick(e.target.name)}>
                            {
                            content}
                        </button>
                }
            </div >
        );
    }
}

export default Button;