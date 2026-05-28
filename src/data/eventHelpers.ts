import { events, type WorkshopEvent } from "./events";

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export function getUpcomingEvents(): WorkshopEvent[] {
  const today = todayISO();
  return events
    .filter((e) => e.date >= today && e.status !== "sold-out")
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastEvents(): WorkshopEvent[] {
  const today = todayISO();
  return events
    .filter((e) => e.date < today || e.status === "sold-out")
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNextEvent(): WorkshopEvent | null {
  return getUpcomingEvents()[0] ?? null;
}
