import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
// import nob from "Assets/nob.png";
// import nob2 from "Assets/nob2.png";
// import logo from "Assets/swichee.png";
// import poh from "Assets/poh.png";
// import logo2 from "Assets/logo.png";

const SideImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxContent = styled.div`
  font-size: 15px;
  color: gray;
  width: 100vw;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  line-height: 150%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  position: relative;
  padding: 0px 0px 0px 0px;
`;

const Content = styled.div`
  width: 100vw;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  line-height: 150%;
`;

const Letter1 = styled.div`
  font-size: 15px;
  color: gray;
  margin: 10px 10px 10px 10px;
`;
const Letter2 = styled.div`
  font-size: 15px;
  color: black;
  margin: 10px 10px 10px 10px;
`;

const MainTitle = styled.div`
  width: 100%;
  background: linear-gradient(
    to bottom,
    #ff9900,
    #ff9900,
    #ff9900,
    #ff9900,
    #ff9900,
    #ff9900,
    #ff9900,
    #ff9900,
    white
  );
  color: white;
  padding: 100px 0px 10px 0px;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  @media only screen and (min-width: 508px) {
  }
  @media only screen and (max-width: 699px) {
  }
  @media only screen and (min-width: 700px) and (max-width: 849px) {
  }
  @media only screen and (min-width: 850px) and (max-width: 1200px) {
  }
`;

const Main = styled.div`
  width: 100%;
  background: white;
  color: black;
  padding: 50px 0px 0px 0px;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  margin-bottom: 30px;
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
  @media only screen and (min-width: 1025px) {
  }
`;

const Logo = styled.div`
  border-radius: 30%;
  overflow: hidden;
  margin: 0px 0px 0px 5px;
`;

const CompanyPresenter = ({ loading, error }) => {
  return (
    <>
      <Helmet>
        <title>Swichee</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div>
            <MainTitle>
              <Content>
                인디펜던트 크리에이터들을 <br />
                위해 제작된 <br />
                SWICHEE <br />
              </Content>
              <Content>
                {/* <img src={nob} alt="nob" width="300px" /> */}
              </Content>
            </MainTitle>

            <Main>
              <Content>
                우리 모두
                {/* <img src={logo} alt="logo" height="20px" /> */}
                에서 안전하게 만나요!
                <br />
              </Content>
              <BoxContent>
                스위치에서는 이미 많은 크리에이터가
                <br />
                오프라인의 어려움을 이겨내고 온라인을 통해
                <br />
                좋은 콘텐츠를 제작하고 팬들에게 선보이며
                <br />
                건강한 창작 생태계를 만들어가고 있습니다.
                <br />
                <br />
                어디에서도 볼 수 없었던 크리에이터와
                <br />
                팬들과의 돈독한 관계를 만들어가세요.
                <br />
              </BoxContent>
              <Content>
                {/* <img src={poh} alt="poh" width="100px" />
                <img src={poh} alt="poh" width="100px" />
                <img src={poh} alt="poh" width="100px" />
                <img src={poh} alt="poh" width="100px" /> */}
              </Content>
              <BoxContent>
                끊김없는 스트리밍으로 마음껏 즐겨보세요.
                <br />
              </BoxContent>
              <Content>
                <SideImg>
                  <Letter2>
                    {/* <img src={logo2} alt="logo" height="15px" /> 내가 만들어가는 */}
                    홈 화면
                    <br />
                    <Letter1>
                      내가 좋아하는 크리에이터를 팔로우하고
                      <br />
                      새로운 콘텐츠를 가장 빨리 만나보세요.
                    </Letter1>
                  </Letter2>
                  {/* <img src={poh} alt="poh" width="100px" /> */}
                  <br />
                </SideImg>
              </Content>
              <Content>
                <SideImg>
                  <Letter2>
                    {/* <img src={logo2} alt="logo" height="15px" /> 배경화면, 웹툰 */}
                    그 무엇이든
                    <br />
                    <Letter1>
                      게시글에 최대 60장까지 업로드할 수<br />
                      있습니다. 평소에 불편하게 공유하던
                      <br />
                      콘텐츠를 가장 편리하게 관리하세요.
                    </Letter1>
                  </Letter2>
                </SideImg>
                {/* <img src={nob2} alt="nob2" width="300px" /> */}
              </Content>
              <Content>
                <SideImg>
                  <Letter2>
                    {/* <img src={logo2} alt="logo" height="15px" /> 음악, 동영상 */}
                    스트리밍
                    <br />
                    <Letter1>
                      누구나 유통사를 거치지 않고 가장 빠르게
                      <br />
                      자작곡을 팬들에게 선공개 할 수 있습니다.
                      <br />
                    </Letter1>
                    지원 파일 형식
                    <Letter1>
                      오디오 ACC,m4a,mp3
                      <br />
                      비디오 mp4, mov, 3gp
                      <br />
                    </Letter1>
                  </Letter2>
                  {/* <img src={poh} alt="poh" width="100px" /> */}
                  <br />
                </SideImg>
              </Content>
            </Main>
            <Content></Content>
          </div>
        </Container>
      )}
    </>
  );
};

CompanyPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CompanyPresenter;
