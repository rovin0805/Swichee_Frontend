import React from "react";
import DetailPresenter from "./DetailPresenter";
import { feedApi } from "../../Api";
import queryStirng from "query-string";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    // const {
    //   location: { search },
    // } = props;
    this.state = {
      postingDetail: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const { search } = this.props.location;
    const queryObj = queryStirng.parse(search);
    const { id, type_id } = queryObj;
    const parsedId = parseInt(id);
    const parsedTypeId = parseInt(type_id);

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
    console.log(this.props);
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
