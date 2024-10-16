import React, { FC, useState } from 'react';
import styled from 'styled-components';
import AddTrialLocation from '../Trial/AddTrialLocation';
 
// import AddTrialLocation from './AddTrialsLocation/AddTrialLocation';
// import CreateNewProduct from './CreateNewProduct/CreateNewProduct';
// import CreateNewProduct from './CreateNewProduct1/CreateNewProduct';
// import CreateTreatMent from './CreateTreatMent';
// import TrialManagementPage from './TrialManagementPage1/TrialManagementOverview';
 
// Styled-components for the Pop-Up
const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  --custom-height: 100%;
  --custom-width: 100%;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
 
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
 
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
 
 
 
const Popup: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <>
    <Overlay onClick={onClose} />
    <PopupContainer>
 {/* /<CreateNewProduct></CreateNewProduct>      */}
 {/* <CreateNewProduct></CreateNewProduct> */}
 <CloseButton onClick={onClose}>X</CloseButton>
{/* <AddTrialLocation  onClose={onClose}></AddTrialLocation>     */}
<AddTrialLocation ></AddTrialLocation>
{/* <CreateTreatMent></CreateTreatMent> */}
 {/* <TrialManagementPage></TrialManagementPage>  */}
    </PopupContainer>
   
  </>
);
 
 
const ReusablePop:FC =()=>{
  const [isPopupVisible,setIsPopupVisible] =useState(false)
  const openPopup = () => {
    setIsPopupVisible(true);
  };
 
  const closePopup = () => {
    setIsPopupVisible(false);
  };
 
 
  return (
    <div>
     
      <button onClick={openPopup}>ReusablePop</button>
 
      {isPopupVisible && <Popup onClose={closePopup} />}
    </div>
  );
}
 
export default ReusablePop;
 
 