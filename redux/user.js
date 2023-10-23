import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({

    //name du reducer
    name: "user" , 
    initialState : null ,

    reducers:{
        //setuser edit user dans le store
        setUser: (state  , action) => {
            return action.payload ; 
            //console.log(action.payload.uid) ;
        },
        resetUser : (state , action) => {
            return null ;
        }
    },

})

//on rend disponible l'actioncreator
export const {setUser , resetUser} = user.actions ;
//onrend disponible par default le reducer
export default user.reducer ;