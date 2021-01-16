import React, { Component } from 'react';
import QuizJson from '../quiz.json';
import Questions from './Questions';
import Result from './Result';

const {questions, answers, correctAnswers} = QuizJson
const answersArray = [answers.answer1, answers.answer2, answers.answer3, answers.answer4, answers.answer5,answers.answer6]
let answerNum = 0
let correctAnswerNum = 0

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state={
            questionNum: 0,
            answers: answersArray[answerNum],
            correctAnswers: correctAnswers[correctAnswerNum],
            radioValue: "",
            progressBarValue: questions.length * 20,
            progressNum: 0,
            score: 0
        }
        this.inputRefs = []
        this.setcbRef = (el) => {
            return this.inputRefs = el
        }
        this.progressRef = React.createRef()
    }
    addInputsRef = (el) => {
        if(el && !this.inputRefs.includes(el)){
            this.inputRefs.push(el)
        }
    }
    getRadioValue =  (e) => {
        return this.setState({
            radioValue : e.target.value
        })
    }
    nextQuestion = () =>{
        const checkInput = this.inputRefs.some(element => {
            return element.checked;
        })
        if(this.state.questionNum <= questions.length  && checkInput){
            if(this.state.radioValue === this.state.correctAnswers){
                correctAnswerNum += 1
                this.setState({
                    score: this.state.score + 1,
                    correctAnswers: correctAnswers[correctAnswerNum]
                })
                answerNum += 1
                console.log(correctAnswerNum + this.state.correctAnswers)
            }else{
                correctAnswerNum +=1
                this.setState({
                    correctAnswers: correctAnswers[correctAnswerNum]
                })
                answerNum += 1
                console.log(correctAnswerNum + this.state.correctAnswers)
            }
            this.setState({
                questionNum: this.state.questionNum + 1,
                progressNum: this.state.progressNum + 20,
                answers: answersArray[answerNum]
            })
            this.progressRef.current.value += 20;
            this.inputRefs.forEach((el) => {return el.checked = false})
        }
    }
    render() { 
        return (
        <section className="quiz-container">
            {this.state.questionNum <= questions.length -1 ?
                <Questions 
                questions={questions}
                questionNum = {this.state.questionNum}
                answers = {this.state.answers}
                addInputsRef = {this.addInputsRef}
                ref = {this.progressRef}
                progressNum = {this.state.progressNum}
                nextQuestion = {this.nextQuestion}
                getRadioValue = {this.getRadioValue}
                progressBarValue = {this.state.progressBarValue}
                />:
                <Result name="Ahmed" score={this.state.score}/> 
            }
        </section>
        );
    }
}
 
export default Quiz;