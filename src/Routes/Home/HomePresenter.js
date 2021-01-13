import PropTypes from "prop-types";
import styled from "styled-components";
import { AiOutlineFieldTime } from "react-icons/ai";
import HomePosting from "Components/HomePosting";
import Trendings from "Components/Trendings";
import Sidebar from "Components/Sidebar";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    width: 100vw;
  }
  @media only screen and (min-width: 1201px) {
    width:1200px;
  }
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
  @media only screen and (max-width: 767px) {
    align-items: center;
    padding-right : 50px;
    padding-left : 10px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
    padding-right : 50px;
    padding-left : 10px;
  }
  @media only screen and (min-width: 1025px) {
    align-items: center;
    padding-right : 100px;
    padding-left : 100px;
  }
`;

const PostContainer = styled.div`
  width: 760px;
  padding: 20px;
  @media only screen and (min-width: 1025px) {
    width:50vw;
  }
`;

const HomePresenter = ({ thumbnails, infinite, trendings, loading, error }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Trendings thumbnails={thumbnails} />
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
                    {thumbnails?.length > 0 &&
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
                          comments={thumbnail.comment_count}
                          date={thumbnail.Date}
                        />
                      ))}
                    {infinite?.length > 0 &&
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
  thumbnails: PropTypes.array.isRequired,
  infinite: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
