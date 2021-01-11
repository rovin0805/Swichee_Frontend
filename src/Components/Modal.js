import "./Modal.css";
import ReactStoreBadges from "react-store-badges";
import styled from "styled-components";

const Badge = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-right: 20px;
`;

const Modal = () => (
  <div id="open-modal" className="modal-window">
    <Badge>
      <a href="#" title="Close" className="modal-close">
        Close
      </a>
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
    </Badge>
  </div>
);

export default Modal;
