import React from 'react'

const HistoryContext = React.createContext();

const reducer = function (cState, { type, query }) {
   switch (type) {
      case type:
         return { ...cState, [type]: [...cState[type], query] }

      default:
         return cState
   }
}

export const HistoryContextProvider = function ({ children }) {
   const [searchHistory, setSearchHistory] = React.useReducer(reducer, {
      ingredient: [],
      name: [],
      category: [],
      alcoholic: []
   });

   return (
      <HistoryContext.Provider value={[searchHistory, setSearchHistory]}>
         {children}
      </HistoryContext.Provider>
   )
}

export const useHistoryContext = function () {
   const context = React.useContext(HistoryContext);

   if (!context) {
      throw new Error(`useHistoryContext should be used inside the HistoryContextProvider`);
   }

   return context;
}