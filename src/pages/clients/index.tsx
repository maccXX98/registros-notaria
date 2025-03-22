import { ClientsOverview } from "./components/overview";
import { ClientsRegister } from "./components/register";
import { ClientsDirectory } from "./components/directory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export function Clients() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Clientes</h2>
                <div className="flex items-center space-x-2">
                    <Button>Nuevo Cliente</Button>
                    <Button variant="outline">Buscar</Button>
                </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Resumen</TabsTrigger>
                    <TabsTrigger value="register">Registro</TabsTrigger>
                    <TabsTrigger value="directory">Directorio</TabsTrigger>
                    <TabsTrigger value="history">Historial</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <ClientsOverview />
                </TabsContent>

                <TabsContent value="register">
                    <ClientsRegister />
                </TabsContent>

                <TabsContent value="directory">
                    <ClientsDirectory />
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                    {/* TODO: Implement history component */}
                </TabsContent>
            </Tabs>
        </div>
    );
}