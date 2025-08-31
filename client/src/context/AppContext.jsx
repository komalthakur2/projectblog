
import { createContext, useContext, useEffect, useState } from 'react';
import axiosLib from "axios";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setTokenState] = useState(localStorage.getItem('token') || null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");
  const axios = axiosLib.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  });
  axios.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get('/api/blog/all');
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  const setToken = (newToken) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
    setTokenState(newToken);
  };

  const logout = () => {
    setToken(null);
    navigate("/login");
    toast.success("Logged out successfully");
  };

  const value = {
    axios,
    navigate,
    token,
    setToken,
    logout,
    blogs,
    setBlogs,
    input,
    setInput,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
