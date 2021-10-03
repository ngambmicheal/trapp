export interface QuestionInterface {
    category : string, 
    type : string, 
    difficulty : 'hard' | 'easy', 
    question : string, 
    correct_answer : 'True' | 'False', 
    incorrect_answers : Array<any>,
    selected_answer ?: 'True' | 'False', 
    answered ?: Boolean
}
