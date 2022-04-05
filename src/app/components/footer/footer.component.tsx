import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../layout';

const FooterContainer = styled.div`
    margin-top: 56px;
    justify-content: center;
    position: fixed;
    bottom: 0;
    flex-direction: column;
`;

const Link = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: ${theme.dark};
    text-align: center;
    word-break: break-word;
    padding-right: 20px;
    margin-bottom: 5px;
`;

export default function FooterComponent(): JSX.Element {
    return (
        <FooterContainer className="footer">
            <Link href="http://www.onlinewebfonts.com" target="_blank">
                Lato is made from oNline Web Fonts
            </Link>
            <Link href="https://en.bestfonts.pro/" target="_blank">
                Explora is designed by Robert Leuschke
            </Link>
        </FooterContainer>
    );
}
