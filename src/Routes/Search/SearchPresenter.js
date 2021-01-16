import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import { Posts, People } from "Components/SearchPosting";
import { BiSearchAlt } from "react-icons/bi";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  margin: 50px 0 30px 0;
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  all: unset;
  font-size: 25px;
  width: 100%;
  border: 2px solid #ff9900;
  border-radius: 20px;
  padding: 5px;
  padding-left: 15px;
`;

const BtnWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Btn = styled.button`
  width: 80px;
  height: 50px;
  margin-right: 10px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  background-color: white;
  color: grey;
  overflow: hidden;
  &:hover {
    color: #ff9900;
  }
  &:focus {
    outline: none;
    color: #ff9900;
  }
`;

const ResultsNum = styled.div`
  margin: auto;
  font-size: 20px;
  font-weight: bold;
  color: #525252;
  span {
    padding: 0 5px;
  }
`;

const Grid = styled.div`
  grid-template-columns: repeat(2, 1fr);
  margin-left: 10px;
  margin-right: 10px;
  @media only screen and (min-width: 520px) and (max-width: 599px) {
    display: inline-grid;
  }
  @media only screen and (min-width: 600px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) {
    display: inline-grid;
  }
`;

const PersonGrid = styled.div`
  grid-template-columns: repeat(2, 1fr);
  margin-left: 10px;
  margin-right: 10px;
  @media only screen and (max-width: 519px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (min-width: 520px) and (max-width: 599px) {
    display: grid;
    justify-content: space-evenly;
    margin-left: 10%;
    margin-right: 10%;
  }
  @media only screen and (min-width: 600px) and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    justify-content: space-evenly;
    margin-left: 13%;
  }
`;

const Subject = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #ff9900;
  margin: 20px 0;
  margin-left: 20px;
  @media only screen and (max-width: 520px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (min-width: 600px) and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const SearchPresenter = ({
  typeId,
  people,
  posts,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm,
  passTypeNum,
}) => {
  const getBtnValue = (e) => {
    const value = e.target.value;
    const intVal = parseInt(value);
    passTypeNum(intVal);
  };

  let postsNum = 0;
  let pplNum = 0;
  if (posts) postsNum = posts.length;
  if (people) pplNum = people.length;

  const totalResults = postsNum + pplNum;

  return (
    <>
      <Helmet>
        <title>Search | Swichee</title>
      </Helmet>
      <Container>
        <Form onSubmit={handleSubmit}>
          <SearchBar>
            <BiSearchAlt style={{ marginRight: 5 }} size={45} />
            <Input
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={updateTerm}
            ></Input>
          </SearchBar>
          <BtnWrapper>
            <Btn value="6" onClick={getBtnValue}>
              All
            </Btn>
            <Btn value="5" onClick={getBtnValue}>
              People
            </Btn>
            <Btn value="1" onClick={getBtnValue}>
              Photo
            </Btn>
            <Btn value="2" onClick={getBtnValue}>
              Audio
            </Btn>
            <Btn value="3" onClick={getBtnValue}>
              Video
            </Btn>
            <Btn value="4" onClick={getBtnValue}>
              Blog
            </Btn>
          </BtnWrapper>
        </Form>
        {loading ? (
          <Loader />
        ) : (
          <>
            {(people?.length > 0 || posts?.length > 0) && (
              <ResultsNum>
                Total
                <span style={{ color: "#ff9900" }}>{totalResults}</span>
                {`Result${totalResults === 1 ? "" : "s"} ${
                  totalResults === 1 ? "was" : "were"
                } found`}
              </ResultsNum>
            )}
            {people?.length > 0 && (
              <>
                <Subject>Users Results : {people.length}</Subject>
                <PersonGrid>
                  {people.map((person, index) => (
                    <People
                      key={index}
                      avatar={person.image}
                      writer={person.User_name}
                      blue={person.Blue}
                      nickname={person.Nickname}
                    />
                  ))}
                </PersonGrid>
              </>
            )}
            {posts?.length > 0 && (
              <>
                <Subject>Posts Results : {posts.length}</Subject>
                <Grid>
                  {posts.map((post, index) => (
                    <Posts
                      key={index}
                      id={post.Contents_id}
                      thumbnail={post.Thumbnail}
                      title={post.Title}
                      avatar={post.image}
                      writer={post.User_name}
                      blue={post.Blue}
                      likes={post.Likes}
                      views={post.Views}
                      date={post.Date}
                      typeId={post.type_id}
                      category={post.Category}
                    />
                  ))}
                </Grid>
              </>
            )}
            {error && <Message color="#D3D3D3" text={error} />}
            {people?.length === 0 && (
              <Message text="Users Nothing found" color="#95a5a6" />
            )}
            {posts?.length === 0 && (
              <Message text="Posts Nothing found" color="#95a5a6" />
            )}
          </>
        )}
      </Container>
    </>
  );
};

SearchPresenter.propTypes = {
  typeId: PropTypes.number.isRequired,
  people: PropTypes.array,
  posts: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
  passTypeNum: PropTypes.func.isRequired,
};

export default SearchPresenter;
