import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample data for pending payments
const pendingPayments = [
    { id: "PAY-2023-042", document: "Escritura de Compraventa", client: "Juan Pérez", amount: 1200, dueDate: "20/06/2023" },
    { id: "PAY-2023-039", document: "Testamento", client: "Ana Flores", amount: 1500, dueDate: "22/06/2023" },
    { id: "PAY-2023-036", document: "Poder Especial", client: "Luis Torrez", amount: 800, dueDate: "25/06/2023" },
    { id: "PAY-2023-033", document: "Contrato de Arrendamiento", client: "Patricia Condori", amount: 950, dueDate: "28/06/2023" },
];

export function PaymentsPending() {
    return (
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
    );
}