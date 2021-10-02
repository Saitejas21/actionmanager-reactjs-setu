import React from 'react';

export default class HideText extends React.Component{
    constructor(props){
        super(props);
        this.state={
            textDisplay: false,
        }
    }

    render(){
        return(
            <div>
                <button>Toggle</button>
                {this.props.text}
            </div>
        )
    }
}