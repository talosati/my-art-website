import styled from 'styled-components';

export const theme = {
    box: '#d0ceba',
    normal: '#ffffff',
    border: '#eef1f2',
    light: '#514f50',
    background: '#2a2a2a',
    dark: '#000000',
};

export const FontSizes = {
    huge: '45px',
    big: '27px',
    middle: '17px',
    normal: '15px',
};

export const LineHeights = {
    huge: '48px',
    big: '30px',
    middle: '20px',
    normal: '18px',
};

const TextMargin = '5px 0';

export const Title = styled.h2`
    font-size: ${FontSizes.huge};
    line-height: ${LineHeights.huge};
    font-weight: 700;
    color: ${theme.normal};
    margin: 67px 0 40px 30px;

    @media (max-width: 320px) {
        margin-left: 20px;
    }
`;

export const FilterTitle = styled.h3`
    font-weight: bold;
    font-size: ${FontSizes.big};
    line-height: ${LineHeights.big};
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
