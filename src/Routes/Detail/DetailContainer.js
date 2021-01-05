import React from "react";
import DetailPresenter from "./DetailPresenter";
import { feedApi } from "../../Api";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      postingDetail: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    //   try {
    //     const { data: postingDetail } = await feedApi.postingDetail();
    //     this.setState({
    //       postingDetail,
    //     });
    //     console.log(postingDetail);
    //   } catch {
    //     this.setState({
    //       error: "Can't find any information.",
    //     });
    //   } finally {
    //     this.setState({
    //       loading: false,
    //     });
    //   }
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
