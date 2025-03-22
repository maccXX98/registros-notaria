import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AccountingIncome() {
    return (
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
    );
}