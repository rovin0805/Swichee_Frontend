import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
`;

const ImgContainer = styled.div``;

const Img = styled.div`
  background-image: url(${(props) => props.bgUrl});
`;

const User = styled.div``;

const Title = styled.div``;

const Body = styled.div``;

const DetailPosting = (
  imgUrl,
  audio,
  avatar,
  writer,
  blue,
  title,
  body,
  view,
  likes,
  date
) => (
  <Container>
    {console.log("aaa", writer)}
    {/* <ImgContainer>
      <Img bgUrl={imgUrl} />
    </ImgContainer>
    <User>{writer}</User>
    <Title>{title}</Title>
    <Body>{body}</Body> */}
  </Container>
);

export default DetailPosting;
