import axios from 'axios'

import { apiClient } from '~/api/http'
import { storageService } from '~/api/services/storage'
import { CONFIG } from '~/config'

type AuthResponse = {
  access_token: string
  refresh_token: string
  expires_at: string
}

class AuthService {
  public async authenticateUser(code: string) {
    const response = await axios.get<AuthResponse>(`${CONFIG.HOST}/admin/auth/one-id`, {
      params: { code }
    })
    return response.data
  }

  public logoutUser() {
    apiClient.post('/auth/logout/', {}).finally(() => {
      storageService.removeTokens()
      window.location.href = '/'
    })
  }

  public async refreshToken() {
    const response = await axios.post<Pick<AuthResponse, 'access_token' | 'expires_at'>>(
      `${CONFIG.HOST}/auth/refresh/`,
      {
        refresh_token: storageService.getRefreshToken()
      }
    )

    return response.data
  }
}

const authService = new AuthService()

export { authService }
