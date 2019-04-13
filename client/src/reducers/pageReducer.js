import {CHANGE_PAGE} from '../actions/types';
const initialState={
    activePage:"",
    loading:false
}
export default function(state = initialState, action){
    switch(action.type){
        case CHANGE_PAGE:
            return{
                activePage:action.payload
            }
    };
    return state;
}