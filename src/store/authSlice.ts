/// <reference types="vite/client" />
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
interface User {
    id: string;
    username: string;
    email: string;
    role: string;
}

interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}

interface RegisterCredentials {
    username: string;
    email: string;
    password: string;
    role: string;
}

interface LoginCredentials {
    email: string;
    password: string;
}

const initialState: AuthState = {
    user: null,
    isLoading: false,
    isAuthenticated: false,
    error: null,
};

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (credentials: RegisterCredentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/auth/register`, credentials);
            return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || "Registration failed"
            );
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async (credentials: LoginCredentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, credentials);
            return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || "Login failed"
            );
        }
    }
);

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async () => {
        await axios.post(`${API_URL}/auth/logout`);
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearError:(state)=>{
            state.error = null;
        },
        setCredintials:(state, action:PayloadAction<{user:User}>)=>{
            state.user=action.payload.user;
            state.isAuthenticated=true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.error = null;
                state.isAuthenticated = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })

            //login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;    
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })

            //logout
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.error = null;
                state.isAuthenticated = false;
            });
    },
});

export const { clearError, setCredintials } = authSlice.actions;
export default authSlice.reducer;
