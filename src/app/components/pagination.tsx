import * as React from 'react';
import { useEffect, useState } from 'react';

export default function Pagination(props: {
    cardsPerPage: number;
    totalCards: number | undefined;
    paginate: (arg: number) => void;
}): JSX.Element {
    const pageNumbers: number[] = [];
    const [pageNumbersBasedFiltering, setPageNumbersBasedFiltering] =
        useState(pageNumbers);

    const { totalCards } = props;
    const { cardsPerPage } = props;
    const { paginate } = props;

    useEffect(() => {
        const listOfPageNumbers: number[] = [];
        if (totalCards) {
            for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i += 1) {
                listOfPageNumbers.push(i);
            }
        }
        setPageNumbersBasedFiltering(listOfPageNumbers);
    }, []);

    // eslint-disable-next-line no-console
    console.log(pageNumbersBasedFiltering);

    return (
        <ul className="pagination">
            {pageNumbersBasedFiltering.map((number) => (
                <li key={number} className="page-item">
                    <a
                        onClick={() => paginate(number)}
                        href="!#"
                        className="page-link"
                    >
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    );
}
