import { COMPANY_LOGOS } from "@/lib/speakers";

function LogoRow({ hidden }: { hidden?: boolean }) {
	return (
		<div
			className="flex shrink-0 items-center gap-16 pr-16"
			aria-hidden={hidden ? "true" : "false"}
		>
			{COMPANY_LOGOS.map((company) => (
				<span key={company.name} className="flex h-10 items-center">
					{company.src ? (
						<img
							src={company.src}
							alt={company.name}
							className="h-8 w-auto max-w-[180px] object-contain"
						/>
					) : (
						<span className="font-display text-2xl uppercase tracking-wide text-foreground/85">
							{company.name}
						</span>
					)}
				</span>
			))}
		</div>
	);
}

export function LogoMarquee() {
	return (
		<section className="overflow-hidden border-y border-border bg-card/60 py-6">
			<p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
				Confirmed founders and CEOs from
			</p>
			<div className="flex w-max animate-marquee items-center">
				<LogoRow />
				<LogoRow hidden />
			</div>
		</section>
	);
}
