import * as React from 'react';
import styled from 'styled-components';
import { FontSizes, LineHeights, theme } from '../layout';

const HeaderContainer = styled.div`
    justify-content: flex-start;
    padding-left: 30px !important;
    position: fixed;
    top: 0;
    flex-direction: row;
`;

const HeaderTitle = styled.h1`
    font-size: ${FontSizes.huge};
    line-height: ${LineHeights.huge};
    font-weight: 700;
    color: ${theme.dark};
    margin: 19px 0;
`;

const Logo = styled.img`
    margin: 19px 0;
    height: 36px;
    width: 36px;
`;

export default function HeaderComponent(): JSX.Element {
    return (
        <HeaderContainer className="header">
            <HeaderTitle>Önbeszéd</HeaderTitle>
        </HeaderContainer>
    );
}
