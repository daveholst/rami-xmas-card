import React from 'react'
import { StyledTitle } from './Title.styled'

export const Title = ({
    className,
    title
}) => {
    return (
        <StyledTitle className={className}>
            {title}
        </StyledTitle>
        )
}