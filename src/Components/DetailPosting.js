import PropTypes from "prop-types";
import styled from "styled-components";
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

const AudioImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AudioImg = styled.img.attrs((props) => ({
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

const DetailPosting = ({
  type,
  imgUrl,
  audio,
  avatar,
  writer,
  blue,
  title,
  body,
  views,
  likes,
  date,
}) => {
  return (
    <Container>
      <AudioImgContainer>
        <AudioImg bgUrl={imgUrl} />
      </AudioImgContainer>
      <AudioPlayer>
        <ReactPlayer
          url={audio}
          width="400px"
          height="50px"
          playing={false}
          controls={true}
        />
      </AudioPlayer>
      <User>
        <Coulmn>
          <Avatar bgUrl={avatar} />
          <Text>
            {writer}
            {blue === 1 ? (
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
      <Title>{title}</Title>
      <Body>{body}</Body>
      <SubInfo>
        <Badge>{formatDistanceToNowStrict(parseISO(date))} ago</Badge>
        <Badge>
          <AiOutlineHeart style={{ marginRight: 5 }} color="red" size={25} />
          {likes > 999 ? `${Math.floor(likes * 0.001)}K` : likes}
        </Badge>
        <Badge>
          <AiOutlineEye style={{ marginRight: 5 }} size={25} />
          {views > 999 ? `${Math.floor(views * 0.001)}K` : views}
        </Badge>
      </SubInfo>
    </Container>
  );
};

DetailPosting.propTypes = {
  type: PropTypes.number,
  audio: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  blue: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default DetailPosting;
