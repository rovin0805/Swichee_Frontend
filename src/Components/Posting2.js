import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiBadgeCheck } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiPhotograph } from "react-icons/hi";
import { MdAudiotrack } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

const Post = styled.div`
  background-color: white;
  width: 90%;
  margin: 20px 0;
  border-radius: 10px;
  // box-shadow: rgba(0, 0, 0, 0.2) 2px 5px 8px -2px;
  font-size: 18px;
  color: #383838;
`;

const Header = styled.div`
  padding: 10px 15px 15px 15px;
`;

const HeaderTop = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const HeadrBottom = styled.div`
  margin-top: 13px;
  font-weight: 600;
`;

const Writer = styled.span`
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
  &#sub {
    font-size: 15px;
  }
`;

const ImgContainer = styled.div`
  overflow: hidden;
  max-height: 500px;
  position: relative;
  cursor: pointer;
`;

const Img = styled.img.attrs((props) => ({
  src: props.bgUrl,
}))`
  width: 100%;
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  right: 0.75em;
  top: 0.75em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;

const ActionBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 10px;
`;

const SDate = styled.span`
  font-size: 15px;
`;

const getDate = new Date();

console.log(getDate);

const Posting = ({
  id,
  imageUrl,
  contentsType,
  likes,
  title,
  writer,
  blue,
  view,
  avatar,
  comments,
  date,
}) => (
  <Link to={`/posting/${id}`}>
    <Post>
      <Header>
        <HeaderTop>
          <Badge>
            <FaUserCircle />
            <Writer>
              {writer}
              {blue === 1 ? (
                <HiBadgeCheck color="#488dea" style={{ marginLeft: 1 }} />
              ) : (
                ""
              )}
            </Writer>
          </Badge>
          <Badge>
            <BsThreeDots color="grey" />
          </Badge>
        </HeaderTop>
        <HeadrBottom>
          {title.length > 30
            ? `${title.substring(0, 30).replace(/\.+$/, "")}...`
            : title}
        </HeadrBottom>
      </Header>
      <ImgContainer>
        <Img bgUrl={imageUrl}></Img>
        <Overlay>
          {contentsType === 1 ? <HiPhotograph color="white" /> : ""}
          {contentsType === 2 ? <MdAudiotrack color="white" /> : ""}
          {contentsType === 3 ? <BsFillCameraVideoFill color="white" /> : ""}
          {contentsType === 4 ? <CgFileDocument color="white" /> : ""}
        </Overlay>
      </ImgContainer>
      <ActionBtns>
        <Badge id="sub">
          <AiOutlineHeart style={{ marginRight: 5 }} color="red" size={20} />
          {likes > 999 ? `${Math.floor(likes * 0.001)}K` : likes}
        </Badge>
        <Badge id="sub">
          <AiOutlineEye style={{ marginRight: 5 }} size={20} />
          {view > 999 ? `${Math.floor(view * 0.001)}K` : view}
        </Badge>
        <Badge id="sub">
          <AiOutlineMessage style={{ marginRight: 5 }} size={20} />
          {comments > 999 ? `${Math.floor(comments * 0.001)}K` : comments}
        </Badge>
        <SDate>{date}</SDate>
      </ActionBtns>
    </Post>
  </Link>
);

Posting.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  contentsType: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  blue: PropTypes.number.isRequired,
  view: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  comments: PropTypes.number,
  date: PropTypes.string,
};

export default Posting;
