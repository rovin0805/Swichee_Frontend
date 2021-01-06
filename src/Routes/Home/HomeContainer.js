import React from "react";
import HomePresenter from "./HomePresenter";
import { feedApi } from "../../Api";
import InfiniteScroll from "react-infinite-scroll-component";

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      thumbnails: [],
      error: null,
      loading: true,
    };
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  async componentDidMount() {
    try {
      const { data: thumbnails } = await feedApi.thumbnails();
      this.setState({
        thumbnails,
      });
      console.log(thumbnails);
    } catch {
      this.setState({
        error: "Can't find any information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  async fetchMoreData() {
    const { data: thumbnails } = await feedApi.thumbnails();
    this.setState((prev) => ({
      thumbnails: [...prev.thumbnails, ...thumbnails],
    }));
  }

  render() {
    const { thumbnails, error, loading } = this.state;
    return (
      <InfiniteScroll
        dataLength={this.state.thumbnails.length}
        next={this.fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        style={{ overflow: "none" }}
      >
        <HomePresenter
          thumbnails={thumbnails}
          error={error}
          loading={loading}
        />
      </InfiniteScroll>
    );
  }
}

export default HomeContainer;
