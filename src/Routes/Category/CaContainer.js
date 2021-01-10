import React from "react";
import { feedApi } from "../../Api";
import CaPresenter from "./CaPresenter";

class CaContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      console.log(this.props);
      const {
        match: {
          params: { term },
        },
      } = this.props;
      const noBlankTerm = term.replace(/\s/g, "");
      const { data: categories } = await feedApi.category(noBlankTerm);
      this.setState({
        categories,
      });
      console.log(`${term} category`, categories);
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
    const { categories } = this.state;
    return <div></div>;
  }
}

export default CaContainer;
