import { create } from 'zustand'
import { clearStorage, getToken } from '~/api'
import { type User } from '~/types'

const isLoggedIn = () => !!getToken()

type AuthState = {
  isAuthenticated: boolean
  state: 'loading' | 'finished'
  user: User
}

type AuthActions = {
  logout: () => void
  setUser: (user: User) => void
}

export type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  state: isLoggedIn() ? 'loading' : 'finished',
  user: undefined as unknown as User,
  setUser: (user: User) => {
    set({
      user,
      isAuthenticated: true,
      state: 'finished'
    })
  },
  logout: () => {
    clearStorage()
    window.location.href = '/'
  }
}))
