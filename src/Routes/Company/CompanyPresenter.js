import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import "./CompanyPresenter.css";
import main_submenu1 from "Assets/main_submenu1.png";
import main_home from "Assets/main_home.png";
import main_background from "Assets/main_background.png";
import main_music from "Assets/main_music.png";
import logo from "Assets/logo.png";

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

const MainTitle = styled.div`
  width: 800px;
  padding: 50px 0px 0px 55px;
  font-weight: bold;
  font-size: 17px;
  
  margin: 0 auto;
  background-color:white;
  @media only screen and (min-width: 508px) {
  }
  @media only screen and (max-width: 699px) {
  }
  @media only screen and (min-width: 700px) and (max-width: 849px) {
  }
  @media only screen and (min-width: 850px) and (max-width: 1200px) {
  }
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-right: 0px;
`;

const Mainpic = styled.img`
    margin-left:13%;
`;

const Smallfont = styled.div`
    font-size: 20px;
    color: black;
    width: 100%;
    text-align: center;
`;

const Midfont = styled.div`
    font-size: 21px;
    color: black;
    width: 600px;
    text-align: center;
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
        <Container >
          <div>
          <MainTitle id="particle-container">
        <div class="masked-copy texture-orange big-type" >
          <h2>인디펜던트 크리에이터들을</h2><br/>
          <h2>위해 제작된</h2><br/>
          <p>SWICHEE</p><br/>
          <Mainpic src={main_submenu1} alt="main_submenu1" width="650px" />
        </div>
        </MainTitle>
        <br/>
        <MainTitle>
        <div class="masked-copy texture-orange big-type" >
          <h2>우리 모두</h2><br/>
          <p>SWICHEE</p>
                <h2>에서 안전하게 만나요!</h2>
                <br/><br/>
                <Smallfont>
                스위치에서는 이미 많은 크리에이터가
                <br />
                오프라인의 어려움을 이겨내고 온라인을 통해
                <br />
                좋은 콘텐츠를 제작하고 팬들에게 선보이며
                <br />
                건강한 창작 생태계를 만들어가고 있습니다.
                <br /><br />
                어디에서도 볼 수 없었던 크리에이터와
                <br />
                팬들과의 돈독한 관계를 만들어가세요.
                <br /><br />
                </Smallfont>
                </div>
        </MainTitle>
        <br /><br />
        <MainTitle>
        <div class="masked-copy texture-orange big-type" >
        <p>#</p><h2>내가 만들어가는</h2> <p>홈화면</p><br/><br/>
          <Badge>
          <Midfont>
          <h2>내가 좋아하는 크리에이터를<br />
             팔로우하고 새로운 콘텐츠를<br />
              가장 먼저 만나보세요.
                </h2><br/>
          </Midfont>
          <img src={main_home} alt="main_home" width="470px" />
          </Badge>
        </div>
        </MainTitle>
        <br /><br />
        <MainTitle>
        <div class="masked-copy texture-orange big-type" >
        <p>#</p>
          <h2>배경화면, 웹툰 </h2><p>그 무엇이든</p><br/><br/><br />
          <Badge>
          <img src={main_background} alt="main_background" width="450px" />
          <Midfont>
          게시글에 최대 60장까지 <br />
          업로드할 수 있습니다.<br />
          평소에 불편하게 공유하던<br />
          콘텐츠를 가장 편리하게<br />
          관리하세요.
          <br/><br/>
          </Midfont>
          </Badge>
        </div>
        </MainTitle>
        <br /><br />
        <MainTitle>
        <div class="masked-copy texture-orange big-type" >
        <p>#</p>
          <h2>동영상, 음악 </h2><p>스트리밍</p><br/><br/>
          <Badge>
          <Midfont>
                      누구나 유통사를 거치지 않고<br />
                      가장 빠르게 자작곡을 <br />
                      팬들에게 선공개<br /> 할 수 있습니다.
                      <br />
                      <br />
                    지원 파일 형식
                    <br />
                      오디오 ACC,m4a,mp3
                      <br />
                      비디오 mp4, mov, 3gp
                      <br />
                      </Midfont>
          <img src={main_music} alt="main_music" width="470px" />
          </Badge>
        </div>
        </MainTitle>
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
