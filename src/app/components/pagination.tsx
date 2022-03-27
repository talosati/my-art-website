import * as React from 'react';

export default function Pagination(props: {
    cardsPerPage: number;
    totalCards: number | undefined;
    paginate: (arg: number) => void;
}): JSX.Element {
    const pageNumbers: number[] = [];
    const { totalCards } = props;
    const { cardsPerPage } = props;
    const { paginate } = props;

    if (totalCards) {
        for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i += 1) {
            pageNumbers.push(i);
        }
    }

    const handlePaginate =
        () =>
        (pageNumber: number): void => {
            paginate(pageNumber);
            // eslint-disable-next-line no-console
            console.log('child');
        };

    return (
        <ul className="pagination">
            {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                    <a onClick={handlePaginate} href="!#" className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    );
}
