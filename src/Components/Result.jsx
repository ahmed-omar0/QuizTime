import React, { Component } from 'react';

class Result extends Component {
    render() { 
        return (
            <div className="modal">
                <div className="modal-head">
                    <h1>
                        Hi {localStorage.getItem('name')},   your score is {this.props.score}
                    </h1>
                </div>
            </div>
          );
    }
}
 
export default Result;