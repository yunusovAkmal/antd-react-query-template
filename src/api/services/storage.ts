class StorageService {
  private readonly ACCESS_TOKEN_KEY = 'access_token'
  private readonly REFRESH_TOKEN_KEY = 'refresh_token'

  public getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY)
  }

  public setAccessToken(token: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, token)
  }

  public removeTokens(): void {
    // TODO: temporary using clear storage
    localStorage.clear()
    // localStorage.removeItem(this.ACCESS_TOKEN_KEY)
    // localStorage.removeItem(this.REFRESH_TOKEN_KEY)
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY)
  }

  public setRefreshToken(token: string): void {
    localStorage.setItem(this.REFRESH_TOKEN_KEY, token)
  }

  public getTheme(): 'light' | 'dark' | null {
    const theme = localStorage.getItem('theme')
    return theme as 'light' | 'dark' | null
  }

  public setTheme(theme: 'light' | 'dark'): void {
    localStorage.setItem('theme', theme)
  }
}

const storageService = new StorageService()

export { storageService }
