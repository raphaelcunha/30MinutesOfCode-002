/* eslint-disable complexity */
import React from 'react'
import axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import useStore from 'store'

type TLoading = { message: string } | null
type TErrorMessage = { title: string; message: string; axiosError: AxiosError } | null

export type TUseAuthRespose = {
  loading?: TLoading
  error?: TErrorMessage
}

export default function useAuth(): TUseAuthRespose {
  const [loading, setLoading] = React.useState<TLoading>()
  const [error, setError] = React.useState<TErrorMessage>()
  const navigate = useNavigate()

  const { account, getAccount } = useStore(state => state)

  const fetchAccount = React.useCallback(async () => {
    try {
      if (!account) {
        setLoading({
          message: 'Carregando usuário',
        })
        await getAccount()
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.data) {
          setError({
            title: 'Authentication Error',
            message: 'could not authenticate',
            axiosError: err,
          })
          navigate('/login', { replace: true })
        }
      }
    } finally {
      setLoading(null)
    }
  }, [getAccount, navigate, account])

  React.useEffect(() => {
    if (!account) fetchAccount()
  }, [fetchAccount, account])

  return {
    loading,
    error,
  }
}
