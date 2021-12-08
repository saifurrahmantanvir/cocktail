import React from 'react'

import { Input, CategorySelector, CategoryLabel } from '../styledComponents/FormInputField.styles';

const FormInputField = function ({ query, setQuery, search, categories }) {
   const handleQuery = (e) => setQuery(e.target.value);

   return (
      <React.Fragment>
         {
            search === 'name'
               ? <Input type='text'
                  placeholder='Enter recipe name'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
               />
               : search === 'ingredient'
                  ? <Input type='text'
                     placeholder='Enter ingredient name'
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                  />
                  : search === 'category'
                     ? <React.Fragment>
                        <CategoryLabel>Select a category</CategoryLabel>
                        <CategorySelector
                           value={query}
                           onChange={handleQuery}
                           onBlur={handleQuery}
                        >
                           <option />
                           {
                              categories.length
                                 ? categories.map(({ strCategory }) => (
                                    <option value={strCategory} key={strCategory}>
                                       {strCategory}
                                    </option>
                                 )) : null
                           }
                        </CategorySelector>
                     </React.Fragment>
                     :
                     <React.Fragment>
                        <CategoryLabel>Select a category</CategoryLabel>
                        <CategorySelector
                           value={query}
                           onChange={handleQuery}
                           onBlur={handleQuery}
                        >
                           <option />
                           <option value='Alcoholic'>Alcoholic</option>
                           <option value='Non_Alcoholic'>Non Alcoholic</option>
                           <option value='Optional_Alcohol'>Optional Alcohol</option>
                        </CategorySelector>
                     </React.Fragment>
         }
      </React.Fragment>
   )
}

export default FormInputField