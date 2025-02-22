import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#121212",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "6px solid rgba(255, 255, 255, 0.3)",
          borderTop: "6px solid #ffffff",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        style={{ marginTop: "20px", fontSize: "20px", opacity: 0.8 }}
      >
        Loading, please wait...
      </motion.p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
