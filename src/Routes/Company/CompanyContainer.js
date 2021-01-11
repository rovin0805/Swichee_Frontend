import React from "react";
import CompanyPresenter from "./CompanyPresenter";
import { feedApi } from "../../Api";


class CompanyContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      loading: true,
    };
  }
  async componentDidMount() {
    try {
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
  const { error, loading } = this.state;
    return (
        <CompanyPresenter
        error={error}
        loading={loading}
        />
    );
  }
}

export default CompanyContainer;
