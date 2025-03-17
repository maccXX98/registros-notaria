import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Dashboard } from "@/pages/dashboard";
import { Accounting } from "@/pages/accounting";
import { Documents } from "@/pages/documents";
import { Clients } from "@/pages/clients";
import { Payments } from "@/pages/payments";
import "./App.css"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="notaria-theme">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="accounting" element={<Accounting />} />
            <Route path="documents" element={<Documents />} />
            <Route path="clients" element={<Clients />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
