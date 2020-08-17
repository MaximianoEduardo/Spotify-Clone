import React, { createContext, useContext, useReducer } from 'react'

export const DataLayerContext = createContext()

export const DataLayer = ({ initialState, reducer, children }) => {

    <StateContext.Provider value={useReducer(initialState, reducer)}>
        {children}
    </StateContext.Provider>

}
