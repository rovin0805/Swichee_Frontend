import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HiBadgeCheck } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiPhotograph } from "react-icons/hi";
import { MdAudiotrack } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { BsChatSquareDots } from "react-icons/bs";

const postSizes = {
  container: "400px",
  userInfo: "10%",
  title: "10%",
  imageContainer: "68%",
  subInfo: "12%",
};

const Container = styled.div`
  max-width: 450px;
  width: 90%;
  height: ${postSizes.container};
  border-radius: 10px;
  // box-shadow: rgba(0, 0, 0, 0.2) 2px 5px 8px -2px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
`;

const UserInfo = styled.div`
  height: ${postSizes.userInfo};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Title = styled.div`
  height: ${postSizes.title};
  padding: 10px 20px;
  font-weight: bold;
  font-size: 15px;
`;

const ImageContainer = styled.div`
  height: ${postSizes.imageContainer};
  background-color: #cccccc;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  /* background-size: cover;*/
  background-position: center center;
  position: relative;
  background-repeat: no-repeat;
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

const SubInfo = styled.div`
  height: ${postSizes.subInfo};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  font-size: 35px;
  cursor: pointer;
  &#sub {
    font-size: 15px;
  }
`;

const Writer = styled.span`
  font-size: 30px;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const Date = styled.span`
  font-size: 15px;
`;

const Posting = ({
  id,
  imageUrl,
  contentsType,
  likes,
  title,
  writer,
  blue,
  view,
}) => (
  <Container>
    <UserInfo>
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
    </UserInfo>
    <Title>
      {title.length > 30
        ? `${title.substring(0, 30).replace(/\.+$/, "")}...`
        : title}
    </Title>
    <ImageContainer>
      <Image bgUrl={imageUrl}>
        <Overlay>
          {contentsType === 1 ? <HiPhotograph color="white" /> : ""}
          {contentsType === 2 ? <MdAudiotrack color="white" /> : ""}
          {contentsType === 3 ? <BsFillCameraVideoFill color="white" /> : ""}
          {contentsType === 4 ? <CgFileDocument color="white" /> : ""}
        </Overlay>
      </Image>
    </ImageContainer>
    <SubInfo>
      <Badge id="sub">
        <AiOutlineHeart style={{ marginRight: 5 }} color="red" size={20} />
        {likes > 999 ? `${Math.floor(likes * 0.001)}K` : likes}
      </Badge>
      <Badge id="sub">
        <GrView style={{ marginRight: 5 }} size={18} />
        {view > 999 ? `${Math.floor(view * 0.001)}K` : view}
      </Badge>
      <Badge id="sub">
        <BsChatSquareDots style={{ marginRight: 5 }} size={18} />
        123
      </Badge>
      <Date>12일전</Date>
    </SubInfo>
  </Container>
);

Posting.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  contentsType: PropTypes.string,
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  blue: PropTypes.number,
  view: PropTypes.number,
};

export default Posting;
