import React from "react";
import styled from "styled-components";
import { InterMediumWhite18px, InterMediumWhite12px } from "../../styledMixins";


function Label(props) {
  const { fullName, userDetail, className } = props;

  return (
    <CountryCodeFrame className={`country-code-frame ${className || ""}`}>
      <CountryCode className="country-code">{fullName}</CountryCode>
      <UserDetail className="user-detail">{userDetail}</UserDetail>
    </CountryCodeFrame>
  );
}

const CountryCodeFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 141px;
  min-height: 22px;

  &.country-code-frame.top-frame {
    justify-content: space-between;
    width: 239px;
    gap: unset;
    min-width: unset;
  }

  &.country-code-frame.bottom-frame {
    gap: 36px;
    min-width: 264px;
  }
`;

const CountryCode = styled.div`
  ${InterMediumWhite12px}
  letter-spacing: 0;
`;

const UserDetail = styled.div`
  ${InterMediumWhite18px}
  letter-spacing: 0;
`;

export default Label;
