import React from 'react'
import { Link } from 'react-router-dom';

import {
   HomeContainer,
   Navbar,
   Logo,
   Form,
   SearchLabel,
   Submit,
   TypeSelector,
   NavCta,
   Guide,
   History
} from '../../styledComponents/Home.styles';

import useCategoryHook from '../../hooks/useCategoryHook';

import Results from '../Results'
import FormInputField from '../FormInputField';
import { useHistoryContext } from '../contexts/HistoryContext';
import SearchHistory from '../SearchHistory';

const Home = function ({ recipes, fetchRecipes, error, setError, search, setSearch }) {
   const [query, setQuery] = React.useState('');
   const { categories } = useCategoryHook();
   const [searchHistory] = useHistoryContext();

   const [viewHistory, setViewHistory] = React.useState(false);

   const handleSearch = (e) => setSearch(e.target.value);

   const toggleHistory = () => {
      setViewHistory(!viewHistory);
   }

   return (
      <HomeContainer>
         <Navbar>
            <Logo>Cocktail</Logo>

            <Form onSubmit={(e) => {
               e.preventDefault();
               fetchRecipes(query, search);
            }}>
               <div>
                  <FormInputField search={search} categories={categories}
                     query={query} setQuery={setQuery} />

               </div>
               <Submit type="submit">Search</Submit>

               <div>
                  <SearchLabel>Search by</SearchLabel>
                  <TypeSelector
                     value={search}
                     onChange={handleSearch}
                     onBlur={handleSearch}
                  >
                     <option value='ingredient'>Ingredient</option>
                     <option value='name'>Name</option>
                     <option value='category'>Category</option>
                     <option value='alcoholic'>Alcoholic</option>
                  </TypeSelector>
               </div>
            </Form>

            <NavCta>
               <History onClick={toggleHistory}>SearchHistory</History>
               <Link to="/guide">
                  <Guide>Need guide?</Guide>
               </Link>
            </NavCta>
         </Navbar>

         <Results recipes={recipes}
            search={search} error={error} />

         <SearchHistory searchHistory={searchHistory}
            fetchRecipes={fetchRecipes} viewHistory={viewHistory}
            toggleHistory={toggleHistory} />
      </HomeContainer>
   )
}

export default Home