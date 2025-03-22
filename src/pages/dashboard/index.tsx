import { DashboardOverview } from "./components/overview";
import { DashboardAnalytics } from "./components/analytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Dashboard() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Vista General</TabsTrigger>
                    <TabsTrigger value="analytics">Análisis</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <DashboardOverview />
                </TabsContent>

                <TabsContent value="analytics">
                    <DashboardAnalytics />
                </TabsContent>
            </Tabs>
        </div>
    );
}