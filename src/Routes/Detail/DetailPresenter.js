import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import DetailPosting from "Components/DetailPosting";

const DetailPresenter = ({ type, postingDetail, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    postingDetail.length && (
      <DetailPosting
        key={postingDetail[0].Contents_id}
        type={type}
        imgUrl={postingDetail[0].Album_image}
        audio={postingDetail[0].Audio}
        avatar={postingDetail[0].image}
        writer={postingDetail[0].User_name}
        blue={postingDetail[0].blue}
        title={postingDetail[0].Title}
        body={postingDetail[0].Audio_contents}
        views={postingDetail[0].Views}
        likes={postingDetail[0].Likes}
        date={postingDetail[0].Date}
      />
    )
  );
};

DetailPresenter.propTypes = {
  type: PropTypes.number,
  postingDetail: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
