import axios from 'axios'

import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { authService } from '~/api/contracts'
import { storageService } from '~/api/services/storage'

export class HttpInterceptor {
  constructor() {}

  public connect(client: AxiosInstance): void {
    client.interceptors.request.use(this.requestFulfilled, this.requestRejected)
    client.interceptors.response.use(this.responseFulfilled, this.responseRejected)
  }

  private requestFulfilled(config: InternalAxiosRequestConfig) {
    const pathname = window.location.pathname
    const [_, __, serviceId] = pathname.split('/')

    config.headers.setAuthorization(`Token ${storageService.getAccessToken()}`)

    if (serviceId && !isNaN(parseInt(serviceId))) {
      config.url = `${config.url}?service_id=${serviceId}`
    }

    return config
  }

  private requestRejected(error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error)
  }

  private responseFulfilled(response: AxiosResponse): AxiosResponse['data'] {
    // extract data field from axios response
    return response.data
  }

  private async responseRejected(error: AxiosError): Promise<AxiosError> {
    console.log('error', error)
    const { status, config: originalReqConfig } = error

    if (status === 401 && originalReqConfig && originalReqConfig?.url !== '/auth/refresh/') {
      try {
        // Call refresh token endpoint
        const { access_token } = await authService.refreshToken()

        // update access token
        storageService.setAccessToken(access_token)

        // Update the original request with new token
        originalReqConfig.headers.Authorization = `Token ${access_token}`

        // Retry the original request
        const response = await axios(originalReqConfig)

        return response.data
      } catch {
        // If refresh token also fails, logout user
        this.handle401Error()
        return Promise.reject(error)
      }
    }

    if (status === 401) this.handle401Error()

    return Promise.reject(error)
  }

  private handle401Error(): void {
    storageService.removeTokens()
    window.location.href = '/'
  }
}
