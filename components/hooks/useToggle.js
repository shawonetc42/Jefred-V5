"use client";
import { useState } from "react";

export default function useToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, toggle];
}
