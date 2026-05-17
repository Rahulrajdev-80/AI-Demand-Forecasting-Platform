// src/layouts/MainLayout.jsx

import React from "react";

import {
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  LayoutDashboard,
  Upload,
  TrendingUp,
  FileText,
  Brain,
} from "lucide-react";

export default function MainLayout() {

  const navigate = useNavigate();

  const location = useLocation();

  return (

    <div className="
      flex
      min-h-screen