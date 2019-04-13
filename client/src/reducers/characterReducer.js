import {SELECT_CHARACTER,UPDATE_CHARACTER} from '../actions/types';
const initialState={
    activeCharacter:{},
    loading:false
}
export default function(state = initialState, action){
    switch(action.type){
        case SELECT_CHARACTER:
            return{
                activeCharacter:action.payload
            }
        case UPDATE_CHARACTER:
            return{
                activeCharacter:action.payload
            }
    }
    return state;
}