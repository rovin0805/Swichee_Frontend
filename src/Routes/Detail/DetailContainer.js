import React from "react";
import DetailPresenter from "./DetailPresenter";
import { feedApi } from "../../Api";
import queryStirng from "query-string";
import * as Scroll from "react-scroll";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      postingDetail: null,
      photos: null,
      recommend: null,
      comments: null,
      error: null,
      loading: true,
      alreadyCalled: false,
    };
    this.callApi = this.callApi.bind(this);
    this.updateContainer = this.updateContainer.bind(this);
  }

  componentDidMount() {
    Scroll.animateScroll.scrollToTop();
    this.callApi();
  }

  componentDidUpdate() {
    if (!this.state.alreadyCalled) {
      this.callApi();
    }
  }

  async callApi() {
    console.log(this.props);
    const {
      location: { search },
      history: { push },
    } = this.props;
    const queryObj = queryStirng.parse(search);
    const { id, type_id, category } = queryObj;
    const parsedId = parseInt(id);
    const parsedTypeId = parseInt(type_id);

    if (isNaN(parsedId)) {
      return push("/");
    }
    if (isNaN(parsedTypeId)) {
      return push("/");
    }

    try {
      const { data: postingDetail } = await feedApi.postingDetail(
        parsedId,
        parsedTypeId
      );
      await feedApi.addView(parsedId);
      const { data: comments } = await feedApi.comments(parsedId);
      const { data: recommend } = await feedApi.recommend(parsedId, category);
      if (parsedTypeId === 1) {
        const { data: photos } = await feedApi.blur(parsedId, parsedTypeId);
        this.setState({ photos });
        console.log("photos", photos);
      }
      this.setState({
        type: parsedTypeId,
        postingDetail,
        comments,
        recommend,
        loading: false,
        alreadyCalled: true,
      });
      console.log("posting info", postingDetail);
      console.log("comments", comments);
      console.log("recommend", recommend);
    } catch {
      this.setState({
        error: "Can't find any information.",
      });
    }
  }

  updateContainer() {
    this.setState({ alreadyCalled: false }, () =>
      Scroll.animateScroll.scrollToTop()
    );
  }

  render() {
    const {
      postingDetail,
      photos,
      type,
      comments,
      recommend,
      error,
      loading,
    } = this.state;
    return (
      <DetailPresenter
        type={type}
        postingDetail={postingDetail}
        photos={photos}
        comments={comments}
        recommend={recommend}
        error={error}
        loading={loading}
        updateContainer={this.updateContainer}
      />
    );
  }
}

export default DetailContainer;
