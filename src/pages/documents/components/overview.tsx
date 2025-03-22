import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

export function DocumentsOverview() {
    return (
        <div className="space-y-4">
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
        </div>
    );
}