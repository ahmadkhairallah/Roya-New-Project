import React from "react";
import { ThemeProvider } from "../../context/ThemeContext";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <Header />
      <div className="container">
        <div className="content-wrapper">
          <Sidebar />
          <main className="main-content">{children}</main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;