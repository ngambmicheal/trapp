import React from 'react'
import Button from '../components/Button'
import {useHistory} from 'react-router-dom'

export default function HomePage(){
  const history = useHistory() 
  const startAction = () => {
    history.push('/quizes')
  }

  return (
    <div> 
      <h3> Welcome to the Trivial Challenge! </h3>


      <p>
                You will be presented with 10 True or False questions
      </p> 

      <p> Can you score 100% ? </p>

      <Button onClick={startAction}> BEGIN </Button>
    </div>
  )
}
