import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

import DetailPosting from "Components/DetailPosting";
import { HiBadgeCheck } from "react-icons/hi";
import logo from "Assets/logo.png";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import parseISO from "date-fns/parseISO";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  background-color: white;
`;

/////////////////////////////

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img.attrs((props) => ({
  src: props.bgUrl,
}))`
  width: 300px;
  height: 300px;
  border-radius: 20px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const Avatar = styled.img.attrs((props) => ({
  src: props.bgUrl,
}))`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Text = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 23px;
  font-weight: bold;
  color: #525252;
`;

const Body = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

const Coulmn = styled.div`
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  cursor: pointer;
  width: 120px;
  height: 40px;
  color: white;
  background-color: #ff9900;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
`;

const SubInfo = styled.div`
  margin-top: 30px;
  color: grey;
  display: flex;
  align-items: center;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-right: 10px;
`;

const AudioPlayer = styled.div`
  position: relative;
  margin: 20px auto;
`;

const DetailPresenter = ({ postingDetail, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    postingDetail.length > 0 && (
      <Container>
        <ImgContainer>
          <Img bgUrl={postingDetail[0].Album_image} />
        </ImgContainer>
        <AudioPlayer>
          <ReactPlayer
            url={postingDetail[0].Audio}
            width="400px"
            height="50px"
            playing={false}
            controls={true}
          />
        </AudioPlayer>
        <User>
          <Coulmn>
            <Avatar bgUrl={postingDetail[0].image} />
            <Text>
              {postingDetail[0].User_name}
              {postingDetail[0].blue === 1 ? (
                <HiBadgeCheck color="#488dea" style={{ marginLeft: 3 }} />
              ) : (
                ""
              )}
            </Text>
          </Coulmn>
          <Btn>
            <img src={logo} alt="logo" height="36px" />
            전체 보기
          </Btn>
        </User>
        <Title>{postingDetail[0].Title}</Title>
        <Body>{postingDetail[0].Audio_contents}</Body>
        <SubInfo>
          <Badge>
            {formatDistanceToNowStrict(parseISO(postingDetail[0].Date))} ago
          </Badge>
          <Badge>
            <AiOutlineHeart style={{ marginRight: 5 }} color="red" size={25} />
            {postingDetail[0].Likes > 999
              ? `${Math.floor(postingDetail[0].Likes * 0.001)}K`
              : postingDetail[0].Likes}
          </Badge>
          <Badge>
            <AiOutlineEye style={{ marginRight: 5 }} size={25} />
            {postingDetail[0].Views > 999
              ? `${Math.floor(postingDetail[0].Views * 0.001)}K`
              : postingDetail[0].Views}
          </Badge>
        </SubInfo>

        {/* {postingDetail && (
                <DetailPosting
                  key={postingDetail[0].Contents_id}
                  imgUrl={postingDetail[0].Album_image}
                  audio={postingDetail[0].Audio}
                  avatar={postingDetail[0].image}
                  writer={postingDetail[0].User_name}
                  blue={postingDetail[0].blue}
                  title={postingDetail[0].Title}
                  body={postingDetail[0].Audio_contents}
                  view={postingDetail[0].Views}
                  likes={postingDetail[0].Likes}
                  date={postingDetail[0].Date}
                />
              )} */}
      </Container>
    )
  );
};

DetailPresenter.propTypes = {
  postingDetail: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
