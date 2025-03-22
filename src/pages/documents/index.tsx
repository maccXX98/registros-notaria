import { DocumentsOverview } from "./components/overview";
import { DocumentsRegister } from "./components/register";
import { DocumentsPending } from "./components/pending";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export function Documents() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Documentos</h2>
                <div className="flex items-center space-x-2">
                    <Button>Nuevo Documento</Button>
                    <Button variant="outline">Buscar</Button>
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
                    <DocumentsOverview />
                </TabsContent>

                <TabsContent value="pending">
                    <DocumentsPending />
                </TabsContent>

                <TabsContent value="register">
                    <DocumentsRegister />
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                    {/* TODO: Implement history component */}
                </TabsContent>
            </Tabs>
        </div>
    );
}