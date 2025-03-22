import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DocumentsRegister() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Registro de Documento</CardTitle>
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
                                <option value="1">María López</option>
                                <option value="2">Juan Pérez</option>
                                <option value="3">Ana Flores</option>
                                <option value="4">Carlos Mamani</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Fecha de Ingreso</label>
                            <input type="date" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Fecha Límite</label>
                            <input type="date" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Descripción</label>
                        <textarea
                            className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[100px]"
                            placeholder="Detalles del documento..."
                        ></textarea>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Costo (Bs.)</label>
                            <input type="number" className="w-full rounded-md border border-input bg-background px-3 py-2" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Prioridad</label>
                            <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                                <option value="">Seleccionar...</option>
                                <option value="alta">Alta</option>
                                <option value="media">Media</option>
                                <option value="baja">Baja</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Documentos Adjuntos</label>
                        <input type="file" multiple className="w-full rounded-md border border-input bg-background px-3 py-2" />
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