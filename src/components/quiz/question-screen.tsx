import {QuestionInterface} from '../../services/interfaces'
import Button from '../Button'

type QuestionScreenProps = {
    questions : QuestionInterface[],
    answerQuestion : (index:number, value:any) => void,
    activeIndex : number
}

export function QuestionScreen({questions, answerQuestion, activeIndex}:QuestionScreenProps){
  return (<div>
    {questions.map((question, index) => {
      return (activeIndex === index) && 
                <QuestionBox key={`question-screen-index-${index}`} question={question} index={index} totalQuestions={questions.length} answerQuestion={answerQuestion}  />
    })
    }
  </div>)
}

type questionProps = {
    question: QuestionInterface,
    answerQuestion : (index:number, value:any) => void,
    index : number, 
    totalQuestions : number
}

export default function QuestionBox({question, answerQuestion, index, totalQuestions}: questionProps){
  return (
    <div> 
      <div style={{margin:'20px', padding:'10px', borderRadius:'10px', border: '2px #555 solid'}} > 
        <h4> {question.category} </h4>
        <p dangerouslySetInnerHTML={{__html:question.question}} />
        <br /> 
        <Button onClick={() =>answerQuestion(index, 'True')}> True </Button>
        <Button onClick={() =>answerQuestion(index, 'False')}> False </Button>
      </div>    

      <div>{index + 1} of {totalQuestions} </div>
    </div>
  )
}
