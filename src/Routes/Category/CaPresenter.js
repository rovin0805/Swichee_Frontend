import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import HomePosting from "Components/HomePosting";
import Sidebar from "Components/Sidebar";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
`;

const MainTitle = styled.div`
  color: #ff9900;
  margin-top: 40px;
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const PostContainer = styled.div`
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
`;

const Background = styled.img.attrs((props) => ({
  src: props.bgUrl,
}))`
  margin-top: 50px;
  width: 100%;
  max-height: 100px;
  overflow: hidden;
`;

const CaPresenter = ({ categories, theme, loading, error, updateContainer }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Swichee</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{theme} | Swichee</title>
      </Helmet>
      {/* <Background
        bgUrl={
          require(`Assets/${theme.match(/(^\w+)&?/i)[1].toLowerCase()}.jpg`)
            .default
        }
      /> */}
      <div>
        <MainTitle>{theme.replace("&", " & ")}</MainTitle>
        <MainContent>
          {error ? (
            error && <Message color="#D3D3D3" text={error} />
          ) : (
            <>
              <PostContainer>
                {categories?.length > 0 ? (
                  categories.map((ca, index) => (
                    <HomePosting
                      key={`post-${index}`}
                      id={ca.Contents_id}
                      category={ca.Category}
                      imageUrl={ca.Thumbnail}
                      avatar={ca.image}
                      contentsType={ca.type_id}
                      title={ca.Title}
                      writer={ca.User_name}
                      nickname={ca.Nickname}
                      blue={ca.blue}
                      likes={ca.Likes}
                      views={ca.Views}
                      comments={ca.comment_count}
                      date={ca.Date}
                    />
                  ))
                ) : (
                  <Message color="#D3D3D3" text={"No contents"} />
                )}
                {/* {infinite?.length > 0 &&
                  infinite.map((infi, index) => (
                    <HomePosting
                      key={`post-${index}`}
                      id={infi.Contents_id}
                      category={infi.Category}
                      imageUrl={infi.Thumbnail}
                      avatar={infi.image}
                      contentsType={infi.type_id}
                      title={infi.Title}
                      writer={infi.User_name}
                      blue={infi.blue}
                      likes={infi.Likes}
                      views={infi.Views}
                      comments={infi.comment_count}
                      date={infi.Date}
                    />
                  ))} */}
              </PostContainer>
              <Sidebar updateContainer={updateContainer} />
            </>
          )}
        </MainContent>
      </div>
    </Container>
  );

CaPresenter.propTypes = {
  categories: PropTypes.array.isRequired,
  theme: PropTypes.string,
  // infinite: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CaPresenter;
