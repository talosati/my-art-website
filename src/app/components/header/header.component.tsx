import * as React from 'react';
import styled from 'styled-components';
import LogoSrc from '../../../assets/images/onbeszed-logo.svg';

const HeaderContainer = styled.div`
    justify-content: flex-start;
    padding-left: 30px !important;
    position: fixed;
    top: 0;
    flex-direction: row;
`;

const Logo = styled.img`
    margin: 19px 0;
    height: 36px;
    width: 36px;
`;

export default function HeaderComponent(): JSX.Element {
    return (
        <HeaderContainer className="header">
            <Logo src={LogoSrc} alt="onbeszed-logo" />
        </HeaderContainer>
    );
}
