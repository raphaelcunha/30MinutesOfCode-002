import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const onRequest = (
  config: AxiosRequestConfig,
  keyLocalStorage: string,
  activeBearer = true
): AxiosRequestConfig => {
  const token = localStorage.getItem(keyLocalStorage)
  if (token) {
    return {
      ...config,
      headers: {
        authorization: activeBearer ? `Bearer ${token}` : token,
      },
    }
  }

  return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => response

const onResponseError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error)

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance,
  keyLocalStorage: string,
  activeBearer?: boolean
): AxiosInstance {
  axiosInstance.interceptors.request.use(
    config => onRequest(config, keyLocalStorage, activeBearer),
    onRequestError
  )
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}
