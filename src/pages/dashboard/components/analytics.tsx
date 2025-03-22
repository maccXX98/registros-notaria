import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Sample data for charts
const clientsData = [
    { name: "Ene", nuevos: 8, recurrentes: 12 },
    { name: "Feb", nuevos: 12, recurrentes: 15 },
    { name: "Mar", nuevos: 7, recurrentes: 18 },
    { name: "Abr", nuevos: 13, recurrentes: 14 },
    { name: "May", nuevos: 10, recurrentes: 20 },
    { name: "Jun", nuevos: 15, recurrentes: 23 },
];

const financialBreakdown = [
    { category: "Poderes", amount: 4800, percentage: 35 },
    { category: "Escrituras", amount: 3400, percentage: 25 },
    { category: "Testamentos", amount: 2000, percentage: 15 },
    { category: "Certificaciones", amount: 3500, percentage: 25 },
];

export function DashboardAnalytics() {
    return (
        <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Tendencia de Clientes</CardTitle>
                        <CardDescription>Nuevos vs. Recurrentes</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart data={clientsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="nuevos" stroke="var(--chart-2)" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="recurrentes" stroke="var(--chart-4)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Resumen Financiero</CardTitle>
                        <CardDescription>Desglose de ingresos</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {financialBreakdown.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-full flex-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">{item.category}</span>
                                            <span className="text-sm font-medium">Bs. {item.amount.toLocaleString()}</span>
                                        </div>
                                        <div className="mt-1 h-2 w-full rounded-full bg-muted">
                                            <div
                                                className="h-2 rounded-full bg-primary"
                                                style={{ width: `${item.percentage}%` }}
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