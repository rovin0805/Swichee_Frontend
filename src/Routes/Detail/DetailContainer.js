import React from "react";
import DetailPresenter from "./DetailPresenter";
import { feedApi } from "../../Api";
import queryStirng from "query-string";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      postingDetail: null,
      recommend: null,
      comments: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
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
      this.setState({
        type: parsedTypeId,
        postingDetail,
        comments,
        recommend,
      });
      console.log("posting info", postingDetail);
      console.log("comments", comments);
      console.log("recommend", recommend);
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
    const {
      postingDetail,
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
        comments={comments}
        recommend={recommend}
        error={error}
        loading={loading}
      />
    );
  }
}

export default DetailContainer;
