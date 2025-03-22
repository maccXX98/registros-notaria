import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample data for directory
const clientDirectory = [
    { id: "CLI-2023-042", name: "María López", type: "Persona Natural", phone: "71234567", email: "maria.lopez@gmail.com", documents: 3 },
    { id: "CLI-2023-041", name: "Juan Pérez", type: "Persona Natural", phone: "73456789", email: "juan.perez@gmail.com", documents: 2 },
    { id: "CLI-2023-040", name: "Ana Flores", type: "Persona Natural", phone: "76543210", email: "ana.flores@gmail.com", documents: 1 },
    { id: "CLI-2023-039", name: "Empresa ABC S.R.L.", type: "Empresa", phone: "70987654", email: "contacto@abc.com", documents: 5 },
    { id: "CLI-2023-038", name: "Ministerio de Educación", type: "Institución Pública", phone: "72345678", email: "info@minedu.gob.bo", documents: 4 },
];

export function ClientsDirectory() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Directorio de Clientes</CardTitle>
                <CardDescription>Lista completa de clientes registrados</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Buscar cliente..."
                            className="flex-1 rounded-md border border-input bg-background px-3 py-2"
                        />
                        <Button variant="outline">Buscar</Button>
                    </div>

                    <div className="rounded-md border">
                        <div className="grid grid-cols-6 border-b px-4 py-3 font-medium">
                            <div>ID</div>
                            <div>Nombre</div>
                            <div>Tipo</div>
                            <div>Teléfono</div>
                            <div>Email</div>
                            <div className="text-right">Documentos</div>
                        </div>
                        <div className="divide-y">
                            {clientDirectory.map((client, index) => (
                                <div key={index} className="grid grid-cols-6 px-4 py-3">
                                    <div>{client.id}</div>
                                    <div>{client.name}</div>
                                    <div>{client.type}</div>
                                    <div>{client.phone}</div>
                                    <div>{client.email}</div>
                                    <div className="text-right">{client.documents}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                            Mostrando 5 de 189 clientes
                        </div>
                        <div className="space-x-2">
                            <Button variant="outline" size="sm">Anterior</Button>
                            <Button variant="outline" size="sm">Siguiente</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}