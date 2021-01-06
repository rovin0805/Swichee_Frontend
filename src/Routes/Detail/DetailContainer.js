import React from "react";
import DetailPresenter from "./DetailPresenter";
import { feedApi } from "../../Api";
import queryStirng from "query-string";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postingDetail: null,
      recommendPostings: null,
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
    const { id, type_id } = queryObj;
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
      this.setState({
        postingDetail,
      });
      console.log("data", postingDetail);
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
    const { postingDetail, error, loading } = this.state;
    return (
      <DetailPresenter
        postingDetail={postingDetail}
        error={error}
        loading={loading}
      />
    );
  }
}

export default DetailContainer;
