import React from 'react';

const Questions = React.forwardRef((props, ref) => {
        return ( 
            <div>
                <div className="question">
                    <h1>{props.questions[props.questionNum]}</h1>
                    </div>
                    <div className="answers">
                        {props.answers.map((ans, i) => {
                            return (
                                <div className={"answer-" + (i + 1)} key={"key_" + i}>
                                    <input 
                                    type="radio" 
                                    id={ans} 
                                    name="answer" 
                                    value={ans}  
                                    ref={props.addInputsRef}
                                    onClick={props.getRadioValue}/>
                                    <label for={ans}>{ans}</label>
                                </div>
                            )
                        })}
                    </div>
                <progress min="0" max={props.progressBarValue} value="0" ref={ref}></progress>
                <span>{props.progressNum}/{props.progressBarValue}</span>
                <button onClick={props.nextQuestion}>Next</button>
            </div>
        );
})

export default Questions;