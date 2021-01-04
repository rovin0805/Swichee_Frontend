import React from "react";
import styled from "styled-components";
import { HiBadgeCheck } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { GrView } from "react-icons/gr";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiPhotograph } from "react-icons/hi";
import { MdAudiotrack } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";

const Container = styled.div`
  display: flex;
  max-width: 450px;
  width: 90vw;
  height: 100px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 5px 8px -2px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 25px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 40%;
`;

const Image = styled.div`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  right: 0.75em;
  top: 0.75em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;

const StrInfo = styled.div`
  width: 60%;
  padding: 20px;
`;

const Title = styled.span`
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: bold;
`;

const SubInfo = styled.div`
  margin-top: 30px;
  font-size: 11px;
  color: grey;
  display: flex;
  align-items: center;
`;

const Badge = styled.div`
  :not(:first-child) {
    padding-left: 10px;
  }
  display: flex;
  align-items: center;
`;

const Thumbnail = ({
  imageUrl,
  contentsType,
  likes,
  title,
  writer,
  blue,
  view,
}) => (
  <Container>
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
    <StrInfo>
      <Title>
        {title.length > 13 ? `${title.substring(0, 13)}...` : title}
      </Title>
      <SubInfo>
        <Badge>
          {writer}
          {blue === 1 ? (
            <HiBadgeCheck color="#488dea" style={{ marginLeft: 1 }} />
          ) : (
            ""
          )}
        </Badge>
        <Badge>
          <FcLike style={{ marginRight: 3 }} />
          {likes > 999 ? `${Math.floor(likes * 0.001)}K` : likes}
        </Badge>
        <Badge>
          <GrView style={{ marginRight: 3 }} />
          {view > 999 ? `${Math.floor(view * 0.001)}K` : view}
        </Badge>
      </SubInfo>
    </StrInfo>
  </Container>
);

export default Thumbnail;
