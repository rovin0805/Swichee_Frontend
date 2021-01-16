import React, { Component } from "react";
import Comments from "Components/Comments";
import Slider from "Components/Slider";
import Recommend from "Components/Recommend";
import Modal from "Components/Modal";
import logo from "Assets/logo.png";
import PropTypes from "prop-types";
import styled from "styled-components";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import parseISO from "date-fns/parseISO";
import ReactPlayer from "react-player";
import { HiBadgeCheck } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { IoOptionsOutline } from "react-icons/io5";

const Container = styled.div`
  margin: 30px;
`;

const SliderWrapper = styled.div`
  width: 80%;
  height: 80%;
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

const Writer = styled.span`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Nickname = styled.div`
  color: grey;
  font-size: 15px;
  margin-top: 5px;
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 23px;
  font-weight: bold;
  color: #525252;
  &#recommend {
    font-size: 18px;
    margin-top: 0px;
  }
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
  margin-right: 20px;
`;

const DropDown = styled.div`
  margin-top: 5px;
  position: relative;
  display: inline-block;
`;

const DropBtn = styled.button`
  background-color: white;
  font-size: 15px;
  color: grey;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const DropDownItem = styled.div`
  position: absolute;
  background-color: #f1f1f1;
  min-width: 150px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  span {
    font-size: 16px;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  span:not(:first-child):hover {
    background-color: #ddd;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const CommentsTitle = styled.div`
  border-top: 0.5px solid #d3d3d3;
  padding-top: 15px;
  font-weight: bold;
  font-size: 15px;
  color: #525252;
  margin: 17px 0 10px 0;
`;

const RecommendWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 30px;
  padding-bottom: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

class DetailPosting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CommentsBlock: "none",
      CommentsFlag: true,
      OptionBlock: "none",
      OptionFlag: true,
    };
    this.handleCommentsBlock = this.handleCommentsBlock.bind(this);
    this.handleOptionBlock = this.handleOptionBlock.bind(this);
  }

  handleCommentsBlock() {
    const currentFlag = this.state.CommentsFlag;
    this.setState({ CommentsFlag: !currentFlag });
    if (this.state.CommentsFlag === true) {
      this.setState({ CommentsBlock: "block" });
    } else this.setState({ CommentsBlock: "none" });
  }

  handleOptionBlock() {
    const currentFlag = this.state.OptionFlag;
    this.setState({ OptionFlag: !currentFlag });
    if (this.state.OptionFlag === true) {
      this.setState({ OptionBlock: "block" });
    } else this.setState({ OptionBlock: "none" });
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
      nickname,
      blue,
      title,
      body,
      views,
      likes,
      date,
      commentsCount,
      comments,
      recommend,
      updateContainer,
    } = this.props;
    return (
      <>
        <Container>
          {type === 1 && (
            <SliderWrapper>
              <Slider photoArr={photoImg} />
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
                />
              </PlayerWrapper>
            </>
          )}
          {type === 3 && (
            <PlayerWrapper>
              <ReactPlayer url={video} playing={false} controls={true} />
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
              <div>
                <Writer>
                  {writer}
                  {blue === 1 && (
                    <HiBadgeCheck color="#488dea" style={{ marginLeft: 3 }} />
                  )}
                </Writer>
                <Nickname>{nickname}</Nickname>
              </div>
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
              <AiOutlineHeart
                style={{ marginRight: 5 }}
                color="red"
                size={25}
              />
              {likes > 999 ? `${Math.floor(likes * 0.001)}K` : likes}
            </Badge>
            <Badge>
              <AiOutlineEye style={{ marginRight: 5 }} size={25} />
              {views > 999 ? `${Math.floor((views + 1) * 0.001)}K` : views + 1}
            </Badge>
            <DropDown onClick={this.handleOptionBlock}>
              <DropBtn>
                <IoOptionsOutline size={25} />
              </DropBtn>
              <DropDownItem style={{ display: this.state.OptionBlock }}>
                <span>컨텐츠 옵션</span>
                <span>링크 복사</span>
                <span>신고</span>
              </DropDownItem>
            </DropDown>
          </SubInfo>
          <CommentsTitle>
            <span
              style={{ cursor: "pointer" }}
              onClick={this.handleCommentsBlock}
            >
              View All {commentsCount} Comments
            </span>
          </CommentsTitle>
          <div style={{ display: this.state.CommentsBlock }}>
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
                  recommentsCount={comment.recomment}
                />
              ))}
          </div>
          <Modal />
        </Container>
        <RecommendWrapper>
          <Title id="recommend">Recommended For You</Title>
          {recommend?.length > 0 &&
            recommend.map((item, index) => (
              <Recommend
                key={`recommend-${index}`}
                contentsId={item.Contents_id}
                typeId={item.type_id}
                category={item.Category}
                thumbnail={item.Thumbnail}
                title={item.Title}
                avatar={item.image}
                writer={item.User_name}
                blue={item.Blue}
                likes={item.Likes}
                views={item.Views}
                date={item.Date}
                updateContainer={updateContainer}
              />
            ))}
        </RecommendWrapper>
      </>
    );
  }
}

DetailPosting.propTypes = {
  type: PropTypes.number.isRequired,
  // photoImg: PropTypes.string,
  audioImg: PropTypes.string,
  audio: PropTypes.string,
  video: PropTypes.string,
  blogImg: PropTypes.string,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  blue: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  commentsCount: PropTypes.number.isRequired,
  comments: PropTypes.array,
  recommend: PropTypes.array,
  updateContainer: PropTypes.func.isRequired,
};

export default DetailPosting;
