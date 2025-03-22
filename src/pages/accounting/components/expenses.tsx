import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AccountingExpenses() {
    return (
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
    );
}