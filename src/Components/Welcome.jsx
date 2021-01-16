import React, { PureComponent } from 'react';

class Welcome extends PureComponent {
    constructor(props){
        super(props)
        this.state = { 
            name: "",
            fade: ""
        }
        this.inputRef = React.createRef()
    }
    changesHandler = e => {
        this.setState({
            name: e.target.value
        })
    }
    saveName = e =>{
        if(this.inputRef.current.value === "" || this.inputRef.current.value === " " ){
            e.preventDefault()
        }else{
            localStorage.setItem('name', this.state.name)
        this.setState({
            fade: "fade"
        })
        }
        this.props.quizShow()
    }
    render() { 
        return ( 
            <section className={"welcome-container " + this.state.fade}>
                <div className="modal">
                    <div className="modal-head">
                        <h1 className="modal-title">Welcome to my simple test</h1>
                        <hr/>
                        <p>I hope you will enjoy</p>
                    </div>
                    <div className="modal-body">
                        <label for="name">Your Name</label><br/>
                        <input type="text" id="name" value={this.state.name} onChange={this.changesHandler} ref={this.inputRef}/>
                    </div>
                    <hr/>
                    <div className="modal-footer">
                        <button type="button" className="next" onClick={this.saveName}>Next</button>
                    </div>
                </div>
            </section>
         ); 
    }
}
 
export default Welcome;

