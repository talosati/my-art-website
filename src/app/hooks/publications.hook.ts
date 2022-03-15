import { useEffect, useState } from 'react';

export interface Publication {
    id: number;
    date: string;
    journal: string;
    journalLogo: string;
    title: string;
    link: string;
    type: string;
    accessible: string;
}

export function usePublications(): Publication[] | undefined {
    const [publications, setPublications] = useState<Publication[]>([]);

    useEffect(() => {
        fetch('http://localhost:8000/publications?_sort=date&_order=desc')
            .then((response) => {
                response.json().then((fetchedPublications) => {
                    setPublications(fetchedPublications);
                });
            })
            .catch((ex) => {
                console.log('parsing failed', ex);
            });
    }, []);
    return publications;
}
