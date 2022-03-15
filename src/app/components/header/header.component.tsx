import * as React from 'react';
import styled from 'styled-components';
import LogoSrc from '../../../assets/images/onbeszed-logo.svg';
import { theme } from '../layout';

const HeaderContainer = styled.div`
    background-color: ${theme.border};
    height: 232px;
`;

const Logo = styled.img`
    margin: 19px 16px;
    height: 200px;
`;

export default function HeaderComponent(): JSX.Element {
    return (
        <HeaderContainer>
            <Logo src={LogoSrc} alt="onbeszed-logo" />
        </HeaderContainer>
    );
}
