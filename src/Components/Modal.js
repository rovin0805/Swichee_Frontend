import "./Modal.css";
import ReactStoreBadges from "react-store-badges";
import styled from "styled-components";
import logo from "Assets/logo.png";

const Badge = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-right: 20px;
  font-family: "Noto Sans KR";
`;

const Logo = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-top: 30px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  padding: 10px 10px 10px 10px;
  margin-bottom: 30px;
  font-weight: bold;
  font-family: "Noto Sans KR";
`;

const Subject = styled.div`
  font-size: 15px;
  padding: 10px 10px 10px 10px;
  margin-bottom: 30px;
  font-family: "Noto Sans KR";
`;

const Modal = () => (
  <div id="open-modal" className="modal-window">
    <div className="modal-content">
      <a href="#" title="Close" className="modal-close">
        &times;
      </a>
      <Logo>
        <img src={logo} alt="logo" height="70px" />
      </Logo>
      <Title>Download Swichee for free</Title>

      <Subject>당신의 필요함을 채워줄 완벽한 두번째 SNS</Subject>
      <Badge style={{ marginRight: 5 }}>
        <ReactStoreBadges
          platform={"ios"}
          url={"https://apps.apple.com/au/app/id1472654007"}
          locale={"ko-kr"}
        />
        <ReactStoreBadges
          platform={"android"}
          url={
            "https://play.google.com/store/apps/details?id=com.swichee.swichee&hl=ko&gl=US"
          }
          locale={"ko-kr"}
        />
      </Badge>
    </div>
  </div>
);

export default Modal;
