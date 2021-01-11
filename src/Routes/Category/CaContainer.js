import React from "react";
import { feedApi } from "../../Api";
import CaPresenter from "./CaPresenter";
import * as Scroll from "react-scroll";

class CaContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      error: null,
      loading: true,
      theme: null,
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
        theme: noBlankTerm,
        loading: false,
        alreadyCalled: true,
      });
      console.log(`${term} category`, categories);
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
    const { categories, theme, loading, error } = this.state;
    return (
      <CaPresenter
        categories={categories}
        theme={theme}
        loading={loading}
        error={error}
        updateContainer={this.updateContainer}
      />
    );
  }
}

export default CaContainer;
