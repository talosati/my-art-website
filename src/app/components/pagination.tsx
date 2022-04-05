import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { theme } from './layout';

const PaginationContainer = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 23px 0 56px 30px;
    list-style-type: none;
    padding: 0;

    @media (max-width: 1280px) {
        margin-left: 50px;
    }
`;

const Page = styled.li`
    width: 30px;
    height: 30px;
    background: ${theme.border};
    border: solid 1px ${theme.border};
    border-radius: 8px;
    box-shadow: 0 -1px 4px 0 rgba(25, 32, 36, 0.04),
        0 3px 6px 0 rgba(25, 32, 36, 0.16);
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        border: solid 1px ${theme.normal};
    }
`;

const PageLink = styled.a`
    text-decoration: none;
    color: ${theme.normal};

    &.active {
        color: ${theme.border};

        > li {
            background: ${theme.normal};
            border: solid 1px ${theme.normal};
        }
    }
`;

export default function Pagination(props: {
    cardsPerPage: number;
    totalCards: number | undefined;
    paginate: (arg: number) => void;
}): JSX.Element {
    const pageNumbers: number[] = [];
    const { totalCards } = props;
    const { cardsPerPage } = props;
    const { paginate } = props;
    const [activeCard, setActiveCard] = useState(1);

    if (totalCards) {
        for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i += 1) {
            pageNumbers.push(i);
        }
    }

    return (
        <PaginationContainer className="pagination">
            {pageNumbers.map((number) => (
                <PageLink
                    key={number}
                    onClick={() => {
                        setActiveCard(number);
                        paginate(number);
                    }}
                    href="!#"
                    className={`page-link ${activeCard === number && 'active'}`}
                >
                    <Page key={number} className="page-item">
                        {number}
                    </Page>
                </PageLink>
            ))}
        </PaginationContainer>
    );
}
