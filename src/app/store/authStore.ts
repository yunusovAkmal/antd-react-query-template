import { create } from 'zustand'

import { storageService } from '~/api'
import { type AdminService, type User } from '~/types'

const isLoggedIn = () => !!storageService.getAccessToken()

type AuthState = {
  isAuthenticated: boolean
  state: 'loading' | 'finished'
  user: User
  currentService: AdminService
  services: AdminService[]
}

type AuthActions = {
  setUser: (user: User) => void
  updateState: (state: Partial<AuthState>) => void
}

export type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  state: isLoggedIn() ? 'loading' : 'finished',
  user: undefined as unknown as User,
  currentService: undefined as unknown as AdminService,
  services: [],
  setUser: (user: User) => {
    set({
      user,
      isAuthenticated: true,
      state: 'finished'
    })
  },

  updateState: (state) => {
    set(state)
  }
}))
