import { Link } from "react-router-dom";
import { BarChart3, FileText, Users, CreditCard, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
    icon: React.ReactNode;
    title: string;
    to: string;
    active?: boolean;
}

function SidebarItem({ icon, title, to, active }: SidebarItemProps) {
    return (
        <Link
            to={to}
            className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground"
            )}
        >
            {icon}
            <span>{title}</span>
        </Link>
    );
}

export function Sidebar() {
    return (
        <div className="flex h-screen w-64 flex-col border-r bg-sidebar">
            <div className="flex h-14 items-center border-b px-4">
                <h2 className="text-lg font-semibold text-sidebar-foreground">Notaría Mapiri</h2>
            </div>
            <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-2 text-sm font-medium">
                    <div className="px-3 py-2">
                        <h3 className="mb-2 text-xs font-semibold text-sidebar-foreground/70">General</h3>
                        <div className="space-y-1">
                            <SidebarItem
                                icon={<Home className="h-4 w-4" />}
                                title="Dashboard"
                                to="/"
                                active
                            />
                        </div>
                    </div>
                    <div className="px-3 py-2">
                        <h3 className="mb-2 text-xs font-semibold text-sidebar-foreground/70">Módulos</h3>
                        <div className="space-y-1">
                            <SidebarItem
                                icon={<BarChart3 className="h-4 w-4" />}
                                title="Contabilidad"
                                to="/accounting"
                            />
                            <SidebarItem
                                icon={<FileText className="h-4 w-4" />}
                                title="Documentos"
                                to="/documents"
                            />
                            <SidebarItem
                                icon={<Users className="h-4 w-4" />}
                                title="Clientes"
                                to="/clients"
                            />
                            <SidebarItem
                                icon={<CreditCard className="h-4 w-4" />}
                                title="Pagos"
                                to="/payments"
                            />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}