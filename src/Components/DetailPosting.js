import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Comments from "Components/Comments";
import { HiBadgeCheck } from "react-icons/hi";
import logo from "Assets/logo.png";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import parseISO from "date-fns/parseISO";
import ReactPlayer from "react-player";
import ReactStoreBadges from "react-store-badges";
import "./Modal.css";
import Slider from "Components/Slider";

const Container = styled.div`
  margin: 30px;
`;

const SliderWrapper = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img.attrs((props) => ({
  src: props.bgUrl,
}))`
  &#audio {
    width: 300px;
    height: 300px;
    border-radius: 20px;
  }
  &#blog {
    width: 100%;
    max-height: 300px;
  }
`;

const PlayerWrapper = styled.div`
  position: relative;
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
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
  line-height: 1.5;
`;

const Coulmn = styled.div`
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  cursor: pointer;
  outline: none;
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

const CommentsTitle = styled.div`
  border-top: 0.5px solid #d3d3d3;
  padding-top: 15px;
  font-weight: bold;
  font-size: 15px;
  color: #525252;
  margin: 17px 0 10px 0;
`;

class DetailPosting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block: "none",
      flag: true,
    };
    this.handleBlock = this.handleBlock.bind(this);
  }

  handleBlock() {
    const currentFlag = this.state.flag;
    this.setState({ flag: !currentFlag });
    if (this.state.flag === true) {
      this.setState({ block: "block" });
    } else this.setState({ block: "none" });
  }

  render() {
    const {
      type,
      photoImg,
      audioImg,
      audio,
      video,
      blogImg,
      avatar,
      writer,
      blue,
      title,
      body,
      views,
      likes,
      date,
      comments,
    } = this.props;
    let photoArr = [];
    if (type === 1) photoArr = photoImg.split(",");
    return (
      <Container>
        {type === 1 && (
          <SliderWrapper>
            <Slider photoArr={photoArr} />
          </SliderWrapper>
        )}
        {type === 2 && (
          <>
            <ImgWrapper id="audio">
              <Img bgUrl={audioImg} id="audio" />
            </ImgWrapper>
            <PlayerWrapper>
              <ReactPlayer
                url={audio}
                width="400px"
                height="50px"
                playing={false}
                controls={true}
                style={{ outline: "none" }}
              />
            </PlayerWrapper>
          </>
        )}
        {type === 3 && (
          <PlayerWrapper>
            <ReactPlayer
              url={video}
              playing={false}
              controls={true}
              style={{ outline: "none" }}
            />
          </PlayerWrapper>
        )}
        {type === 4 && (
          <ImgWrapper id="blog">
            <Img bgUrl={blogImg} id="blog" />
          </ImgWrapper>
        )}
        <User>
          <Coulmn>
            <Avatar bgUrl={avatar} />
            <Text>
              {writer}
              {blue === 1 && (
                <HiBadgeCheck color="#488dea" style={{ marginLeft: 3 }} />
              )}
            </Text>
          </Coulmn>
          <a href="#open-modal">
            <Btn>
              <img src={logo} alt="logo" height="36px" />
              전체 보기
            </Btn>
          </a>
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
            {views > 999 ? `${Math.floor((views + 1) * 0.001)}K` : views + 1}
          </Badge>
        </SubInfo>
        <CommentsTitle>
          <span style={{ cursor: "pointer" }} onClick={this.handleBlock}>
            View All {comments.length} Comments
          </span>
        </CommentsTitle>
        <div style={{ display: this.state.block }}>
          {comments?.length > 0 &&
            comments.map((comment, index) => (
              <Comments
                key={`comment-${index}`}
                commentId={comment.Comment_id}
                contentsId={comment.Contents_id}
                avatar={comment.image}
                writer={comment.User_name}
                blue={comment.Blue}
                contents={comment.contents}
                likes={comment.Likes}
                hates={comment.Hate}
                date={comment.Date}
              />
            ))}
        </div>
        <div id="open-modal" className="modal-window">
          <Badge>
            <a href="#" title="Close" className="modal-close">
              Close
            </a>
            <Badge style={{ marginRight: 5 }}>
              <ReactStoreBadges
                platform={"ios"}
                url={"https://apps.apple.com/au/app/id1472654007"}
                locale={"ko-kr"}
              />
              <ReactStoreBadges
                platform={"android"}
                url={
                  "https://play.google.com/store/apps/details?id=com.swichee.swichee&hl=ko&gl=US"
                }
                locale={"ko-kr"}
              />
            </Badge>
          </Badge>
        </div>
      </Container>
    );
  }
}

DetailPosting.propTypes = {
  type: PropTypes.number.isRequired,
  photoImg: PropTypes.string,
  audioImg: PropTypes.string,
  audio: PropTypes.string,
  video: PropTypes.string,
  blogImg: PropTypes.string,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  blue: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.array,
};

export default DetailPosting;
