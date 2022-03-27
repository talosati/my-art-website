import styled from 'styled-components';

export const theme = {
    normal: '#ffffff',
    light: '#5a6872',
    background: '#0f0c29',
    border: '#302b63',
};

export const FontSizes = {
    big: '44px',
    middle: '16px',
    normal: '14px',
};

export const LineHeights = {
    big: '48px',
    middle: '18px',
    normal: '16px',
};

const TextMargin = '5px 0';

export const Title = styled.h1`
    font-size: ${FontSizes.big};
    line-height: ${LineHeights.big};
    font-weight: 700;
    color: ${theme.normal};
    margin: 67px 0 40px 94px;

    @media (max-width: 1280px) {
        margin-left: 50px;
    }

    @media (max-width: 320px) {
        margin-left: 20px;
    }
`;

export const FilterTitle = styled.h2`
    font-weight: bold;
    font-size: ${FontSizes.middle};
    line-height: ${LineHeights.middle};
    color: ${theme.normal};
`;

export const FilterLabel = styled.label`
    font-size: ${FontSizes.normal};
    line-height: ${LineHeights.normal};
    color: ${theme.normal};
    margin-right: 24px;
`;

export const FilterInput = styled.input`
    width: 20px;
    height: 20px;
    margin: 0 10px 0 0;
    vertical-align: middle;
`;

export const TitleOfText = styled.a`
    font-weight: bold;
    color: ${theme.normal};
    margin: ${TextMargin};
    font-size: ${FontSizes.middle};
    line-height: ${LineHeights.middle};
    text-decoration: none;
`;

export const PublicationDetails = styled.p`
    font-size: ${FontSizes.normal};
    line-height: ${LineHeights.normal};
    color: ${theme.normal};
    margin: ${TextMargin};
    display: none;
`;
