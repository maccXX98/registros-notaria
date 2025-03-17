import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
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

const pendingPayments = [
    { id: "PAY-2023-042", document: "Escritura de Compraventa", client: "Juan Pérez", amount: 1200, dueDate: "20/06/2023" },
    { id: "PAY-2023-039", document: "Testamento", client: "Ana Flores", amount: 1500, dueDate: "22/06/2023" },
    { id: "PAY-2023-036", document: "Poder Especial", client: "Luis Torrez", amount: 800, dueDate: "25/06/2023" },
    { id: "PAY-2023-033", document: "Contrato de Arrendamiento", client: "Patricia Condori", amount: 950, dueDate: "28/06/2023" },
];

const recentPayments = [
    { id: "PAY-2023-045", document: "Poder Notarial", client: "María López", amount: 800, date: "15/06/2023", method: "Transferencia" },
    { id: "PAY-2023-044", document: "Certificación de Documentos", client: "Carlos Mamani", amount: 350, date: "14/06/2023", method: "Efectivo" },
    { id: "PAY-2023-043", document: "Escritura de Donación", client: "Roberto Quispe", amount: 950, date: "12/06/2023", method: "Efectivo" },
    { id: "PAY-2023-041", document: "Certificación de Firmas", client: "Carla Mendoza", amount: 250, date: "10/06/2023", method: "Tarjeta" },
    { id: "PAY-2023-040", document: "Poder Especial", client: "Jorge Vargas", amount: 750, date: "08/06/2023", method: "Transferencia" },
];

export function Payments() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Pagos</h2>
                <div className="flex items-center space-x-2">
                    <Button>Registrar Pago</Button>
                    <Button variant="outline">Generar Factura</Button>
                </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Resumen</TabsTrigger>
                    <TabsTrigger value="pending">Pendientes</TabsTrigger>
                    <TabsTrigger value="register">Registro</TabsTrigger>
                    <TabsTrigger value="history">Historial</TabsTrigger>
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
                </TabsContent>

                <TabsContent value="pending" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pagos Pendientes</CardTitle>
                            <CardDescription>Documentos con pagos por realizar</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border">
                                <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
                                    <div>ID</div>
                                    <div>Documento</div>
                                    <div>Cliente</div>
                                    <div>Fecha Límite</div>
                                    <div className="text-right">Monto</div>
                                </div>
                                <div className="divide-y">
                                    {pendingPayments.map((payment, index) => (
                                        <div key={index} className="grid grid-cols-5 px-4 py-3">
                                            <div>{payment.id}</div>
                                            <div>{payment.document}</div>
                                            <div>{payment.client}</div>
                                            <div>{payment.dueDate}</div>
                                            <div className="text-right">Bs. {payment.amount.toLocaleString()}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-end mt-4 space-x-2">
                                <Button variant="outline">Enviar Recordatorio</Button>
                                <Button>Registrar Pago</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="register" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Registro de Pago</CardTitle>
                            <CardDescription>Ingrese la información del pago</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Documento</label>
                                        <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                                            <option value="">Seleccionar...</option>
                                            <option value="1">DOC-2023-154 - Testamento</option>
                                            <option value="2">DOC-2023-152 - Escritura de Donación</option>
                                            <option value="3">DOC-2023-149 - Poder Especial</option>
                                            <option value="4">DOC-2023-147 - Contrato de Arrendamiento</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Cliente</label>
                                        <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                                            <option value="">Seleccionar...</option>
                                            <option value="1">Juan Pérez</option>
                                            <option value="2">María López</option>
                                            <option value="3">Ana Flores</option>
                                            <option value="4">Luis Torrez</option>
                                            <option value="5">Patricia Condori</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Monto</label>
                                        <input type="number" className="w-full rounded-md border border-input bg-background px-3 py-2" placeholder="Bs." />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Fecha de Pago</label>
                                        <input type="date" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Método de Pago</label>
                                        <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                                            <option value="">Seleccionar...</option>
                                            <option value="efectivo">Efectivo</option>
                                            <option value="transferencia">Transferencia</option>
                                            <option value="tarjeta">Tarjeta</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Número de Comprobante</label>
                                        <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Observaciones</label>
                                    <textarea className="w-full rounded-md border border-input bg-background px-3 py-2" rows={2}></textarea>
                                </div>

                                <div className="flex justify-end space-x-2">
                                    <Button variant="outline">Cancelar</Button>
                                    <Button>Registrar Pago</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Historial de Pagos</CardTitle>
                            <CardDescription>Registro histórico de pagos realizados</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <div className="grid flex-1 gap-2">
                                        <label className="text-sm font-medium">Buscar Pago</label>
                                        <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2" placeholder="ID o cliente" />
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">Filtrar por Fecha</label>
                                        <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                                            <option value="all">Todos</option>
                                            <option value="month">Último Mes</option>
                                            <option value="quarter">Último Trimestre</option>
                                            <option value="year">Último Año</option>
                                        </select>
                                    </div>
                                    <div className="mt-6">
                                        <Button>Buscar</Button>
                                    </div>
                                </div>

                                <div className="rounded-md border">
                                    <div className="grid grid-cols-6 border-b px-4 py-3 font-medium">
                                        <div>ID</div>
                                        <div>Documento</div>
                                        <div>Cliente</div>
                                        <div>Fecha</div>
                                        <div>Método</div>
                                        <div className="text-right">Monto</div>
                                    </div>
                                    <div className="divide-y">
                                        {[
                                            ...recentPayments,
                                            { id: "PAY-2023-038", document: "Acta de Nacimiento", client: "Luis Torrez", amount: 200, date: "05/06/2023", method: "Efectivo" },
                                            { id: "PAY-2023-037", document: "Certificación de Documentos", client: "María López", amount: 350, date: "03/06/2023", method: "Efectivo" },
                                            { id: "PAY-2023-035", document: "Escritura de Compraventa", client: "Pedro Flores", amount: 1200, date: "01/06/2023", method: "Transferencia" },
                                            { id: "PAY-2023-034", document: "Poder Notarial", client: "Carla Mendoza", amount: 800, date: "30/05/2023", method: "Transferencia" },
                                            { id: "PAY-2023-032", document: "Testamento", client: "Jorge Vargas", amount: 1500, date: "28/05/2023", method: "Efectivo" },
                                            { id: "PAY-2023-031", document: "Certificación de Firmas", client: "Roberto Quispe", amount: 250, date: "25/05/2023", method: "Tarjeta" },
                                            { id: "PAY-2023-030", document: "Contrato de Alquiler", client: "Ana Flores", amount: 950, date: "22/05/2023", method: "Transferencia" },
                                        ].map((payment, index) => (
                                            <div key={index} className="grid grid-cols-6 px-4 py-3">
                                                <div>{payment.id}</div>
                                                <div>{payment.document}</div>
                                                <div>{payment.client}</div>
                                                <div>{payment.date}</div>
                                                <div>
                                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${payment.method === 'Efectivo'
                                                        ? 'bg-green-100 text-green-800'
                                                        : payment.method === 'Transferencia'
                                                            ? 'bg-blue-100 text-blue-800'
                                                            : 'bg-purple-100 text-purple-800'
                                                        }`}>
                                                        {payment.method}
                                                    </span>
                                                </div>
                                                <div className="text-right">Bs. {payment.amount.toLocaleString()}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-muted-foreground">
                                        Mostrando 12 de 45 pagos
                                    </div>
                                    <div className="flex space-x-1">
                                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">1</Button>
                                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">2</Button>
                                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">3</Button>
                                        <span className="flex items-center justify-center w-8 h-8">...</span>
                                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">4</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Resumen de Facturación</CardTitle>
                            <CardDescription>Facturas emitidas por mes</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={[
                                    { name: "Ene", facturas: 18 },
                                    { name: "Feb", facturas: 22 },
                                    { name: "Mar", facturas: 20 },
                                    { name: "Abr", facturas: 25 },
                                    { name: "May", facturas: 27 },
                                    { name: "Jun", facturas: 28 },
                                ]}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="facturas" name="Facturas Emitidas" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                            <div className="mt-4 flex justify-end">
                                <Button variant="outline">Descargar Reporte</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}