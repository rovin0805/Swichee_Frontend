import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { subHours, formatDistanceToNowStrict } from "date-fns";
import { HiBadgeCheck } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiPhotograph } from "react-icons/hi";
import { MdAudiotrack } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";

const Container = styled.div`
  width: 250px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 5px 8px -2px;
  margin-bottom: 30px;
  cursor: pointer;
  background-color: white;
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (min-width: 600px) {
    width: 350px;
    height: 300px;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  max-width: 100%;
  max-height: 57%;
  position: relative;
  display: flex;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Image = styled.img.attrs((props) => ({
  src: props.bgUrl,
}))`
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;

const StrInfo = styled.div`
  padding: 20px;
  @media only screen and (max-width: 599px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #383838;
`;

const Avatar = styled.img.attrs((props) => ({
  src: props.bgUrl,
}))`
  border-radius: 50px;
  margin-right: 10px;
  &#posts {
    width: 35px;
    height: 35px;
  }
  &#people {
    width: 60px;
    height: 60px;
  }
`;

const Badge = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  @media only screen and (max-width: 599px) {
    display: none;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-weight: bold;
`;

const SubInfo = styled.div`
  color: grey;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Posts = ({
  id,
  thumbnail,
  title,
  writer,
  views,
  typeId,
  avatar,
  blue,
  likes,
  date,
  category,
}) => {
  const time = Date.parse(date);
  const koTime = subHours(time, 9);
  return (
    <Link to={`/posting?id=${id}&type_id=${typeId}&category=${category}`}>
      <Container>
        <ImageContainer>
          <Image bgUrl={thumbnail} />
          <Overlay>
            {typeId === 1 && <HiPhotograph color="white" size={20} />}
            {typeId === 2 && <MdAudiotrack color="white" size={20} />}
            {typeId === 3 && <BsFillCameraVideoFill color="white" size={20} />}
            {typeId === 4 && <CgFileDocument color="white" size={20} />}
          </Overlay>
        </ImageContainer>
        <StrInfo>
          <Title>
            {title.length > 20
              ? `${title.substring(0, 30).replace(/\.+$/, "")}...`
              : title}
          </Title>
          <User>
            <Avatar bgUrl={avatar} id="posts" />
            <Badge>
              {writer}
              {blue === 1 && (
                <HiBadgeCheck
                  color="#488dea"
                  style={{ marginLeft: 1 }}
                  size={20}
                />
              )}
            </Badge>
          </User>
          <SubInfo>
            <Badge>
              <AiOutlineHeart
                color="red"
                style={{ marginRight: 3 }}
                size={20}
              />
              {likes > 999 ? `${Math.floor(likes * 0.001)}K` : likes}
            </Badge>
            <Badge>
              <AiOutlineEye style={{ marginRight: 3 }} size={20} />
              {views > 999 ? `${Math.floor(views * 0.001)}K` : views}
            </Badge>
            <Badge>{formatDistanceToNowStrict(koTime)} ago</Badge>
          </SubInfo>
        </StrInfo>
      </Container>
    </Link>
  );
};

Posts.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  typeId: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  blue: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

const Card = styled.div`
  width: 250px;
  height: 100px;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 5px 8px -2px;
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const StrTop = styled.div`
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: bold;
`;

const StrBottom = styled.div`
  color: grey;
  font-size: 16px;
  margin-top: 10px;
`;

export const People = ({ avatar, writer, blue, nickname }) => (
  <Card>
    <Avatar bgUrl={avatar} id="people" />
    <div>
      <StrTop>
        {writer}
        {blue === 1 && (
          <HiBadgeCheck color="#488dea" style={{ marginLeft: 3 }} />
        )}
      </StrTop>
      <StrBottom>{nickname}</StrBottom>
    </div>
  </Card>
);

People.propTypes = {
  avatar: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  blue: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired,
};
