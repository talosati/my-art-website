import * as React from 'react';
import styled from 'styled-components';
import { ChangeEvent, useState } from 'react';
import { Publication, usePublications } from '../../hooks/publications.hook';
import {
    theme,
    Title,
    TitleOfText,
    PublicationDetails,
    FilterTitle,
    FilterLabel,
    FilterInput,
    LineHeights,
    FontSizes,
} from '../layout';

const CardContainer = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 94px;

    @media (max-width: 1280px) {
        margin: 0 50px;
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 420px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 320px) {
        margin: 0 20px;
    }
`;

const Card = styled.div`
    width: 300px;
    height: 240px;
    background: ${theme.border};
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px ${theme.border};
    border-radius: 8px;
    box-shadow: 0 -1px 4px 0 rgba(25, 32, 36, 0.04),
        0 3px 6px 0 rgba(25, 32, 36, 0.16);

    &:hover {
        border: solid 1px ${theme.normal};

        .text-container {
            .text-title {
                font-size: ${FontSizes.normal};
                line-height: ${LineHeights.normal};
            }

            .details,
            .site {
                display: block;
            }
        }
    }

    @media (max-width: 360px) {
        width: 250px;
        height: 200px;
    }
`;

const Logo = styled.img`
    max-width: 100px;
    max-height: 50px;
    margin-right: 18px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const FilterContainer = styled.div`
    background-color: inherit;
    margin: 0 0 56px 94px;

    @media (max-width: 1280px) {
        margin-left: 50px;
    }

    @media (max-width: 320px) {
        margin-left: 20px;
    }
`;

const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 23px 0 56px 0;
`;

type PublicationType = {
    [key: string]: string;
};

export const Platform: PublicationType = {
    O: 'Online',
    P: 'Print',
};

export const FormOfWork: PublicationType = {
    V: 'Vers',
    N: 'Próza',
};

export default function PublicationsComponent(): JSX.Element {
    const publications = usePublications();

    const result: string[] = [];
    const [activePlatforms, setActivePlatforms] = useState(result);
    const [activeForms, setActiveForms] = useState(result);

    function collectActiveFilters(
        changingFilter: string,
        event: ChangeEvent<HTMLInputElement>,
        isPlatform: boolean
    ): void {
        if (event.target.checked) {
            if (isPlatform) {
                setActivePlatforms([...activePlatforms, changingFilter]);
            } else {
                setActiveForms([...activeForms, changingFilter]);
            }
        } else if (isPlatform) {
            const lessFilter = activePlatforms.filter(
                (el) =>
                    activePlatforms.indexOf(el) !==
                    activePlatforms.indexOf(changingFilter)
            );
            setActivePlatforms(lessFilter);
        } else {
            const lessFilter = activeForms.filter(
                (el) =>
                    activeForms.indexOf(el) !==
                    activeForms.indexOf(changingFilter)
            );
            setActiveForms(lessFilter);
        }
    }

    function getCard(publication: Publication): JSX.Element {
        return (
            <Card>
                <a href={publication.link} target="_blank" rel="noreferrer">
                    <Logo
                        src={publication.journalLogo}
                        alt={publication.journal}
                    />
                </a>
                <TextContainer className="text-container">
                    <TitleOfText
                        className="text-title"
                        href={publication.link}
                        target="_blank"
                    >
                        {publication.title}
                    </TitleOfText>
                    {publication.type !== '' && (
                        <PublicationDetails className="details">
                            {publication.type}
                        </PublicationDetails>
                    )}
                    {publication.accessible !== 'none' && (
                        <PublicationDetails className="details">
                            {publication.date}
                        </PublicationDetails>
                    )}
                </TextContainer>
            </Card>
        );
    }

    return (
        <>
            <Title>Publikációk</Title>
            <FilterContainer>
                <FilterTitle>Milyen formában olvasható?</FilterTitle>
                <CheckBoxContainer>
                    {Object.keys(Platform).map((key, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <FilterLabel key={index}>
                            <FilterInput
                                type="checkbox"
                                defaultChecked={false}
                                onChange={(event) =>
                                    collectActiveFilters(
                                        Platform[key],
                                        event,
                                        true
                                    )
                                }
                            />
                            {Platform[key]}
                        </FilterLabel>
                    ))}
                    {Object.keys(FormOfWork).map((key, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <FilterLabel key={index}>
                            <FilterInput
                                type="checkbox"
                                defaultChecked={false}
                                onChange={(event) =>
                                    collectActiveFilters(
                                        FormOfWork[key],
                                        event,
                                        false
                                    )
                                }
                            />
                            {FormOfWork[key]}
                        </FilterLabel>
                    ))}
                </CheckBoxContainer>
            </FilterContainer>
            <CardContainer>
                {/* eslint-disable-next-line no-nested-ternary */}
                {activePlatforms.length > 0 && activeForms.length > 0
                    ? publications
                          ?.filter(
                              (publication) =>
                                  activePlatforms.includes(
                                      Platform[publication.accessible]
                                  ) &&
                                  activeForms.includes(
                                      FormOfWork[publication.poemOrShortStory]
                                  )
                          )
                          .map((filteredAirline) => getCard(filteredAirline))
                    : // eslint-disable-next-line no-nested-ternary
                    activePlatforms.length > 0 && activeForms.length === 0
                    ? publications
                          ?.filter((publication) =>
                              activePlatforms.includes(
                                  Platform[publication.accessible]
                              )
                          )
                          .map((filteredAirline) => getCard(filteredAirline))
                    : activePlatforms.length === 0 && activeForms.length > 0
                    ? publications
                          ?.filter((publication) =>
                              activeForms.includes(
                                  FormOfWork[publication.poemOrShortStory]
                              )
                          )
                          .map((filteredAirline) => getCard(filteredAirline))
                    : publications?.map((publication) => getCard(publication))}
            </CardContainer>
        </>
    );
}
