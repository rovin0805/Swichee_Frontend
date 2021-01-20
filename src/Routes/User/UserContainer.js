import React from "react";
import UserPresenter from "./UserPresenter";
class UserContainer extends React.Component {
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
    return <UserPresenter error={error} loading={loading} />;
  }
}

export default UserContainer;
