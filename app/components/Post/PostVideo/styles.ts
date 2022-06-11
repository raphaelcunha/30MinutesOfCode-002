import { styled } from '@mui/material'
import { ReactComponent as PlayerSvg } from 'assets/images/content/player.svg'

export const StyledContainer = styled('div')`
  background: #fff;
  border-radius: 20px;
  position: relative;
  min-height: 130px;

  &:hover > svg {
    opacity: 0.9;
  }
`

export const ImgPlayer = styled(PlayerSvg)`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -20px;
  margin-top: -20px;
  z-index: 1;
`

export const StyledImage = styled('img')`
  background: #fff;
  width: 100%;
  height: 112px;
  border: 20px;
  border-radius: ${({ theme }) => theme.spacing(0, 0, 5, 0)};
`
