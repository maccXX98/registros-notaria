import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Line } from "recharts";

// Sample data for charts
const monthlyPaymentsData = [
    { name: "Ene", total: 1500 },
    { name: "Feb", total: 2300 },
    { name: "Mar", total: 1800 },
    { name: "Abr", total: 2100 },
    { name: "May", total: 2800 },
    { name: "Jun", total: 3200 },
];

const paymentMethodData = [
    { method: "Efectivo", amount: 7500 },
    { method: "Transferencia", amount: 5200 },
    { method: "Tarjeta", amount: 1000 },
];

const recentPayments = [
    { id: "PAY-2023-045", document: "Poder Notarial", client: "María López", amount: 800, date: "15/06/2023", method: "Transferencia" },
    { id: "PAY-2023-044", document: "Certificación de Documentos", client: "Carlos Mamani", amount: 350, date: "14/06/2023", method: "Efectivo" },
    { id: "PAY-2023-043", document: "Escritura de Donación", client: "Roberto Quispe", amount: 950, date: "12/06/2023", method: "Efectivo" },
    { id: "PAY-2023-041", document: "Certificación de Firmas", client: "Carla Mendoza", amount: 250, date: "10/06/2023", method: "Tarjeta" },
    { id: "PAY-2023-040", document: "Poder Especial", client: "Jorge Vargas", amount: 750, date: "08/06/2023", method: "Transferencia" },
];

export function PaymentsOverview() {
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
                        <CardTitle className="text-sm font-medium">Pagos Pendientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Bs. 4,450</div>
                        <p className="text-xs text-muted-foreground">-8% respecto al mes anterior</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pagos del Mes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Bs. 3,200</div>
                        <p className="text-xs text-muted-foreground">+12% respecto al mes anterior</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Facturas Emitidas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">28</div>
                        <p className="text-xs text-muted-foreground">+5% respecto al mes anterior</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Ingresos Mensuales</CardTitle>
                        <CardDescription>Evolución de los últimos 6 meses</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart data={monthlyPaymentsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="total" stroke="var(--chart-1)" strokeWidth={2} dot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Métodos de Pago</CardTitle>
                        <CardDescription>Distribución por método</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {paymentMethodData.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-full flex-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">{item.method}</span>
                                            <span className="text-sm font-medium">Bs. {item.amount.toLocaleString()}</span>
                                        </div>
                                        <div className="mt-1 h-2 w-full rounded-full bg-muted">
                                            <div
                                                className="h-2 rounded-full bg-primary"
                                                style={{
                                                    width: `${(item.amount / paymentMethodData.reduce((acc, curr) => acc + curr.amount, 0) * 100).toFixed(0)}%`
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