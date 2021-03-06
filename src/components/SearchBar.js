import React from "react";

class SearchBar extends React.Component {
  state = {
    term: [
      "albania",
      "andorra",
      "austria",
      "belgium",
      "bosnia and Herzegovina",
      "bulgaria",
      "croatia",
      "czech",
      "denmark",
      "estonia",
      "finland",
      "france",
      "germany",
      "greece",
      "hungary",
      "iceland",
      "ireland",
      "italy",
      "lithuania",
      "luxembourg",
      "macedonia",
      "netherlands",
      "norway",
      "poland",
      "portugal",
      "romania",
      "russia",
      "serbia",
      "slovakia",
      "slovenia",
      "spain",
      "sweden",
      "switzerland",
      "ukraine",
      "united kingdom",
      "vatican",
    ],
    searchTerm: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.recursion(0, this.state.searchTerm, this.state.term));
  };

  recursion(i, theTerm, array) {
    if (i >= this.state.term.length) {
      return "hfhjfhjfjdaljdksf";
    } else if (theTerm.toLowerCase() === array[i]) {
      return theTerm;
    } else {
      return this.recursion(++i, theTerm, array);
    }
  }
  changeSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="search-bar">
        <form className="input-and-icon" onSubmit={this.onFormSubmit}>
          <label>
            <i
              className="search icon search-icon"
              onClick={this.onFormSubmit}
            ></i>
          </label>
          <input
            className="input-image"
            type="text"
            value={this.state.searchTerm}
            onChange={this.changeSearchTerm}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
