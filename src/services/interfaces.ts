export interface QuestionInterface{
    category:String, 
    type: String, 
    difficulty: 'hard' | 'easy', 
    question: String, 
    correct_answer: 'True' | 'False', 
    incorrect_answers: Array<any>,
    selected_answer ?: 'True' | 'False', 
    answered ?: Boolean
}