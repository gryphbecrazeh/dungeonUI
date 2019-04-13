import axios from 'axios';
import {GET_ITEMS,ADD_CHARACTER,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING,SELECT_CHARACTER,UPDATE_CHARACTER,CHANGE_PAGE,ACTIVATE_MODAL,DEACTIVATE_MODAL} from './types';
export const getItems = ()=> dispatch=>{
    dispatch(setItemsLoading());
    axios
        .get('/api/items')
        .then(res=>
            dispatch({
                type:GET_ITEMS,
                payload:res.data
            })
            );
}
export const addCharacter=item=>dispatch=>{
    axios
        .post('/api/items',item)
        .then(res=>dispatch({
            type:ADD_CHARACTER,
            payload:res.data
        }));
}
export const addItem =item=>dispatch=>{
    axios
        .post('/api/items',item)
        .then(res=>dispatch({
            type:ADD_ITEM,
            payload:res.data
        }));
}
export const delItem=id=>dispatch=>{
    axios
        .delete(`/api/items/${id}`)
        .then(res=>dispatch({
            type:DELETE_ITEM,
            payload:id
        }));
}
export const setItemsLoading=()=>{
    return {
        type: ITEMS_LOADING
    };
}
export const selectCharacter=character=>dispatch=>{
    dispatch({
        type:SELECT_CHARACTER,
        payload:character
    })
}
export const updateCharacter=(character,update)=>dispatch=>{
    let updatedCharacter=Object.assign(character,update);
    console.log(updatedCharacter);
    dispatch({
        type:UPDATE_CHARACTER,
        payload:updatedCharacter
    });
}
export const changePage=target=>dispatch=>{
    dispatch({
        type:CHANGE_PAGE,
        payload:target
    })
}
export const activateModal=(target,field)=>dispatch=>{
    dispatch({
        type:ACTIVATE_MODAL,
        payload:{
            target:target,
            field:field
        }
    });
}
export const deactivateModal=()=>dispatch=>{
    dispatch({
        type:DEACTIVATE_MODAL
    });
}