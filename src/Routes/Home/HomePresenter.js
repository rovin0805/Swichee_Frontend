import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaHotjar } from "react-icons/fa";
import HomePosting from "Components/HomePosting";
import Trendings from "Components/Trendings";
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
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #ff9900;
  &#trending {
    color: #ff7675;
  }
`;

const PostContainer = styled.div`
  width: 100%;
`;

const HomePresenter = ({ thumbnails, infinite, trendings, loading, error }) => {
  return (
    <>
      <Helmet>
        <title>Swichee</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <MainTitle id="trending">
            <FaHotjar style={{ marginRight: 5 }} color="#ff7675" size={20} />
            Trending Posts
          </MainTitle>
          {error ? (
            error && <Message color="#D3D3D3" text={error} />
          ) : (
            <Trendings trendings={trendings} />
          )}
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
                          nickname={thumbnail.Nickname}
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
                          nickname={infi.Nickname}
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
