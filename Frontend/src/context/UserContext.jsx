import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      return null;
    }
  });

  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
  }, [user, token, cart]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

const loginUser = (userData) => {
    setUser(userData.user);
    setToken(userData.token);
  
    // Store user data in localStorage
    if (userData.user?.id) {
      localStorage.setItem("userId", userData.user.id); // ✅ Store userId
    } else {
      console.error("User ID not found in response");
    }
  
    if (userData.user?.email) {
      localStorage.setItem("userEmail", userData.user.email); // ✅ Store user email
    } else {
      console.error("User email not found in response");
    }
  
    if (userData.user?.username) {
      localStorage.setItem("userUsername", userData.user.username); // ✅ Store user username
    } else {
      console.error("User username not found in response");
    }
  
    if (userData.token) {
      localStorage.setItem("token", userData.token); // Store the token
    }
  };
  
  const logoutUser = () => {
    setUser(null);
    setToken("");
    setCart([]);
  };

  const addToCart = (property) => {
    setCart((prevCart) => [...prevCart, property]);
  };

  const removeFromCart = (propertyId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== propertyId));
  };

  return (
    <UserContext.Provider value={{ user, token, cart, loginUser, logoutUser, addToCart, removeFromCart }}>
      {children}
    </UserContext.Provider>
  );
};