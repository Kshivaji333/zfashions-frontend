import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import axios, { type AxiosError } from 'axios'

interface User {
  id: string
  username: string
  email: string
  role: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
  error: string | null
  isAuthenticated: boolean
}

interface RegisterCredentials {
  username: string
  email: string
  password: string
  role: string
}

interface LoginCredentials {
  email: string
  password: string
}

interface AuthApiResponse {
  user: User
}

interface ApiErrorResponse {
  message?: string
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
}

const getErrorMessage = (error: unknown, fallback: string) => {
  const axiosError = error as AxiosError<ApiErrorResponse>
  return axiosError.response?.data?.message ?? fallback
}

export const registerUser = createAsyncThunk<
  AuthApiResponse,
  RegisterCredentials,
  { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post<AuthApiResponse>(`${API_URL}/auth/register`, credentials)
    return response.data
  } catch (error) {
    return rejectWithValue(getErrorMessage(error, 'Registration failed'))
  }
})

export const loginUser = createAsyncThunk<
  AuthApiResponse,
  LoginCredentials,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post<AuthApiResponse>(`${API_URL}/auth/login`, credentials)
    return response.data
  } catch (error) {
    return rejectWithValue(getErrorMessage(error, 'Login failed'))
  }
})

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(`${API_URL}/auth/logout`)
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, 'Logout failed'))
    }
  },
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    setCredentials: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user
      state.isAuthenticated = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload ?? 'Registration failed'
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload ?? 'Login failed'
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
        state.error = null
        state.isAuthenticated = false
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload ?? 'Logout failed'
      })
  },
})

export const { clearError, setCredentials } = authSlice.actions
export default authSlice.reducer
