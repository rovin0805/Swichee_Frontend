import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import parseISO from "date-fns/parseISO";
import { HiBadgeCheck } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiPhotograph } from "react-icons/hi";
import { MdAudiotrack } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

const Post = styled.div`
  background-color: white;
  width: 90%;
  margin: 20px 0;
  border-radius: 35px;
  // box-shadow: rgba(0, 0, 0, 0.2) 2px 5px 8px -2px;
  font-size: 18px;
  color: #383838;
`;

const Header = styled.div`
  /* padding: 10px 15px 15px 15px; */
  padding: 15px 47px;
`;

const HeaderTop = styled.div`
  margin: 10px 0 18px 0;
  display: flex;
  justify-content: space-between;
`;

const HeadrBottom = styled.div`
  font-weight: 600;
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
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: "Noto Sans KR";
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  font-size: 35px;
  &.sub {
    font-size: 15px;
  }
  &#comments {
    cursor: pointer;
  }
`;

const ImgContainer = styled.div`
  /* overflow: hidden;
  max-height: 500px; */
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Img = styled.img.attrs((props) => ({
  src: props.bgUrl,
}))`
  width: 450px; //fixed
  height: 450px; //fixed
  border-radius: 35px;
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  right: 70px;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;

const ActionBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 10px;
`;

const SDate = styled.span`
  font-size: 15px;
`;

const HomePosting = ({
  id,
  category,
  imageUrl,
  contentsType,
  likes,
  title,
  writer,
  blue,
  views,
  avatar,
  comments,
  date,
}) => {
  const time = parseISO(date);
  return (
    <Post>
      <Header>
        <HeaderTop>
          <Badge>
            <Avatar bgUrl={avatar} />
            <Writer>
              {writer}
              {blue === 1 ? (
                <HiBadgeCheck color="#488dea" style={{ marginLeft: 3 }} />
              ) : (
                ""
              )}
            </Writer>
          </Badge>
          <Badge>
            <BsThreeDots color="grey" />
          </Badge>
        </HeaderTop>
        <Link to={`/posting?id=${id}&type_id=${contentsType}`}>
          <HeadrBottom>
            {title.length > 30
              ? `${title.substring(0, 30).replace(/\.+$/, "")}...`
              : title}
          </HeadrBottom>
        </Link>
      </Header>
      <ImgContainer>
        <Link
          to={`/posting?id=${id}&type_id=${contentsType}&category=${category}`}
        >
          <Img bgUrl={imageUrl}></Img>
          <Overlay>
            {contentsType === 1 ? <HiPhotograph color="white" size={25} /> : ""}
            {contentsType === 2 ? <MdAudiotrack color="white" size={25} /> : ""}
            {contentsType === 3 ? (
              <BsFillCameraVideoFill color="white" size={25} />
            ) : (
              ""
            )}
            {contentsType === 4 ? (
              <CgFileDocument color="white" size={25} />
            ) : (
              ""
            )}
          </Overlay>
        </Link>
      </ImgContainer>
      <ActionBtns>
        <Badge className="sub">
          <AiOutlineHeart style={{ marginRight: 5 }} color="red" size={25} />
          {likes > 999 ? `${Math.floor(likes * 0.001)}K` : likes}
        </Badge>
        <Badge className="sub">
          <AiOutlineEye style={{ marginRight: 5 }} size={25} />
          {views > 999 ? `${Math.floor(views * 0.001)}K` : views}
        </Badge>
        <Link to={`/posting?id=${id}&type_id=${contentsType}`}>
          <Badge id="comments" className="sub">
            <AiOutlineMessage style={{ marginRight: 5 }} size={25} />
            {comments > 999 ? `${Math.floor(comments * 0.001)}K` : comments}
          </Badge>
        </Link>
        <SDate>{formatDistanceToNowStrict(time)} ago</SDate>
      </ActionBtns>
    </Post>
  );
};

HomePosting.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  contentsType: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  blue: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default HomePosting;
