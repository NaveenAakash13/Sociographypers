import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Corrected import

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    email: null,
    mode: 'guest',
    photographerId: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const mode = localStorage.getItem('mode') || 'guest';
    const photographerId = localStorage.getItem('photographerId'); // Retrieve photographerId from local storage

    if (token) {
      setAuthState({ token, email, mode, photographerId });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', null, {
        params: {
          email,
          password,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const token = response.data;

      const decoded = jwtDecode(token);
      const mode = decoded.role;
      const photographerId = decoded.id;

      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      localStorage.setItem('mode', mode);
      localStorage.setItem('photographerId', photographerId);
      setAuthState({ token, email, mode, photographerId });
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const signup = async () => {
    try {
      const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const mode = localStorage.getItem('mode') || 'guest';
    const photographerId = localStorage.getItem('photographerId');

      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      localStorage.setItem('mode', mode);
      localStorage.setItem('photographerId', photographerId); // Store photographerId in local storage
      setAuthState({ token, email, mode, photographerId });
    } catch (error) {
      console.error('Signup failed', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('mode');
    localStorage.removeItem('photographerId'); // Remove photographerId from local storage
    setAuthState({ token: null, email: null, mode: 'guest', photographerId: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
