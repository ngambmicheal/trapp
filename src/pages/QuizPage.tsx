import React, { useEffect, useState } from "react";
import { QuestionScreen } from "../components/quiz/question-screen";
import { ResultsScreen } from "../components/quiz/result-screen";
import { api } from "../services/api";
import { QuestionInterface } from "../services/interfaces";

export default function QuizPage(){
    
    const [questions, setQuestions] = useState<QuestionInterface[]>([])
    const [isCompleted, setCompleted] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0); 

    useEffect(() => {
        startGame()
    }, [setQuestions])

    const startGame = () => {
        api.getQuestions().then(({data:{results}}:{data:{results:QuestionInterface[]}}) => {
            setQuestions(results)
        })
    }

    const restartGame = () => {
        setQuestions([])
        setCompleted(false)
        setActiveIndex(0)
        startGame()
    }

    const answerQuestion = (index:number, value:any) => {
        let qtn = {...questions[index]}; 
        qtn.selected_answer = value; 
        qtn.answered = true; 
        questions[index] = qtn; 
        setQuestions(questions); 
        setActiveIndex(i => i+1)

        if((index+1)===questions.length){
            setCompleted(true)
            return 
        }
    }   
    
    return (
        <div>
            Hello
          {!isCompleted?  
            <QuestionScreen  questions={questions} answerQuestion={answerQuestion} activeIndex={activeIndex} /> 
                : 
            <ResultsScreen questions={questions} onRestart={restartGame}/> }
        </div>

    )
}


