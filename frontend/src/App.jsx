import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { NotificationProvider } from './context/NotificationContext'
import { ThemeProvider } from './context/ThemeContext'
import ProtectedRoute from './routes/ProtectedRoute'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Forecast from './pages/Forecast'
import ForecastHistory from './pages/ForecastHistory'
import UploadDataset from './pages/UploadDataset'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import AdminDashboard from './pages/AdminDashboard'
import NotificationsPage from './pages/Notifications'
import RealTimeDashboard from './pages/RealTimeDashboard'
import RoleManagement from './pages/RoleManagement'
import SystemMonitor from './pages/SystemMonitor'
import AdvancedAnalytics from './pages/AdvancedAnalytics'
import MLOps from './pages/MLOps'

// Phase 4 pages
import SmartAutomation from './pages/SmartAutomation'
import EnterpriseIntegrations from './pages/EnterpriseIntegrations'
import AIFeatures from './pages/AIFeatures'
import ForecastComparison from './pages/ForecastComparison'
import UserManagement from './pages/UserManagement'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/forecast" element={<ProtectedRoute><Forecast /></ProtectedRoute>} />
              <Route path="/forecast/history" element={<ProtectedRoute><ForecastHistory /></ProtectedRoute>} />
              <Route path="/upload" element={<ProtectedRoute><UploadDataset /></ProtectedRoute>} />
              <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
              <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
              <Route path="/realtime" element={<ProtectedRoute><RealTimeDashboard /></ProtectedRoute>} />
              <Route path="/roles" element={<ProtectedRoute><RoleManagement /></ProtectedRoute>} />
              <Route path="/system" element={<ProtectedRoute><SystemMonitor /></ProtectedRoute>} />
              <Route path="/analytics" element={<ProtectedRoute><AdvancedAnalytics /></ProtectedRoute>} />
              <Route path="/mlops" element={<ProtectedRoute><MLOps /></ProtectedRoute>} />
              {/* Phase 4 */}
              <Route path="/automation" element={<ProtectedRoute><SmartAutomation /></ProtectedRoute>} />
              <Route path="/integrations" element={<ProtectedRoute><EnterpriseIntegrations /></ProtectedRoute>} />
              <Route path="/ai-features" element={<ProtectedRoute><AIFeatures /></ProtectedRoute>} />
              <Route path="/forecast-comparison" element={<ProtectedRoute><ForecastComparison /></ProtectedRoute>} />
              <Route path="/user-management" element={<ProtectedRoute><UserManagement /></ProtectedRoute>} />
            </Routes>
          </BrowserRouter>
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
