import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  instance.defaults.headers.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/signup', formData);
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/login', formData);
      setToken(data.token);

      console.log('user logged in', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const reLoginThunk = createAsyncThunk(
  'auth/reLogin',
  async (token, thunkApi) => {
    if (token === null) {
      return thunkApi.rejectWithValue('Error refresh current user.');
    }
    // console.log(token);
    setToken(token);

    try {
      const { data } = await instance.get('/users/current');

      // console.log('user reLogged in', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.post('/users/logout');
      clearToken();
      // clearToken(token);
      console.log('user Logged Out', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
