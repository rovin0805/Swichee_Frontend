import PropTypes from "prop-types";
import styled from "styled-components";
import { AiOutlineFieldTime } from "react-icons/ai";
import Posting2 from "Components/Posting2";
import Trending from "Components/Trending";
import Sidebar from "Components/Sidebar";
import Loader from "Components/Loader";

const Container = styled.div`
  width: 800px;
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
  font-weight: bold;
  font-size: 17px;
  display: flex;
  align-items: center;
`;

const PostContainer = styled.div`
  width: 100%;
`;

const HomePresenter = ({ thumbnails, loading, error }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Trending thumbnails={thumbnails} />
          <div>
            <MainTitle>
              <AiOutlineFieldTime
                style={{ marginRight: 5 }}
                color="#ff9900"
                size={25}
              />
              Recent Posts
            </MainTitle>
            <MainContent>
              <PostContainer>
                {thumbnails &&
                  thumbnails.map((thumbnail) => (
                    <Posting2
                      key={thumbnail.Contents_id}
                      id={thumbnail.Contents_id}
                      imageUrl={thumbnail.Thumbnail}
                      avatar={thumbnail.image}
                      contentsType={thumbnail.type_id}
                      title={thumbnail.Title}
                      writer={thumbnail.User_name}
                      blue={thumbnail.blue}
                      likes={thumbnail.Likes}
                      view={thumbnail.Views}
                      comments={thumbnail["count(Contents.Contents_id)"]}
                      date={thumbnail.Date}
                    />
                  ))}
              </PostContainer>
              <Sidebar />
            </MainContent>
          </div>
        </Container>
      )}
    </>
  );
};

HomePresenter.propTypes = {
  thumbnails: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
