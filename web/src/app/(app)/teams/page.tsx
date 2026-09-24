import { teams } from "@/lib/mock-data";

export default function TeamsPage() {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {teams.map((team) => (
        <article key={team.id} className="border border-border bg-card p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold tracking-tight">
                {team.name}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {team.description}
              </p>
            </div>
            <span className="rounded-sm bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600">
              {team.slug}
            </span>
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4">
            <div>
              <dt className="text-xs text-muted-foreground">Miembros</dt>
              <dd className="mt-0.5 text-lg font-semibold">{team.memberCount}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Tickets abiertos</dt>
              <dd className="mt-0.5 text-lg font-semibold text-steel">
                {team.openTickets}
              </dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
