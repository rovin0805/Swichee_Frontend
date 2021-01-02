import React from "react";
import HomePresenter from "./HomePresenter";
import { feedApi } from "../../Api";

class HomeContainer extends React.Component {
  state = {
    thumbnails: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const { data: thumbnails } = await feedApi.thumbnails();
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

  render() {
    const { thumbnails, error, loading } = this.state;
    return (
      <HomePresenter thumbnails={thumbnails} error={error} loading={loading} />
    );
  }
}

export default HomeContainer;
