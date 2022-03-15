import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../layout';

const FooterContainer = styled.div`
    background-color: ${theme.border};
    height: 52px;
    padding: 19px 16px;
    margin-top: 56px;
    color: ${theme.normal};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Link = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: ${theme.normal};
    text-align: center;
`;

export default function FooterComponent(): JSX.Element {
    return (
        <FooterContainer className="footer">
            <Link href="http://www.onlinewebfonts.com" target="_blank">
                Font made from oNline Web Fonts is licensed by CC BY 3.0
            </Link>
        </FooterContainer>
    );
}
