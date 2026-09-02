"use client";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	BUILDING_LABEL,
	type Building,
	getSessionStatus,
	locationLabel,
	roomNote,
	type Session,
	STATUS_LABEL,
	STATUS_NOTE,
	speakerByName,
} from "@/lib/conference-itinerary";
import { cn } from "@/lib/utils";

const BUILDING_PILL: Record<Building, string> = {
	klarman: "bg-crimson text-primary-foreground",
	aldrich: "border border-crimson/40 bg-crimson/10 text-crimson",
	batten: "bg-secondary text-foreground",
};

const STATUS_PILL: Record<ReturnType<typeof getSessionStatus>, string> = {
	confirmed: "bg-secondary text-foreground",
	"to-be-confirmed": "border border-crimson/40 bg-crimson/10 text-crimson",
	"work-in-progress": "bg-secondary text-foreground",
};

export function SessionCard({
	session,
	start,
	end,
	featured = false,
}: {
	session: Session;
	start: string;
	end: string;
	featured?: boolean;
}) {
	const status = getSessionStatus(session);
	const place = locationLabel(session);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<button
					type="button"
					aria-label={`${session.title}, ${start} to ${end}. ${STATUS_LABEL[status]}. Open details.`}
					className={cn(
						"conf-card flex h-full min-w-0 flex-col p-5 text-left transition hover:border-crimson/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson",
						featured && "p-6 md:p-7",
					)}
				>
					<span
						className={cn(
							"inline-flex w-fit items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]",
							BUILDING_PILL[session.building],
						)}
					>
						{place}
					</span>
					{session.track ? (
						<span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
							{session.track}
						</span>
					) : null}
					<span
						className={cn(
							"break-words font-serif tracking-tight",
							featured ? "mt-4 text-2xl md:text-3xl" : "mt-3 text-lg md:text-xl",
							!session.track && !featured && "mt-3",
						)}
					>
						{session.title}
					</span>
					<span
						className={cn(
							"mt-2 text-sm leading-relaxed text-muted-foreground",
							featured && "max-w-2xl md:text-base",
						)}
					>
						{session.details}
					</span>
					{session.speakers && session.speakers.length > 0 ? (
						<ul className="mt-4 space-y-1.5">
							{session.speakers.map((speaker) => (
								<li key={speaker.name}>
									<div className="text-sm font-medium">{speaker.name}</div>
									<div className="text-xs text-muted-foreground">{speaker.role}</div>
								</li>
							))}
						</ul>
					) : null}
					<span className="mt-auto flex items-end justify-between gap-3 pt-4">
						{status !== "confirmed" ? (
							<span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
								{STATUS_LABEL[status]}
							</span>
						) : (
							<span />
						)}
						<span className="text-xs font-medium text-crimson">Details →</span>
					</span>
				</button>
			</DialogTrigger>
			<DialogContent className="max-h-[85vh] w-[calc(100%-1.5rem)] overflow-y-auto border-border bg-paper opacity-100 shadow-xl sm:max-w-lg [&>button.absolute]:hidden">
				<div className="flex flex-col gap-4">
					<DialogHeader className="space-y-3 pr-8 text-left">
						<div className="flex flex-wrap items-center gap-2">
							<span
								className={cn(
									"inline-flex w-fit items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]",
									BUILDING_PILL[session.building],
								)}
							>
								{place}
							</span>
							{status !== "confirmed" ? (
								<span
									className={cn(
										"inline-flex w-fit items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]",
										STATUS_PILL[status],
									)}
								>
									{STATUS_LABEL[status]}
								</span>
							) : null}
						</div>
						{session.track ? (
							<div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
								{session.track}
							</div>
						) : null}
						<DialogTitle className="font-serif text-2xl font-medium leading-tight tracking-tight">
							{session.title}
						</DialogTitle>
						<DialogDescription className="text-sm leading-relaxed text-muted-foreground">
							{session.details}
						</DialogDescription>
					</DialogHeader>

					<dl className="grid gap-3 border-t border-border pt-4 text-sm">
						<div className="flex justify-between gap-4">
							<dt className="font-medium uppercase tracking-[0.08em] text-muted-foreground">
								When
							</dt>
							<dd className="text-right font-medium tabular-nums">
								{start} – {end}
							</dd>
						</div>
						<div className="flex justify-between gap-4">
							<dt className="font-medium uppercase tracking-[0.08em] text-muted-foreground">
								Where
							</dt>
							<dd className="text-right font-medium">{place}</dd>
						</div>
						<div className="flex justify-between gap-4">
							<dt className="font-medium uppercase tracking-[0.08em] text-muted-foreground">
								Building
							</dt>
							<dd className="text-right font-medium">{BUILDING_LABEL[session.building]}</dd>
						</div>
					</dl>

					<p className="text-sm leading-relaxed text-muted-foreground">{roomNote(session)}</p>

					{session.speakers && session.speakers.length > 0 ? (
						<div>
							<div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
								Speakers
							</div>
							<ul className="mt-3 space-y-3">
								{session.speakers.map((speaker) => {
									const profile = speakerByName(speaker.name);
									return (
										<li key={speaker.name} className="flex items-center gap-3">
											{profile?.image ? (
												<img
													src={profile.image}
													alt=""
													className="h-12 w-12 rounded-full object-cover object-[center_20%]"
												/>
											) : null}
											<div>
												<div className="font-serif text-lg tracking-tight">{speaker.name}</div>
												<div className="text-sm text-muted-foreground">
													{profile?.company ?? speaker.role}
												</div>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					) : null}

					{status !== "confirmed" ? (
						<div className="rounded border border-border bg-card px-4 py-3">
							<div className="text-sm font-semibold">{STATUS_LABEL[status]}</div>
							<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
								{STATUS_NOTE[status]}
							</p>
						</div>
					) : null}

					<DialogFooter className="pt-2">
						<DialogClose className="inline-flex h-9 items-center justify-center rounded border border-border bg-card px-4 text-sm font-medium transition hover:border-crimson/40 hover:text-crimson">
							Close
						</DialogClose>
					</DialogFooter>
				</div>
			</DialogContent>
		</Dialog>
	);
}
