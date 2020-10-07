import React, { Component } from 'react'

export class SearchBar extends Component {

    state = { term : ''};
    /**
     * Event parametar se automatski prenosi handleru,
     * koji sadrzi mnostvo informacija o dogadjaju koji se upravo desio.
     * Npr. event.target.value sadrzi tekst koji je korisnik uneo u input polje.
     */
    // onInputChange = (event) => {
    //     console.log(event.target.value)
    // }

    onInputChange = event => {
     this.setState({term : event.target.value})
    }

    onFormSubmit = e => {
        e.preventDefault();
        /**
         * pozivamo metod iz parent komponente, pri cemu kao argument poziva
         * predajemo vrednost iz child komponente, u ovom slucaju state
         */
        this.props.onSubmit(this.state.term)
        console.log('SearchBar component: ' + this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Term </label>
                        <input type='text' value = {this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
