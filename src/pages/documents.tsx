import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Sample data for charts
const documentStatusData = [
    { name: "Ene", completados: 45, pendientes: 12 },
    { name: "Feb", completados: 52, pendientes: 15 },
    { name: "Mar", completados: 48, pendientes: 10 },
    { name: "Abr", completados: 55, pendientes: 8 },
    { name: "May", completados: 60, pendientes: 12 },
    { name: "Jun", completados: 65, pendientes: 18 },
];

const recentDocuments = [
    { id: "DOC-2023-156", type: "Poder Notarial", client: "María López", date: "15/06/2023", status: "Completado" },
    { id: "DOC-2023-155", type: "Escritura de Compraventa", client: "Juan Pérez", date: "14/06/2023", status: "Completado" },
    { id: "DOC-2023-154", type: "Testamento", client: "Ana Flores", date: "12/06/2023", status: "En Proceso" },
    { id: "DOC-2023-153", type: "Certificación", client: "Carlos Mamani", date: "10/06/2023", status: "Completado" },
    { id: "DOC-2023-152", type: "Escritura de Donación", client: "Roberto Quispe", date: "08/06/2023", status: "Pendiente" },
];

const pendingDocuments = [
    { id: "DOC-2023-154", type: "Testamento", client: "Ana Flores", date: "12/06/2023", deadline: "19/06/2023", priority: "Alta" },
    { id: "DOC-2023-152", type: "Escritura de Donación", client: "Roberto Quispe", date: "08/06/2023", deadline: "22/06/2023", priority: "Media" },
    { id: "DOC-2023-149", type: "Poder Especial", client: "Luis Torrez", date: "05/06/2023", deadline: "20/06/2023", priority: "Alta" },
    { id: "DOC-2023-147", type: "Contrato de Arrendamiento", client: "Patricia Condori", date: "01/06/2023", deadline: "25/06/2023", priority: "Baja" },
];

