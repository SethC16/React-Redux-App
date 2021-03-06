import axios from 'axios';

export const fetchChucknorris = () => dispatch => {
        dispatch({type: "FETCHING_CHUCK_START"})
        axios.get('http://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Norris')
            .then( res => {
                console.log('This is the response', res.data);
                dispatch({ type: 'FETCHING_CHUCK_SUCCESS', payload: res.data})
            })
            .catch( err => console.log(err))
    
}