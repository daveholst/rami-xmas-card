import React from 'react'
import { StyledPageContainer } from './PageContainer.styled'
import { DaveTestPage } from './card-pages/dave/DaveTestPage'


export const PageContainer = ({
    className
}) => {
    return (
        <StyledPageContainer className={className}>
            {/* TODO: some logic in here for pages idk */}
            <DaveTestPage />
        </StyledPageContainer>
    )
}