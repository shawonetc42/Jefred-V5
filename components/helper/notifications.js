"use client";
import React, { useState, useEffect } from "react";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Notification will disappear after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="absolute bottom-0 right-0 mb-4 mr-4 bg-green-400 text-white p-2 rounded-md shadow-md">
      {message}
    </div>
  );
};

export default Notification;
