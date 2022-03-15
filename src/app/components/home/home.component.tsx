import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PublicationsComponent from '../publications/publications.component';
import HeaderComponent from '../header/header.component';
import { theme } from '../layout';
import FooterComponent from '../footer/footer.component';

const HomeContainer = styled.div`
    background-color: ${theme.background};
    height: 100vh;

    .footer {
        flex-shrink: 0;
    }
`;

export default function HomeComponent(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <HomeContainer>
                <HeaderComponent />
                <PublicationsComponent />
                <FooterComponent />
            </HomeContainer>
        </ThemeProvider>
    );
}
