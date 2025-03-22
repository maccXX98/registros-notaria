import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PaymentsRegister() {
    return (
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
                                <option value="1">María López</option>
                                <option value="2">Juan Pérez</option>
                                <option value="3">Ana Flores</option>
                                <option value="4">Carlos Mamani</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Monto (Bs.)</label>
                            <input type="number" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Método de Pago</label>
                            <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                                <option value="">Seleccionar...</option>
                                <option value="efectivo">Efectivo</option>
                                <option value="transferencia">Transferencia</option>
                                <option value="tarjeta">Tarjeta</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Fecha de Pago</label>
                            <input type="date" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Número de Comprobante</label>
                            <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Observaciones</label>
                        <textarea
                            className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[100px]"
                            placeholder="Detalles adicionales del pago..."
                        ></textarea>
                    </div>

                    <div className="flex justify-end space-x-2">
                        <Button variant="outline">Cancelar</Button>
                        <Button type="submit">Guardar</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}