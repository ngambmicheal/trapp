import { QuestionInterface } from "../../services/interfaces"
import Button from "../Button"

type ResultScreenProps = {
    questions:QuestionInterface[], 
    onRestart: () => void
}
export function ResultsScreen({questions, onRestart}: ResultScreenProps){
    return (
        <div>
            <h3> You Scored <br /> 
                {questions.filter(qt => qt.selected_answer === qt.correct_answer).length} / {questions.length}
            </h3>

            {questions.map((question, index) => {
                return <ResultsBox key={`question-${index}`} question={question}  />
            })}

            <Button onClick={onRestart}> Restart </Button>

        </div>
    )
}

type ResultBoxProps = {
    question:QuestionInterface
}
export function ResultsBox({question}: ResultBoxProps){
    return (
        <p> <span> {question.selected_answer === question.correct_answer ? '+' : '-'} </span> {question.question}</p>
    )
}