import { styled } from '@mui/material'

export const StyledContainer = styled('div')`
  min-height: 100%;
  width: 685px;
  padding: ${({ theme }) => theme.spacing(4, 0, 4)};

  ${props => props.theme.breakpoints.down('sm')} {
    width: 100%;
    padding: ${({ theme }) => theme.spacing(2)};
  }
`

export const StyledContainerMobile = styled('div')`
  padding-top: ${({ theme }) => theme.spacing(4)};
`

export const ImageContent = styled('img')`
  width: 100%;
  border-radius: 0px 0px 40px 0px;
  max-height: 332px;
  object-fit: cover;
`
