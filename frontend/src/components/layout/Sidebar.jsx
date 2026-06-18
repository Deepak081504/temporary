import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '🏠' },
  { to: '/upload', label: 'Upload Dataset', icon: '📤' },
  { to: '/forecast', label: 'Forecast', icon: '📈' },
  { to: '/forecast/history', label: 'Forecast History', icon: '🗂️' },
  { to: '/forecast-comparison', label: 'Model Comparison', icon: '⚖️' },
  { to: '/reports', label: 'Reports', icon: '📄' },
  { to: '/analytics', label: 'Advanced Analytics', icon: '🔬' },
  { to: '/ai-features', label: 'AI Features', icon: '🧠' },
  { to: '/realtime', label: 'Real-Time Monitor', icon: '⚡' },
  { to: '/notifications', label: 'Notifications', icon: '🔔' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
]

const adminItems = [
  { to: '/admin', label: 'Admin Dashboard', icon: '🛡️' },
  { to: '/user-management', label: 'User Management', icon: '👥' },
  { to: '/roles', label: 'Role Management', icon: '🔐' },
  { to: '/automation', label: 'Smart Automation', icon: '🗓️' },
  { to: '/integrations', label: 'Integrations', icon: '🔌' },
  { to: '/system', label: 'System Monitor', icon: '🖥️' },
  { to: '/mlops', label: 'ML Ops', icon: '🤖' },
]

export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation()
  const { user, logout } = useAuth()
  const isActive = (path) => location.pathname === path

  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} min-h-screen bg-[#1B1538] border-r border-[#312B56] flex flex-col transition-all duration-300 flex-shrink-0`}>
      <div className="p-4 flex items-center justify-between border-b border-[#312B56]">
        {!collapsed && (
          <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">AI Forecast</h1>
        )}
        <button onClick={onToggle}
          className="p-2 rounded-lg hover:bg-[#312B56] text-gray-400 hover:text-white transition ml-auto"
          title={collapsed ? 'Expand' : 'Collapse'}>
          {collapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map(item => (
          <Link key={item.to} to={item.to}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm
              ${isActive(item.to) ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg' : 'text-gray-300 hover:bg-[#31265F] hover:text-white'}`}
            title={collapsed ? item.label : ''}>
            <span className="text-lg flex-shrink-0">{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}

        {!collapsed && <div className="pt-3 pb-1"><p className="text-xs text-gray-500 px-3 uppercase tracking-widest">Admin & Config</p></div>}
        {collapsed && <div className="my-2 border-t border-[#312B56]" />}

        {adminItems.map(item => (
          <Link key={item.to} to={item.to}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm
              ${isActive(item.to) ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg' : 'text-gray-300 hover:bg-[#31265F] hover:text-white'}`}
            title={collapsed ? item.label : ''}>
            <span className="text-lg flex-shrink-0">{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-3 border-t border-[#312B56]">
        {!collapsed && user && (
          <div className="mb-2 px-3">
            <p className="text-sm font-semibold text-white truncate">{user.name || 'User'}</p>
            <p className="text-xs text-gray-400 truncate">{user.role || 'Analyst'}</p>
          </div>
        )}
        <button onClick={logout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-gray-400 hover:bg-red-900/30 hover:text-red-400 transition text-sm"
          title={collapsed ? 'Logout' : ''}>
          <span className="text-lg">🚪</span>
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  )
}
