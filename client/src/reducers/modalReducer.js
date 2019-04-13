import {ACTIVATE_MODAL,DEACTIVATE_MODAL} from '../actions/types';
const initialState={
    modal:'',
    loading:false
}
export default function(state = initialState, action){
    switch(action.type){
        case ACTIVATE_MODAL:
            return{
                modal:action.payload.target,
                field:action.payload.field
            }
        case DEACTIVATE_MODAL:
            return{
                modal:'',
                field:''
            }
    }
    return state;
}