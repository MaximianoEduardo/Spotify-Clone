import React, { createContext, useContext, useReducer } from 'react'

export const DataLayerContext = createContext()

export const DataLayer = ({ initialState, reducer, children }) => {

    return (

        <DataLayerContext.Provider value={useReducer(initialState, reducer)}>
            {children}
        </DataLayerContext.Provider>

    )

}

export const useDataLayerValue = () => useContext(DataLayerContext)