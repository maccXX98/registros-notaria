import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from "recharts";

// Sample data for charts
const monthlyFinancialData = [
    { name: "Ene", ingresos: 1500, gastos: 800 },
    { name: "Feb", ingresos: 2300, gastos: 1200 },
    { name: "Mar", ingresos: 1800, gastos: 900 },
    { name: "Abr", ingresos: 2100, gastos: 1100 },
    { name: "May", ingresos: 2800, gastos: 1300 },
    { name: "Jun", ingresos: 3200, gastos: 1500 },
];

const expenseCategories = [
    { category: "Alquiler", amount: 1500 },
    { category: "Servicios", amount: 800 },
    { category: "Suministros", amount: 600 },
    { category: "Personal", amount: 2500 },
    { category: "Otros", amount: 400 },
];

export function AccountingOverview() {
    return (
        <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Bs. 13,700</div>
                        <p className="text-xs text-muted-foreground">+15% respecto al mes anterior</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Gastos Totales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Bs. 5,800</div>
                        <p className="text-xs text-muted-foreground">+8% respecto al mes anterior</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Bs. 7,900</div>
                        <p className="text-xs text-muted-foreground">+20% respecto al mes anterior</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Facturas Pendientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">-5% respecto al mes anterior</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Ingresos vs Gastos</CardTitle>
                        <CardDescription>Comparativa de los últimos 6 meses</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={monthlyFinancialData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="ingresos" name="Ingresos" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="gastos" name="Gastos" fill="var(--chart-4)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Desglose de Gastos</CardTitle>
                        <CardDescription>Categorías principales</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {expenseCategories.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-full flex-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">{item.category}</span>
                                            <span className="text-sm font-medium">Bs. {item.amount.toLocaleString()}</span>
                                        </div>
                                        <div className="mt-1 h-2 w-full rounded-full bg-muted">
                                            <div
                                                className="h-2 rounded-full bg-primary"
                                                style={{
                                                    width: `${(item.amount / expenseCategories.reduce((acc, curr) => acc + curr.amount, 0) * 100).toFixed(0)}%`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}