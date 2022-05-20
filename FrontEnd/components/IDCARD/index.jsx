import React, { useState } from "react";
import Label from "../Label";
import styled from "styled-components";
import "./IDCARD.css";
import logo from "../../Ethereum_Logo.png";
import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { useRef } from 'react';
import {Image, Video, Transformation} from 'cloudinary-react';

function downloadImage(blob, fileName){
  const fakeLink = window.document.createElement("a");
  fakeLink.style = "display:none;";
  fakeLink.download = fileName;
  
  fakeLink.href = blob;
  
  document.body.appendChild(fakeLink); 
  document.body.removeChild(fakeLink);
  
  fakeLink.remove();
  };  

function uploadToCloudinary(img){
  const data = new FormData()
  data.append("file", img)
  data.append("upload_preset", "<YOUR UPLOAD PRESET>")
  data.append("cloud_name","dv14w4qd6")

  fetch(" https://api.cloudinary.com/v1_1/dv14w4qd6/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    console.log(data.secure_url)
    })
    .catch(err => console.log(err))
  }


function exportAsImage(element, imageFileName){ 
  // console.log(element);
  //async (element, imageFileName) => {
  const html = document.getElementsByTagName("html")[0];
  const body = document.getElementsByTagName("body")[0];
  let htmlWidth = html.clientWidth;
  let bodyWidth = body.clientWidth;
  const newWidth = element.scrollWidth - element.clientWidth;
  if (newWidth > element.clientWidth) {
  htmlWidth += newWidth;
  bodyWidth += newWidth;
  }
  html.style.width = htmlWidth + "px";
  body.style.width = bodyWidth + "px";
  const canvas = html2canvas(element[0]);
  canvas.then( canvas => {
  const image = canvas.toDataURL("image/png", 1.0);
  uploadToCloudinary(image);
  //downloadImage(image, imageFileName);
  html.style.width = null;
  body.style.width = null;
  })
  console.log('Done');
}

import { useLocation } from "react-router-dom";

function IDCARD(props) {
  const location = useLocation();
  const reference = useRef();

  var {
    issuerName,
    userimage,
    country,
    id,
    idd,
    can,
    name,
    dob,
    gender,
    birth
  } = props;

  issuerName = "Digital ID"

  console.log(location.state);
  console.log(typeof location.state.image)
  
  userimage= location.state.image,
  country=location.state.country,
  id=location.state.id,
  idd= location.state.idd,
  can= location.state.can,
  name= location.state.name,
  dob=location.state.dob,
  gender= location.state.gender,
  birth=location.state.birth

  return (
    <div className="container-center-horizontal">
      <div className="idcard screen">
        <METADATAFRAME>
          <TopFrame>
            <img src={logo} width="15%" height="auto"/>
            <RightTop>
              <Label fullName='Country Code' userDetail={country} />
              <Label fullName='ID NUMBER' userDetail={id} className="top-frame" />
              <Label fullName='IDD' userDetail={idd} className="top-frame" />
              <Label fullName='CAN' userDetail={can} className="top-frame" />
            </RightTop>
          </TopFrame>
          <BottomFrame>
            <Label fullName='FULL NAME' userDetail={name} className="bottom-frame" />
            <Label fullName='DATE OF BIRTH' userDetail={dob} className="bottom-frame" />
            <Label fullName='GENDER' userDetail={gender} className="bottom-frame" />
            <Label fullName='PLACE OF BIRTH' userDetail={birth} className="bottom-frame" />
          </BottomFrame>
        </METADATAFRAME>
        {/* <USERIMAGE src={userimage.name} /> */}
      </div>
      <button onClick={() => exportAsImage(document.getElementsByClassName("idcard screen"), "test")}>
        Submit Digital ID
      </button>
    </div>
  );
}

// export default function App() {
//   const exportRef = reference.current;
  
//   return (
//   <>
//   <div className="parent">
//   <div ref={exportRef}>
//     <div className="container-center-horizontal">
//       <div className="idcard screen">
//         <METADATAFRAME>
//           <TopFrame>
//             <img src={logo} width="15%" height="auto"/>
//             <RightTop>
//               <Label fullName='Country Code' userDetail={country} />
//               <Label fullName='ID NUMBER' userDetail={id} className="top-frame" />
//               <Label fullName='IDD' userDetail={idd} className="top-frame" />
//               <Label fullName='CAN' userDetail={can} className="top-frame" />
//             </RightTop>
//           </TopFrame>
//           <BottomFrame>
//             <Label fullName='FULL NAME' userDetail={name} className="bottom-frame" />
//             <Label fullName='DATE OF BIRTH' userDetail={dob} className="bottom-frame" />
//             <Label fullName='GENDER' userDetail={gender} className="bottom-frame" />
//             <Label fullName='PLACE OF BIRTH' userDetail={birth} className="bottom-frame" />
//           </BottomFrame>
//         </METADATAFRAME>
//         <USERIMAGE src={userimage.name} />
//       </div>
//       {/* <button onClick={() => exportAsImage(document.getElementById("idcard-screen"), "test")}>Default</button>; */}
//     </div>
//   </div>
//   </div>
//   <button onClick={() => exportAsImage(exportRef.current, "test")}>
//   Capture Image
//   </button>
//   </>
//   )
// }


// export default function App() {
//   const exportRef = useRef();
  
//   return (
//   <>
//   <div className="parent">
//   <div ref={exportRef}>
//   <p>...</p>
//   </div>
//   </div>
  // <button onClick={() => exportAsImage(exportRef.current, "test")}>
  // Capture Image
  // </button>
  // </>
//   )
//   }
  




const METADATAFRAME = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 36px;
  flex-direction: column;
  min-width: 361px;
  min-height: 284px;
`;

const TopFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  min-width: 361px;
  min-height: 112px;
`;

const IssuerName = styled.div`
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

const RightTop = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  gap: 8px;
  flex-direction: column;
  min-width: 239px;
  min-height: 112px;
`;

const BottomFrame = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  gap: 16px;
  flex-direction: column;
  min-width: 264px;
  min-height: 136px;
`;

const USERIMAGE = styled.img`
  height: 193px;
  width: 143px;
  object-fit: cover;
  border-radius: 10px;
`;

export default IDCARD;
