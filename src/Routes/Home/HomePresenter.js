import PropTypes from "prop-types";
import styled from "styled-components";
import { AiOutlineFieldTime } from "react-icons/ai";
import HomePosting from "Components/HomePosting";
import Trending from "Components/Trending";
import Sidebar from "Components/Sidebar";
import Loader from "Components/Loader";
import Message from "Components/Message";

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

const HomePresenter = ({ thumbnails, infinite, loading, error }) => {
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
              {error ? (
                error && <Message color="#D3D3D3" text={error} />
              ) : (
                <>
                  <PostContainer>
                    {thumbnails?.length &&
                      thumbnails.map((thumbnail, index) => (
                        <HomePosting
                          key={`post-${index}`}
                          id={thumbnail.Contents_id}
                          category={thumbnail.Category}
                          imageUrl={thumbnail.Thumbnail}
                          avatar={thumbnail.image}
                          contentsType={thumbnail.type_id}
                          title={thumbnail.Title}
                          writer={thumbnail.User_name}
                          blue={thumbnail.blue}
                          likes={thumbnail.Likes}
                          views={thumbnail.Views}
                          comments={thumbnail["count(Contents.Contents_id)"]}
                          date={thumbnail.Date}
                        />
                      ))}
                    {infinite?.length &&
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
                          comments={infi["count(Contents.Contents_id)"]}
                          date={infi.Date}
                        />
                      ))}
                  </PostContainer>
                  <Sidebar />
                </>
              )}
            </MainContent>
          </div>
        </Container>
      )}
    </>
  );
};

HomePresenter.propTypes = {
  thumbnails: PropTypes.array,
  infinite: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