export function Documents() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Documentos</h2>
                <div className="flex items-center space-x-2">
                    <Button>Nuevo Documento</Button>
                    <Button variant="outline">Buscar</Button>
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
                                <CardTitle className="text-sm font-medium">Total Documentos</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">325</div>
                                <p className="text-xs text-muted-foreground">+8% respecto al mes anterior</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Documentos Pendientes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">18</div>
                                <p className="text-xs text-muted-foreground">-5% respecto al mes anterior</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Documentos Completados</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">65</div>
                                <p className="text-xs text-muted-foreground">+12% respecto al mes anterior</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">3.2 días</div>
                                <p className="text-xs text-muted-foreground">-0.5 días respecto al mes anterior</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Estado de Documentos</CardTitle>
                                <CardDescription>Completados vs Pendientes</CardDescription>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <ResponsiveContainer width="100%" height={350}>
                                    <BarChart data={documentStatusData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="completados" name="Completados" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                                        <Bar dataKey="pendientes" name="Pendientes" fill="var(--chart-4)" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Documentos Recientes</CardTitle>
                                <CardDescription>Últimos 5 documentos procesados</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentDocuments.map((doc, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-full flex-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-medium">{doc.id}</span>
                                                    <span className={`text-xs px-2 py-1 rounded-full ${doc.status === 'Completado' ? 'bg-green-100 text-green-800' : doc.status === 'En Proceso' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
                                                        {doc.status}
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between mt-1">
                                                    <span className="text-xs text-muted-foreground">{doc.type}</span>
                                                    <span className="text-xs text-muted-foreground">{doc.date}</span>
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
                            <CardTitle>Documentos Pendientes</CardTitle>
                            <CardDescription>Documentos en proceso o por iniciar</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border">
                                <div className="grid grid-cols-6 border-b px-4 py-3 font-medium">
                                    <div>ID</div>
                                    <div>Tipo</div>
                                    <div>Cliente</div>
                                    <div>Fecha Inicio</div>
                                    <div>Fecha Límite</div>
                                    <div>Prioridad</div>
                                </div>
                                <div className="divide-y">
                                    {pendingDocuments.map((doc, index) => (
                                        <div key={index} className="grid grid-cols-6 px-4 py-3">
                                            <div>{doc.id}</div>
                                            <div>{doc.type}</div>
                                            <div>{doc.client}</div>
                                            <div>{doc.date}</div>
                                            <div>{doc.deadline}</div>
                                            <div>
                                                <span className={`text-xs px-2 py-1 rounded-full ${doc.priority === 'Alta' ? 'bg-red-100 text-red-800' : doc.priority === 'Media' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>
                                                    {doc.priority}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="register" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Registro de Documentos</CardTitle>
                            <CardDescription>Ingrese la información del nuevo documento</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Tipo de Documento</label>
                                        <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                                            <option value="">Seleccionar...</option>
                                            <option value="poder">Poder Notarial</option>
                                            <option value="escritura">Escritura Pública</option>
                                            <option value="testamento">Testamento</option>
                                            <option value="certificacion">Certificación</option>
                                            <option value="contrato">Contrato</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Cliente</label>
                                        <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                                            <option value="">Seleccionar...</option>
                                            <option value="1">Juan Pérez</option>
                                            <option value="2">María López</option>
                                            <option value="3">Carlos Mamani</option>
                                            <option value="4">Ana Flores</option>
                                            <option value="5">Roberto Quispe</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Fecha de Inicio</label>
                                        <input type="date" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Fecha Límite</label>
                                        <input type="date" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Descripción</label>
                                    <textarea className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[100px]" placeholder="Detalles del documento..."></textarea>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Prioridad</label>
                                        <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                                            <option value="">Seleccionar...</option>
                                            <option value="alta">Alta</option>
                                            <option value="media">Media</option>
                                            <option value="baja">Baja</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Costo</label>
                                        <input type="number" className="w-full rounded-md border border-input bg-background px-3 py-2" placeholder="Bs." />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Adjuntar Archivos</label>
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-background hover:bg-muted/50">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                                </svg>
                                                <p className="mb-2 text-sm text-muted-foreground">
                                                    <span className="font-semibold">Haga clic para cargar</span> o arrastre y suelte
                                                </p>
                                                <p className="text-xs text-muted-foreground">PDF, DOCX, JPG (MAX. 10MB)</p>
                                            </div>
                                            <input type="file" className="hidden" multiple />
                                        </label>
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-2">
                                    <Button variant="outline">Cancelar</Button>
                                    <Button>Guardar Documento</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Historial de Documentos</CardTitle>
                            <CardDescription>Registro histórico de documentos procesados</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <div className="grid flex-1 gap-2">
                                        <label className="text-sm font-medium">Buscar Documento</label>
                                        <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2" placeholder="ID o tipo de documento" />
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
                                    <div className="grid grid-cols-7 border-b px-4 py-3 font-medium">
                                        <div>ID</div>
                                        <div>Tipo</div>
                                        <div>Cliente</div>
                                        <div>Fecha Inicio</div>
                                        <div>Fecha Finalización</div>
                                        <div>Estado</div>
                                        <div>Acciones</div>
                                    </div>
                                    <div className="divide-y">
                                        {[
                                            { id: "DOC-2023-156", type: "Poder Notarial", client: "María López", startDate: "15/06/2023", endDate: "15/06/2023", status: "Completado" },
                                            { id: "DOC-2023-155", type: "Escritura de Compraventa", client: "Juan Pérez", startDate: "14/06/2023", endDate: "14/06/2023", status: "Completado" },
                                            { id: "DOC-2023-154", type: "Testamento", client: "Ana Flores", startDate: "12/06/2023", endDate: "-", status: "En Proceso" },
                                            { id: "DOC-2023-153", type: "Certificación", client: "Carlos Mamani", startDate: "10/06/2023", endDate: "10/06/2023", status: "Completado" },
                                            { id: "DOC-2023-152", type: "Escritura de Donación", client: "Roberto Quispe", startDate: "08/06/2023", endDate: "-", status: "Pendiente" },
                                            { id: "DOC-2023-151", type: "Contrato de Alquiler", client: "Patricia Condori", startDate: "05/06/2023", endDate: "07/06/2023", status: "Completado" },
                                            { id: "DOC-2023-150", type: "Acta de Nacimiento", client: "Luis Torrez", startDate: "03/06/2023", endDate: "03/06/2023", status: "Completado" },
                                            { id: "DOC-2023-149", type: "Poder Especial", client: "Luis Torrez", startDate: "05/06/2023", endDate: "-", status: "En Proceso" },
                                            { id: "DOC-2023-148", type: "Certificación de Documentos", client: "María López", startDate: "01/06/2023", endDate: "01/06/2023", status: "Completado" },
                                            { id: "DOC-2023-147", type: "Contrato de Arrendamiento", client: "Patricia Condori", startDate: "01/06/2023", endDate: "-", status: "Pendiente" },
                                        ].map((doc, index) => (
                                            <div key={index} className="grid grid-cols-7 px-4 py-3">
                                                <div>{doc.id}</div>
                                                <div>{doc.type}</div>
                                                <div>{doc.client}</div>
                                                <div>{doc.startDate}</div>
                                                <div>{doc.endDate}</div>
                                                <div>
                                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                                        doc.status === 'Completado' 
                                                            ? 'bg-green-100 text-green-800' 
                                                            : doc.status === 'En Proceso' 
                                                                ? 'bg-blue-100 text-blue-800' 
                                                                : 'bg-amber-100 text-amber-800'
                                                    }`}>
                                                        {doc.status}
                                                    </span>
                                                </div>
                                                <div>
                                                    <Button variant="ghost" size="sm">Ver</Button>
                                                    <Button variant="ghost" size="sm">Editar</Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-muted-foreground">
                                        Mostrando 10 de 325 documentos
                                    </div>
                                    <div className="flex space-x-1">
                                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">1</Button>
                                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">2</Button>
                                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">3</Button>
                                        <span className="flex items-center justify-center w-8 h-8">...</span>
                                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">33</Button>
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