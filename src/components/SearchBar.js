import React from 'react'

class SearchBar extends React.Component{
    
    state = {term:''}

    render(){

        const onInputChange =(e) =>{
            this.setState({term:e.target.value});
        }

        const onFormSubmit = (e) => {
            e.preventDefault();
            this.props.onSearchSubmit(this.state.term)
        }

        return(
            <div className="search-bar ui segment" style={{marginTop:'1vh'}}>
                <form className="ui form" onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Video Search </label>
                        <input type="text" placeholder='search' onChange={onInputChange} value={this.state.term}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar