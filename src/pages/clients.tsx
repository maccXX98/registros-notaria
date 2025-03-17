import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
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

export function Clients() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Clientes</h2>
                <div className="flex items-center space-x-2">
                    <Button>Nuevo Cliente</Button>
                    <Button variant="outline">Buscar</Button>
                </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Resumen</TabsTrigger>
                    <TabsTrigger value="register">Registro</TabsTrigger>
                    <TabsTrigger value="directory">Directorio</TabsTrigger>
                    <TabsTrigger value="history">Historial</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
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
                </TabsContent>

                <TabsContent value="register" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Registro de Cliente</CardTitle>
                            <CardDescription>Ingrese la información del nuevo cliente</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Tipo de Cliente</label>
                                        <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                                            <option value="">Seleccionar...</option>
                                            <option value="persona">Persona Natural</option>
                                            <option value="empresa">Empresa</option>
                                            <option value="institucion">Institución Pública</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Documento de Identidad</label>
                                        <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2" placeholder="CI / NIT" />
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Nombre / Razón Social</label>
                                        <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Apellido / Representante Legal</label>
                                        <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Teléfono</label>
                                        <input type="tel" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Correo Electrónico</label>
                                        <input type="email" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Dirección</label>
                                    <textarea className="w-full rounded-md border border-input bg-background px-3 py-2" rows={2}></textarea>
                                </div>

                                <div className="flex justify-end space-x-2">
                                    <Button variant="outline">Cancelar</Button>
                                    <Button>Guardar Cliente</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="directory" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Directorio de Clientes</CardTitle>
                            <CardDescription>Lista completa de clientes registrados</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border">
                                <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
                                    <div>ID</div>
                                    <div>Nombre</div>
                                    <div>Teléfono</div>
                                    <div>Correo</div>
                                    <div>Fecha Registro</div>
                                </div>
                                <div className="divide-y">
                                    {[
                                        ...recentClients,
                                        { id: "CLI-2023-037", name: "Patricia Condori", phone: "75678901", email: "patricia.condori@gmail.com", date: "05/06/2023" },
                                        { id: "CLI-2023-036", name: "Luis Torrez", phone: "78901234", email: "luis.torrez@gmail.com", date: "03/06/2023" },
                                        { id: "CLI-2023-035", name: "Carla Mendoza", phone: "79012345", email: "carla.mendoza@gmail.com", date: "01/06/2023" },
                                    ].map((client, index) => (
                                        <div key={index} className="grid grid-cols-5 px-4 py-3">
                                            <div>{client.id}</div>
                                            <div>{client.name}</div>
                                            <div>{client.phone}</div>
                                            <div>{client.email}</div>
                                            <div>{client.date}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center mt-4">
                                <div className="flex space-x-1">
                                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">1</Button>
                                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">2</Button>
                                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">3</Button>
                                    <span className="flex items-center justify-center w-8 h-8">...</span>
                                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">10</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Historial de Servicios por Cliente</CardTitle>
                            <CardDescription>Registro de trámites y documentos</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <div className="grid flex-1 gap-2">
                                        <label className="text-sm font-medium">Buscar Cliente</label>
                                        <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2" placeholder="Nombre o ID del cliente" />
                                    </div>
                                    <div className="mt-6">
                                        <Button>Buscar</Button>
                                    </div>
                                </div>

                                <div className="rounded-md border">
                                    <div className="grid grid-cols-6 border-b px-4 py-3 font-medium">
                                        <div>Cliente</div>
                                        <div>Documento</div>
                                        <div>Tipo</div>
                                        <div>Fecha</div>
                                        <div>Estado</div>
                                        <div>Acciones</div>
                                    </div>
                                    <div className="divide-y">
                                        {[
                                            { client: "María López", document: "Escritura de Compraventa", type: "Notarial", date: "15/06/2023", status: "Completado" },
                                            { client: "Juan Pérez", document: "Poder Notarial", type: "Notarial", date: "14/06/2023", status: "Completado" },
                                            { client: "Ana Flores", document: "Testamento", type: "Notarial", date: "12/06/2023", status: "En proceso" },
                                            { client: "Carlos Mamani", document: "Certificación de Documentos", type: "Certificación", date: "10/06/2023", status: "Completado" },
                                            { client: "Roberto Quispe", document: "Escritura de Donación", type: "Notarial", date: "08/06/2023", status: "Completado" },
                                            { client: "Patricia Condori", document: "Contrato de Alquiler", type: "Contrato", date: "05/06/2023", status: "Completado" },
                                            { client: "Luis Torrez", document: "Acta de Nacimiento", type: "Certificación", date: "03/06/2023", status: "Completado" },
                                        ].map((item, index) => (
                                            <div key={index} className="grid grid-cols-6 px-4 py-3">
                                                <div>{item.client}</div>
                                                <div>{item.document}</div>
                                                <div>{item.type}</div>
                                                <div>{item.date}</div>
                                                <div>
                                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${item.status === "Completado"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-yellow-100 text-yellow-800"
                                                        }`}>
                                                        {item.status}
                                                    </span>
                                                </div>
                                                <div>
                                                    <Button variant="ghost" size="sm">Ver detalles</Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-muted-foreground">
                                        Mostrando 7 de 42 registros
                                    </div>
                                    <div className="flex space-x-1">
                                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">1</Button>
                                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">2</Button>
                                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">3</Button>
                                        <span className="flex items-center justify-center w-8 h-8">...</span>
                                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">6</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}