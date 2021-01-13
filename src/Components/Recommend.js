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
  display: flex;
  height: 150px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 5px 8px -2px;
  margin: 20px 0;
  cursor: pointer;
  background-color: white;
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  max-width: 40%;
  max-height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Image = styled.img.attrs((props) => ({
  src: props.bgUrl,
}))`
  width: 100%;
  height: 100%;
`;

// const Image = styled.div`
//   border-top-left-radius: 10px;
//   border-bottom-left-radius: 10px;
//   width: 100%;
//   height: 100%;
//   background-image: url(${(props) => props.bgUrl});
//   background-size: cover;
//   background-position: center center;
//   position: relative;
// `;

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

const StrInfo = styled.div`
  padding: 30px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #383838;
`;

const SubInfo = styled.div`
  margin-top: 50px;
  color: grey;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img.attrs((props) => ({
  src: props.bgUrl,
}))`
  border-radius: 50px;
  width: 35px;
  height: 35px;
  margin-right: 5px;
`;

const Badge = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const Recommend = ({
  contentsId,
  typeId,
  category,
  thumbnail,
  title,
  avatar,
  writer,
  blue,
  likes,
  views,
  date,
  updateContainer,
}) => {
  const time = Date.parse(date);
  const koTime = subHours(time, 9);
  return (
    <Link
      to={`/posting?id=${contentsId}&type_id=${typeId}&category=${category}`}
      onClick={() => updateContainer()}
    >
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
          <SubInfo>
            <Avatar bgUrl={avatar} />
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

Recommend.propTypes = {
  contentsId: PropTypes.number.isRequired,
  typeId: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  blue: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  updateContainer: PropTypes.func.isRequired,
};

export default Recommend;
