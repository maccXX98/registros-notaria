import { PaymentsOverview } from "./components/overview";
import { PaymentsRegister } from "./components/register";
import { PaymentsPending } from "./components/pending";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export function Payments() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Pagos</h2>
                <div className="flex items-center space-x-2">
                    <Button>Registrar Pago</Button>
                    <Button variant="outline">Generar Factura</Button>
                </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Resumen</TabsTrigger>
                    <TabsTrigger value="pending">Pendientes</TabsTrigger>
                    <TabsTrigger value="register">Registro</TabsTrigger>
                    <TabsTrigger value="history">Historial</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <PaymentsOverview />
                </TabsContent>

                <TabsContent value="pending">
                    <PaymentsPending />
                </TabsContent>

                <TabsContent value="register">
                    <PaymentsRegister />
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                    {/* TODO: Implement history component */}
                </TabsContent>
            </Tabs>
        </div>
    );
}