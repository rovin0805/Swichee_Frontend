import React from "react";
import { searchApi } from "../../Api";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component {
  state = {
    people: null,
    posts: null,
    searchTerm: "",
    loading: false,
    error: null,
    typeId: 6, // default all = 6
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({
      loading: true,
    });
    try {
      const { typeId } = this.state;
      if (typeId === 6) {
        console.log("ALL");
        const { data: posts } = await searchApi.allPosts(searchTerm);
        const { data: people } = await searchApi.people(searchTerm);
        this.setState(
          {
            posts,
            people,
          },
          () =>
            console.log(
              "people",
              this.state.people,
              "\nposts",
              this.state.posts
            )
        );
      } else if (typeId === 5) {
        console.log("PEOPLE");
        const { data: people } = await searchApi.people(searchTerm);
        this.setState(
          {
            people,
          },
          () => console.log("people", this.state.people)
        );
      } else {
        console.log("PHOTO, AUDIO, VIDEO, BLOG");
        const { data: posts } = await searchApi.posts(searchTerm, typeId);
        this.setState(
          {
            posts,
          },
          () => console.log("posts", this.state.posts)
        );
      }
    } catch {
      this.setState({
        error: "Can't find search results.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  passTypeNum = (val) => {
    this.setState({
      typeId: val,
      people: null,
      posts: null,
    });
  };

  render() {
    const { typeId, people, posts, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        typeId={typeId}
        people={people}
        posts={posts}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        passTypeNum={this.passTypeNum}
      />
    );
  }
}

export default SearchContainer;
