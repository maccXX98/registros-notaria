import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Pie, Cell } from "recharts";

// Sample data for charts
const monthlyIncomeData = [
    { name: "Ene", total: 1500 },
    { name: "Feb", total: 2300 },
    { name: "Mar", total: 1800 },
    { name: "Abr", total: 2100 },
    { name: "May", total: 2800 },
    { name: "Jun", total: 3200 },
];

const documentTypeData = [
    { name: "Poderes", value: 35 },
    { name: "Escrituras", value: 25 },
    { name: "Testamentos", value: 15 },
    { name: "Certificaciones", value: 25 },
];

const clientsData = [
    { name: "Ene", nuevos: 10, recurrentes: 25 },
    { name: "Feb", nuevos: 15, recurrentes: 30 },
    { name: "Mar", nuevos: 12, recurrentes: 28 },
    { name: "Abr", nuevos: 18, recurrentes: 32 },
    { name: "May", nuevos: 20, recurrentes: 35 },
    { name: "Jun", nuevos: 22, recurrentes: 38 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

                <TabsContent value="overview" className="space-y-4">
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
                                <CardTitle className="text-sm font-medium">Documentos Procesados</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">245</div>
                                <p className="text-xs text-muted-foreground">+5% respecto al mes anterior</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Clientes Nuevos</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">22</div>
                                <p className="text-xs text-muted-foreground">+10% respecto al mes anterior</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Documentos Pendientes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">18</div>
                                <p className="text-xs text-muted-foreground">-12% respecto al mes anterior</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Ingresos Mensuales</CardTitle>
                                <CardDescription>Ingresos de los últimos 6 meses</CardDescription>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <ResponsiveContainer width="100%" height={350}>
                                    <BarChart data={monthlyIncomeData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="total" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Tipos de Documentos</CardTitle>
                                <CardDescription>Distribución por tipo</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={350}>
                                    <PieChart>
                                        <Pie
                                            data={documentTypeData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        >
                                            {documentTypeData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="analytics" className="space-y-4">
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
                                    <div className="flex items-center">
                                        <div className="w-full flex-1">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium">Poderes</span>
                                                <span className="text-sm font-medium">Bs. 4,800</span>
                                            </div>
                                            <div className="mt-1 h-2 w-full rounded-full bg-muted">
                                                <div className="h-2 rounded-full bg-primary" style={{ width: '35%' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-full flex-1">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium">Escrituras</span>
                                                <span className="text-sm font-medium">Bs. 3,400</span>
                                            </div>
                                            <div className="mt-1 h-2 w-full rounded-full bg-muted">
                                                <div className="h-2 rounded-full bg-chart-2" style={{ width: '25%' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-full flex-1">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium">Testamentos</span>
                                                <span className="text-sm font-medium">Bs. 2,000</span>
                                            </div>
                                            <div className="mt-1 h-2 w-full rounded-full bg-muted">
                                                <div className="h-2 rounded-full bg-chart-3" style={{ width: '15%' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-full flex-1">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium">Certificaciones</span>
                                                <span className="text-sm font-medium">Bs. 3,500</span>
                                            </div>
                                            <div className="mt-1 h-2 w-full rounded-full bg-muted">
                                                <div className="h-2 rounded-full bg-chart-4" style={{ width: '25%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}