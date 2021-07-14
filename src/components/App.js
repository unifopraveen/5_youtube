import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component{
    render(){

        const onSearchSubmit = (term) => {
            console.log(term)
        }

        return(
            <div className="ui container">
                <SearchBar onSearchSubmit={onSearchSubmit}/>
            </div>
        )
    }
}

 export default App;