
import React from 'react'
import {map} from 'lodash'
import Autosuggest from 'react-autosuggest';
import {bottles} from '../../store/bottles/bottles'
import { Link } from 'react-router-dom'

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  //console.log(inputLength === 0 ? [] : $.map(bottles.json, function(el) { return el; }).filter(bottle =>
  //  bottle.name.toLowerCase().slice(0, inputLength) === inputValue
 // ));

  return inputLength === 0 ? [] : $.map(bottles.json, function(el) { return el; }).filter(bottle =>
    bottle.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Rendering suggestions.
const renderSuggestion = suggestion => (
  <div>
    <table key={suggestion.key} className="searchTable" >
      <tbody>
        <tr>
          <td>
            <img src="\src\img\garrafa1.png" width="12px"/>
          </td>
          <td width="100%">
        <Link to={'/cachaca/' + suggestion.name}><span><strong className="tt-highlight">{suggestion.name}</strong></span></Link>
          </td>
        </tr>
      </tbody>
    </table>    
  </div>
);


export class AutocompleteComponent extends React.Component {
constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {    
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Procure sua cachaça por nome ou por produtor...',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }

}

