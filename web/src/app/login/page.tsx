import Link from "next/link";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <div className="relative hidden w-[48%] flex-col justify-between bg-primary px-12 py-12 text-primary-foreground lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1b4f72_0%,_transparent_55%)] opacity-80" />
        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded bg-steel">
              <Shield className="size-5" />
            </div>
            <span className="font-serif text-2xl tracking-tight">incidenTI</span>
          </div>
        </div>
        <div className="relative max-w-md space-y-4">
          <h1 className="font-serif text-3xl leading-tight tracking-tight">
            Gestión inteligente de incidentes TI
          </h1>
          <p className="text-sm leading-relaxed text-slate-300">
            Clasificación automática, prioridad, sugerencias de solución y
            asignación al equipo correcto — con control humano en cada paso.
          </p>
        </div>
        <p className="relative text-xs text-slate-400">
          Entorno de demostración · datos de ejemplo
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center bg-background px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <p className="font-serif text-xl text-primary">incidenTI</p>
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Iniciar sesión
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Acceda con su cuenta corporativa (demo).
          </p>

          <div className="mt-8 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                defaultValue="ana.garcia@empresa.com"
                className="bg-card"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                defaultValue="demo"
                className="bg-card"
              />
            </div>
            <Button className="w-full" asChild>
              <Link href="/">Entrar a la plataforma</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
