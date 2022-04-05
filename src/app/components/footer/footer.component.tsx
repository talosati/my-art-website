import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../layout';

const FooterContainer = styled.div`
    margin-top: 56px;
    justify-content: center;
    position: fixed;
    bottom: 0;
`;

const Link = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: ${theme.normal};
    text-align: center;
    word-break: break-word;
    padding-right: 20px;
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
