import styled from "styled-components";

const toastConatinerWidth = "100vw";
const toastBodyWidth = "300";

const toastConditions = {
  success: {
    backgroundColor: "#95bb72",
    color: "#198754"
  },
  error: {
    backgroundColor: "#ffcccc",
    color: "#cc0000"
  }
};

const ToastConatiner = styled.div`
  position: absolute;
  top: 20px;
  right: 0px;
  width: ${toastConatinerWidth};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow-x: hidden;
`;

const ToastBody = styled.div`
  width: ${toastBodyWidth}px;
  height: 100px;
  transition: margin 1s, background-color 1s, color 1s;
  border-radius: 18px;
  z-index: 1000;
  margin: 0px ${({ show }) => (show ? 10 : toastBodyWidth * -1)}px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ condition }) => condition && toastConditions[condition].color};
  background-color: ${({ condition }) =>
    condition && toastConditions[condition].backgroundColor};
`;

const ButtonContainer = styled.div`
  margin: 50vh auto 0px;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShowToastButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 10px;
  margin-left: 5px;
  cursor: pointer;
  background-color: ${({ success }) =>
    success
      ? toastConditions.success.backgroundColor
      : toastConditions.error.backgroundColor};
  color: ${({ success }) =>
    success ? toastConditions.success.color : toastConditions.error.color};
`;

export { ToastConatiner, ToastBody, ButtonContainer, ShowToastButton };
