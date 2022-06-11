import { styled } from '@mui/material'

export const StyledImage = styled('img')`
  width: 100%;
  border: 24px;
  border-radius: ${({ theme }) => theme.spacing(0, 0, 5, 0)};

  ${props => props.theme.breakpoints.down('md')} {
    margin-right: 24px;
  }
`
