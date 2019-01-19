Searimport React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SearchBar.css';


export default class SearchBar extends Component
{
    constructor()
    {
        super();

        this.state = {
            searchVal: '',
            searchList: []
        }
        this.handleSearchInput = this.handleSearchInput.bind( this );
        this.submitSearch = this.submitSearch.bind( this );
    }

    handleSearchInput( input )
    {
        this.setState( { searchVal: input } );
    }

    submitSearch()
    {
        axios.get( `http://localhost:3001/api/search/movies/${ this.state.searchVal }` )
            .then( response =>
            {
                this.setState( { searchList: response.data.results } );
            } );
    }

    render()
    {
        return (
            <div className='search-landing'>
                <div className='translucent'></div>

                <h1 id='netflix'>THE MOVIE DB</h1>

                <div className='searchbar-container'>
                    <div className='search-icon'>
                        <i style={{ backgroundColor: 'white' }} className='fa fa-search fa-2x' aria-hidden="true"></i>
                    </div>

                    <input className='searchbar' type='text' placeholder='Search films...' onChange={( e ) => this.handleSearchInput( e.target.value )}></input>

                    <Link to={`/search/movies/${ this.state.searchVal }`}>
                        <button className='search-btn' onClick={() => this.submitSearch()}
                            onKeyPress={( e ) =>
                            {
                                if ( e.charCode == 13 )
                                {
                                    this.submitSearch();
                                }
                            }
                            }>SEARCH</button>
                    </Link>
                </div>
            </div>
        )
    }
}
