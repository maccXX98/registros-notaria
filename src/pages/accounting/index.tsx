import { AccountingOverview } from "./components/overview";
import { AccountingIncome } from "./components/income";
import { AccountingExpenses } from "./components/expenses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export function Accounting() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Contabilidad</h2>
                <div className="flex items-center space-x-2">
                    <Button>Nuevo Ingreso</Button>
                    <Button variant="outline">Nuevo Gasto</Button>
                </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Resumen</TabsTrigger>
                    <TabsTrigger value="income">Ingresos</TabsTrigger>
                    <TabsTrigger value="expenses">Gastos</TabsTrigger>
                    <TabsTrigger value="reports">Reportes</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <AccountingOverview />
                </TabsContent>

                <TabsContent value="income">
                    <AccountingIncome />
                </TabsContent>

                <TabsContent value="expenses">
                    <AccountingExpenses />
                </TabsContent>

                <TabsContent value="reports" className="space-y-4">
                    {/* TODO: Implement reports component */}
                </TabsContent>
            </Tabs>
        </div>
    );
}