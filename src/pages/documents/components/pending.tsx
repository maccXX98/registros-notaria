import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample data for pending documents
const pendingDocuments = [
    { id: "DOC-2023-154", type: "Testamento", client: "Ana Flores", date: "12/06/2023", deadline: "19/06/2023", priority: "Alta" },
    { id: "DOC-2023-152", type: "Escritura de Donación", client: "Roberto Quispe", date: "08/06/2023", deadline: "22/06/2023", priority: "Media" },
    { id: "DOC-2023-149", type: "Poder Especial", client: "Luis Torrez", date: "05/06/2023", deadline: "20/06/2023", priority: "Alta" },
    { id: "DOC-2023-147", type: "Contrato de Arrendamiento", client: "Patricia Condori", date: "01/06/2023", deadline: "25/06/2023", priority: "Baja" },
];

export function DocumentsPending() {
    return (
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
                <div className="flex justify-end mt-4 space-x-2">
                    <Button variant="outline">Enviar Recordatorio</Button>
                    <Button>Registrar Pago</Button>
                </div>
            </CardContent>
        </Card>
    );
}