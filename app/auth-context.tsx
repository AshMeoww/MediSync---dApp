'use client'
import { createContext } from 'react';

// Create a context to handle logout
export const AuthContext = createContext({
  logout: () => {},
  navigateToLogin: () => {}
});