import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
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
                </TabsContent>

                <TabsContent value="income" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Registro de Ingresos</CardTitle>
                            <CardDescription>Historial de ingresos recientes</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border">
                                <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
                                    <div>Fecha</div>
                                    <div>Concepto</div>
                                    <div>Cliente</div>
                                    <div>Método de Pago</div>
                                    <div className="text-right">Monto</div>
                                </div>
                                <div className="divide-y">
                                    {[
                                        { date: "15/06/2023", concept: "Escritura de Compraventa", client: "Juan Pérez", method: "Efectivo", amount: 1200 },
                                        { date: "12/06/2023", concept: "Poder Notarial", client: "María López", method: "Transferencia", amount: 800 },
                                        { date: "10/06/2023", concept: "Certificación de Documentos", client: "Carlos Mamani", method: "Efectivo", amount: 350 },
                                        { date: "05/06/2023", concept: "Testamento", client: "Ana Flores", method: "Transferencia", amount: 1500 },
                                        { date: "01/06/2023", concept: "Escritura de Donación", client: "Roberto Quispe", method: "Efectivo", amount: 950 },
                                    ].map((item, index) => (
                                        <div key={index} className="grid grid-cols-5 px-4 py-3">
                                            <div>{item.date}</div>
                                            <div>{item.concept}</div>
                                            <div>{item.client}</div>
                                            <div>{item.method}</div>
                                            <div className="text-right">Bs. {item.amount.toLocaleString()}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="expenses" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Registro de Gastos</CardTitle>
                            <CardDescription>Historial de gastos recientes</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border">
                                <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
                                    <div>Fecha</div>
                                    <div>Concepto</div>
                                    <div>Categoría</div>
                                    <div>Método de Pago</div>
                                    <div className="text-right">Monto</div>
                                </div>
                                <div className="divide-y">
                                    {[
                                        { date: "14/06/2023", concept: "Pago de Alquiler", category: "Alquiler", method: "Transferencia", amount: 1500 },
                                        { date: "10/06/2023", concept: "Suministros de Oficina", category: "Suministros", method: "Efectivo", amount: 350 },
                                        { date: "08/06/2023", concept: "Pago de Internet", category: "Servicios", method: "Transferencia", amount: 200 },
                                        { date: "05/06/2023", concept: "Salario Asistente", category: "Personal", method: "Transferencia", amount: 2500 },
                                        { date: "01/06/2023", concept: "Mantenimiento Equipo", category: "Otros", method: "Efectivo", amount: 400 },
                                    ].map((item, index) => (
                                        <div key={index} className="grid grid-cols-5 px-4 py-3">
                                            <div>{item.date}</div>
                                            <div>{item.concept}</div>
                                            <div>{item.category}</div>
                                            <div>{item.method}</div>
                                            <div className="text-right">Bs. {item.amount.toLocaleString()}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="reports" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Reportes Financieros</CardTitle>
                            <CardDescription>Informes mensuales y anuales</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base">Reporte Mensual</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Mes Actual:</span>
                                                    <span className="text-sm font-medium">Junio 2023</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Total Ingresos:</span>
                                                    <span className="text-sm font-medium">Bs. 3,200</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Total Gastos:</span>
                                                    <span className="text-sm font-medium">Bs. 1,500</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Balance:</span>
                                                    <span className="text-sm font-medium">Bs. 1,700</span>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <Button variant="outline" className="w-full">Descargar Reporte</Button>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base">Reporte Anual</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Año Actual:</span>
                                                    <span className="text-sm font-medium">2023</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Total Ingresos:</span>
                                                    <span className="text-sm font-medium">Bs. 13,700</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Total Gastos:</span>
                                                    <span className="text-sm font-medium">Bs. 5,800</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Balance:</span>
                                                    <span className="text-sm font-medium">Bs. 7,900</span>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <Button variant="outline" className="w-full">Descargar Reporte</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Tendencia Anual</CardTitle>
                                        <CardDescription>Evolución financiera del año</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pl-2">
                                        <ResponsiveContainer width="100%" height={350}>
                                            <LineChart data={monthlyFinancialData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Line type="monotone" dataKey="ingresos" name="Ingresos" stroke="var(--chart-1)" strokeWidth={2} />
                                                <Line type="monotone" dataKey="gastos" name="Gastos" stroke="var(--chart-4)" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </CardContent>
                                </Card>

                                <div className="grid gap-4 md:grid-cols-3">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base">Reporte de Impuestos</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Impuestos Pagados:</span>
                                                    <span className="text-sm font-medium">Bs. 2,500</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Próximo Pago:</span>
                                                    <span className="text-sm font-medium">15/07/2023</span>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <Button variant="outline" className="w-full">Ver Detalles</Button>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base">Reporte de Clientes</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Total Clientes:</span>
                                                    <span className="text-sm font-medium">87</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Nuevos este mes:</span>
                                                    <span className="text-sm font-medium">12</span>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <Button variant="outline" className="w-full">Ver Detalles</Button>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-base">Reporte de Servicios</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Servicios Realizados:</span>
                                                    <span className="text-sm font-medium">45</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm">Servicio más solicitado:</span>
                                                    <span className="text-sm font-medium">Escrituras</span>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <Button variant="outline" className="w-full">Ver Detalles</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}