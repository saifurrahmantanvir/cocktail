import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppContainer } from './App.styles.js';

import useSearchHook from './hooks/useSearchHook'

import Home from './components/pages/Home';
import Recipe from './components/pages/Recipe';
import Guide from './components/pages/Guide';
import { HistoryContextProvider } from './components/contexts/HistoryContext.js';

const AppWithContext = function () {
   const [search, setSearch] = React.useState('ingredient');
   const { recipes, fetchRecipes, error, setError } = useSearchHook();

   return (
      <AppContainer>
         <Router>
            <Switch>
               <Route path="/guide" exact component={() => <Guide />} />
               <Route path="/:id" exact component={() => <Recipe />} />
               <Route path="/" exact component={() =>
                  <Home error={error} setError={setError}
                     search={search} setSearch={setSearch}
                     recipes={recipes} fetchRecipes={fetchRecipes} />
               } />
            </Switch>

         </Router>

      </AppContainer>
   );
}

const App = function () {
   return (
      <HistoryContextProvider>
         <AppWithContext />

      </HistoryContextProvider>
   )
}

export default App