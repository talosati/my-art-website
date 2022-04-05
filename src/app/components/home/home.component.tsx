import * as React from 'react';
import styled from 'styled-components';
import PublicationsComponent from '../publications/publications.component';

const PageContentContainer = styled.div`
    height: 100%;
`;

export default function HomeComponent(): JSX.Element {
    return (
        <PageContentContainer>
            <PublicationsComponent />
        </PageContentContainer>
    );
}
