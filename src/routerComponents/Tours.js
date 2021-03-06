import React from "react";
import SearchBar from "../components/SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "../components/ImageList";
import SearchForImage from "../components/SearchForImage";


class Tours extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    console.log(response.data.results);
    
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.images.length != 0 ? (
          <ImageList images={this.state.images}/>
        ) : (
          <SearchForImage />
        )}
      </div>
    );
  }
}

export default Tours;
