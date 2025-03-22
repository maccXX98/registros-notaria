import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// Sample data for charts
const clientGrowthData = [
    { name: "Ene", total: 120 },
    { name: "Feb", total: 132 },
    { name: "Mar", total: 141 },
    { name: "Abr", total: 158 },
    { name: "May", total: 173 },
    { name: "Jun", total: 189 },
];

const recentClients = [
    { id: "CLI-2023-042", name: "María López", phone: "71234567", email: "maria.lopez@gmail.com", date: "15/06/2023" },
    { id: "CLI-2023-041", name: "Juan Pérez", phone: "73456789", email: "juan.perez@gmail.com", date: "14/06/2023" },
    { id: "CLI-2023-040", name: "Ana Flores", phone: "76543210", email: "ana.flores@gmail.com", date: "12/06/2023" },
    { id: "CLI-2023-039", name: "Carlos Mamani", phone: "70987654", email: "carlos.mamani@gmail.com", date: "10/06/2023" },
    { id: "CLI-2023-038", name: "Roberto Quispe", phone: "72345678", email: "roberto.quispe@gmail.com", date: "08/06/2023" },
];

const clientsByType = [
    { type: "Personas Naturales", count: 145 },
    { type: "Empresas", count: 32 },
    { type: "Instituciones Públicas", count: 12 },
];

export function ClientsOverview() {
    return (
        <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Clientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">189</div>
                        <p className="text-xs text-muted-foreground">+9% respecto al mes anterior</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Clientes Nuevos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">16</div>
                        <p className="text-xs text-muted-foreground">+4% respecto al mes anterior</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Clientes Recurrentes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">38</div>
                        <p className="text-xs text-muted-foreground">+8% respecto al mes anterior</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Documentos por Cliente</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1.7</div>
                        <p className="text-xs text-muted-foreground">+0.2 respecto al mes anterior</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Crecimiento de Clientes</CardTitle>
                        <CardDescription>Evolución en los últimos 6 meses</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart data={clientGrowthData}>
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
                        <CardTitle>Clientes Recientes</CardTitle>
                        <CardDescription>Últimos 5 clientes registrados</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentClients.map((client, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-full flex-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">{client.name}</span>
                                            <span className="text-xs text-muted-foreground">{client.date}</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-1">
                                            <span className="text-xs text-muted-foreground">{client.email}</span>
                                            <span className="text-xs text-muted-foreground">{client.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {clientsByType.map((item, index) => (
                    <Card key={index}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">{item.type}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{item.count}</div>
                            <div className="mt-1 h-2 w-full rounded-full bg-muted">
                                <div
                                    className="h-2 rounded-full bg-primary"
                                    style={{
                                        width: `${(item.count / clientsByType.reduce((acc, curr) => acc + curr.count, 0) * 100).toFixed(0)}%`
                                    }}
                                ></div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}