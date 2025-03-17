import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function DashboardLayout() {
    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex items-center justify-between px-6 py-4 border-b">
                    <h1 className="text-2xl font-bold">Notaría Mapiri</h1>
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                    </div>
                </header>
                <main className="flex-1 overflow-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}