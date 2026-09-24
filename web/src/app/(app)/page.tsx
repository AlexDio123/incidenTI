import Link from "next/link";
import { AlertTriangle, CheckCircle2, Clock, Ticket } from "lucide-react";
import { PriorityBadge } from "@/components/tickets/priority-badge";
import { StatusBadge } from "@/components/tickets/status-badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateTime } from "@/lib/format";
import {
  getOpenTickets,
  getTeamById,
  tickets,
} from "@/lib/mock-data";

export default function DashboardPage() {
  const open = getOpenTickets();
  const p1 = open.filter((t) => t.priority === "P1");
  const inProgress = open.filter((t) => t.status === "in_progress");
  const resolvedToday = tickets.filter((t) => t.status === "resolved");
  const recent = [...tickets]
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
    .slice(0, 5);

  const kpis = [
    {
      label: "Tickets abiertos",
      value: open.length,
      icon: Ticket,
      tone: "text-steel",
    },
    {
      label: "Prioridad P1",
      value: p1.length,
      icon: AlertTriangle,
      tone: "text-priority-p1-fg",
    },
    {
      label: "En progreso",
      value: inProgress.length,
      icon: Clock,
      tone: "text-amber-700",
    },
    {
      label: "Resueltos (demo)",
      value: resolvedToday.length,
      icon: CheckCircle2,
      tone: "text-success-fg",
    },
  ];

  return (
    <>
      <div className="mb-6 flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Vista general del centro de operaciones.
        </p>
        <Button asChild size="sm">
          <Link href="/tickets/new">Nuevo ticket</Link>
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="border border-border bg-card px-4 py-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {kpi.label}
              </p>
              <kpi.icon className={`size-4 ${kpi.tone}`} />
            </div>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-6 border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="text-sm font-semibold">Actividad reciente</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/tickets">Ver todos</Link>
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-20">ID</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Prioridad</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Equipo</TableHead>
              <TableHead className="text-right">Actualizado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recent.map((ticket) => {
              const team = getTeamById(ticket.teamId);
              return (
                <TableRow key={ticket.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    <Link
                      href={`/tickets/${ticket.id}`}
                      className="text-steel hover:underline"
                    >
                      #{ticket.number}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/tickets/${ticket.id}`}
                      className="font-medium text-foreground hover:text-steel"
                    >
                      {ticket.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <PriorityBadge priority={ticket.priority} showLabel={false} />
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={ticket.status} />
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {team?.name ?? "—"}
                  </TableCell>
                  <TableCell className="text-right text-xs text-muted-foreground">
                    {formatDateTime(ticket.updatedAt)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </section>
    </>
  );
}
