import { combineReducers } from '@reduxjs/toolkit'

import admin from './adminSlice'


const reducer = combineReducers({
    admin,
})

export default reducer
