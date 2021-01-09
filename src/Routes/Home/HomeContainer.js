import React from "react";
import HomePresenter from "./HomePresenter";
import { feedApi } from "../../Api";
import InfiniteScroll from "react-infinite-scroll-component";

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      thumbnails: [],
      infinite: [],
      trendings: [],
      error: null,
      loading: true,
    };
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  async componentDidMount() {
    try {
      const { data: thumbnails } = await feedApi.thumbnails();
      const { data: trendings } = await feedApi.trending();
      this.setState({
        thumbnails,
        trendings,
      });
      console.log("initial data", thumbnails);
      console.log("trendings", trendings);
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
    const { data: infinite } = await feedApi.infinite();
    this.setState(
      (prev) => ({
        infinite: [...prev.infinite, ...infinite],
      }),
      () => console.log("fetched new data", infinite)
    );
  }

  render() {
    const { thumbnails, infinite, error, loading } = this.state;
    return (
      <InfiniteScroll
        dataLength={this.state.infinite.length}
        next={this.fetchMoreData}
        hasMore={true}
        loader={<span></span>}
        style={{ overflow: "none" }}
      >
        <HomePresenter
          thumbnails={thumbnails}
          infinite={infinite}
          error={error}
          loading={loading}
        />
      </InfiniteScroll>
    );
  }
}

export default HomeContainer;
