import axios from 'axios'

export default class Api{
    
    getQuestions = () => {
        return axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    }

}

export const api = new Api();