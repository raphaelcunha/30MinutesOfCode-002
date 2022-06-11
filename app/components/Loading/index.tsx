import { Logo } from 'assets/images'
import { useAuth } from 'hooks'
import Box from '../Box'
import CircularProgress from '../CircularProgress'

const Loading = () => {
  useAuth()

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: '100vh',
        zIndex: theme => theme.zIndex.modal,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Logo width={167} />
      <CircularProgress color="primary" sx={{ mt: 3 }} />
    </Box>
  )
}

export default Loading
