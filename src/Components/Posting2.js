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
  &#sub {
    font-size: 15px;
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
  <Post>
    <Link to={`/posting?id=${id}&type_id=${contentsType}`}>
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
          {contentsType === 1 ? <HiPhotograph color="white" size={25} /> : ""}
          {contentsType === 2 ? <MdAudiotrack color="white" size={25} /> : ""}
          {contentsType === 3 ? (
            <BsFillCameraVideoFill color="white" size={25} />
          ) : (
            ""
          )}
          {contentsType === 4 ? <CgFileDocument color="white" size={25} /> : ""}
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
    </Link>
  </Post>
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
