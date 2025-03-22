import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ClientsRegister() {
    return (
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
                        <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2" />
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