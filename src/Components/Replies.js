import PropTypes from "prop-types";
import styled from "styled-components";
import { subHours, formatDistanceToNowStrict } from "date-fns";
import { HiBadgeCheck } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoHeartDislikeOutline } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  padding-top: 10px;
`;

const Column = styled.div`
  padding: 5px;
  :last-child {
    width: 100%;
  }
`;

const Avatar = styled.img.attrs((props) => ({
  src: props.bgUrl,
}))`
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;

const Writer = styled.span`
  font-weight: bold;
  margin-right: 10px;
  font-size: 15px;
`;

const Contents = styled.span`
  font-size: 14px;
`;

const ActionBtns = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  color: #525252;
  margin-right: 20px;
  font-size: 15px;
  &#replies {
    cursor: pointer;
  }
`;

const Replies = ({ avatar, writer, blue, contents, likes, hates, date }) => {
  const time = Date.parse(date);
  const koTime = subHours(time, 9);
  return (
    <Container>
      <Column>
        <Avatar bgUrl={avatar} />
      </Column>
      <Column>
        <Writer>
          {writer}
          {blue === 1 && (
            <HiBadgeCheck color="#488dea" style={{ marginLeft: 3 }} />
          )}
        </Writer>
        <Contents>{contents}</Contents>
        <ActionBtns>
          <Badge>
            <AiOutlineHeart style={{ marginRight: 5 }} color="red" size={17} />
            {likes > 999 ? `${Math.floor(likes * 0.001)}K` : likes}
          </Badge>
          <Badge>
            <IoHeartDislikeOutline
              style={{ marginRight: 5 }}
              color="red"
              size={17}
            />
            {hates > 999 ? `${Math.floor(hates * 0.001)}K` : hates}
          </Badge>
          <Badge>{formatDistanceToNowStrict(koTime)} ago</Badge>
        </ActionBtns>
      </Column>
    </Container>
  );
};

Replies.propTypes = {
  avatar: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  blue: PropTypes.number.isRequired,
  contents: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  hates: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default Replies;
