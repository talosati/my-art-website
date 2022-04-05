import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import HomeComponent from './app/components/home/home.component';
import HeaderComponent from './app/components/header/header.component';
import FooterComponent from './app/components/footer/footer.component';
import { theme } from './app/components/layout';

const PageContainer = styled.div`
    height: 100%;

    &:after,
    &:before {
        content: '';
        display: block;
        height: 56px;
    }

    .footer,
    .header {
        flex-shrink: 0;
        height: 35px;
        padding: 19px 16px;
        background-color: ${theme.border};
        color: ${theme.normal};
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <PageContainer>
                <HeaderComponent />
                <HomeComponent />
                <FooterComponent />
            </PageContainer>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
