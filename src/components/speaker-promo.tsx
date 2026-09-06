"use client";

import { toPng } from "html-to-image";
import { Download } from "lucide-react";
import { type RefObject, useRef, useState } from "react";
import { type Speaker, speakerImageStyle } from "@/lib/speakers";

type Format = "preview" | "instagram" | "linkedin";

function Portrait({ speaker, scale }: { speaker: Speaker; scale: number }) {
	return (
		<div className="rounded-full p-1 shadow-[0_0_60px_-10px_color-mix(in_oklab,var(--periwinkle)_60%,transparent)] ring-2 ring-periwinkle/70">
			<div className="aspect-square overflow-hidden rounded-full">
				<img
					src={speaker.image}
					alt={speaker.name}
					className="h-full w-full object-cover"
					style={speakerImageStyle(speaker.crop, scale)}
				/>
			</div>
		</div>
	);
}

function CardChrome({ speaker, format }: { speaker: Speaker; format: Format }) {
	const isLinkedIn = format === "linkedin";
	const isPreview = format === "preview";

	const nameSize = isLinkedIn ? undefined : isPreview ? "text-xl sm:text-2xl" : undefined;
	const roleSize = isPreview ? "mt-1 text-[10px] sm:text-xs" : undefined;
	const logoHeight = isPreview ? "h-6 w-auto sm:h-7" : undefined;
	const titleSize = isPreview ? "text-sm sm:text-base whitespace-nowrap" : undefined;
	const subSize = isPreview ? "mt-0.5 text-[10px] sm:text-xs whitespace-nowrap" : undefined;
	const dateSize = isPreview ? "mt-1 text-[9px] tracking-[0.18em] sm:text-[10px]" : undefined;

	const identity = (
		<div>
			<p
				className={`font-serif leading-none text-foreground ${nameSize ?? ""}`}
				style={
					isLinkedIn ? { fontSize: 60 } : format === "instagram" ? { fontSize: 48.6 } : undefined
				}
			>
				{speaker.name}
			</p>
			<p
				className={`font-bold uppercase tracking-[0.2em] text-periwinkle ${roleSize ?? ""}`}
				style={
					isLinkedIn
						? { fontSize: 19.2, marginTop: 9.6 }
						: format === "instagram"
							? { fontSize: 17.28, marginTop: 8.64 }
							: undefined
				}
			>
				{speaker.role}, {speaker.company}
			</p>
		</div>
	);

	const brand = (
		<div
			className="flex items-start justify-between gap-4 border-t border-foreground/15"
			style={
				isLinkedIn
					? { paddingTop: 19.2, marginTop: 24 }
					: format === "instagram"
						? { paddingTop: 17.28, marginTop: 21.6 }
						: undefined
			}
		>
			<img
				src="/eclub-logo-light.png"
				alt="HBS Entrepreneurship Club"
				className={logoHeight}
				style={
					isLinkedIn
						? { height: 66, width: "auto" }
						: format === "instagram"
							? { height: 48.6, width: "auto" }
							: undefined
				}
			/>
			<div className="min-w-0 text-right">
				<p
					className={`font-display uppercase leading-none text-foreground ${titleSize ?? ""}`}
					style={
						isLinkedIn
							? { fontSize: 33.6 }
							: format === "instagram"
								? { fontSize: 32.4 }
								: undefined
					}
				>
					From Ideas to Institutions
				</p>
				<p
					className={`font-display uppercase leading-none tracking-wide text-foreground/80 ${subSize ?? ""}`}
					style={
						isLinkedIn
							? { fontSize: 22.8, marginTop: 5.4 }
							: format === "instagram"
								? { fontSize: 21.6, marginTop: 5.4 }
								: undefined
					}
				>
					Entrepreneurship Conference
				</p>
				<p
					className={`font-bold uppercase tracking-[0.25em] text-lime ${dateSize ?? ""}`}
					style={
						isLinkedIn
							? { fontSize: 15.6, marginTop: 7.2, whiteSpace: "nowrap" }
							: format === "instagram"
								? { fontSize: 15.12, marginTop: 6.48, whiteSpace: "nowrap" }
								: undefined
					}
				>
					November 22, 2026 · Klarman Hall
				</p>
			</div>
		</div>
	);

	if (isLinkedIn) {
		return (
			<div className="relative flex h-full items-center" style={{ padding: 48, gap: 48 }}>
				<div className="shrink-0" style={{ width: 360 }}>
					<Portrait speaker={speaker} scale={1.1} />
				</div>
				<div className="flex min-w-0 flex-1 flex-col justify-center">
					{identity}
					{brand}
				</div>
			</div>
		);
	}

	return (
		<>
			<div
				className="absolute inset-x-0 mx-auto w-[52%]"
				style={{
					top: format === "instagram" ? 86.4 : "7%",
					width: format === "instagram" ? "60%" : undefined,
				}}
			>
				<Portrait speaker={speaker} scale={1.1} />
			</div>
			<div
				className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent ${isPreview ? "p-4 pt-10 sm:p-5 sm:pt-12" : ""}`}
				style={format === "instagram" ? { padding: 43.2, paddingTop: 129.6 } : undefined}
			>
				{identity}
				<div className={isPreview ? "mt-3 pt-3" : undefined}>{brand}</div>
			</div>
		</>
	);
}

function PromoFrame({
	speaker,
	format,
	frameRef,
}: {
	speaker: Speaker;
	format: Format;
	frameRef?: RefObject<HTMLDivElement | null>;
}) {
	const size =
		format === "instagram"
			? { width: 1080, height: 1080, padding: 10.8, radius: 15.12, inner: 8.64 }
			: format === "linkedin"
				? { width: 1200, height: 628, padding: 12, radius: 16.8, inner: 9.6 }
				: null;

	return (
		<div
			ref={frameRef}
			className="relative overflow-hidden rounded-lg border-2 border-periwinkle/70 bg-card p-2 shadow-[0_0_0_1px_var(--border)]"
			style={
				size
					? {
							width: size.width,
							height: size.height,
							padding: size.padding,
							borderRadius: size.radius,
						}
					: undefined
			}
		>
			<div
				className={`relative h-full overflow-hidden rounded-md bg-background ${format === "preview" ? "aspect-square" : ""}`}
				style={size ? { borderRadius: size.inner } : undefined}
			>
				<div className="absolute inset-0 glow-bg opacity-80" />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
				<CardChrome speaker={speaker} format={format} />
			</div>
		</div>
	);
}

async function downloadNode(node: HTMLDivElement, filename: string) {
	await document.fonts.ready;
	const dataUrl = await toPng(node, {
		cacheBust: true,
		pixelRatio: 1,
		skipFonts: false,
	});
	const link = document.createElement("a");
	link.download = filename;
	link.href = dataUrl;
	link.click();
}

export function SpeakerPromo({ speaker }: { speaker: Speaker }) {
	const instagramRef = useRef<HTMLDivElement>(null);
	const linkedinRef = useRef<HTMLDivElement>(null);
	const [busy, setBusy] = useState<"instagram" | "linkedin" | null>(null);

	async function save(format: "instagram" | "linkedin") {
		const node = format === "instagram" ? instagramRef.current : linkedinRef.current;
		if (!node) return;
		setBusy(format);
		try {
			await downloadNode(node, `${speaker.slug}-${format}.png`);
		} finally {
			setBusy(null);
		}
	}

	return (
		<div className="mx-auto w-full max-w-[380px] md:mx-0 md:ml-auto lg:max-w-[400px]">
			<PromoFrame speaker={speaker} format="preview" />
			<div className="mt-4 flex flex-wrap gap-3">
				<button
					type="button"
					disabled={busy !== null}
					onClick={() => void save("instagram")}
					className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition hover:border-lime disabled:opacity-60"
				>
					<Download className="h-4 w-4" />
					Download image for Instagram post
				</button>
				<button
					type="button"
					disabled={busy !== null}
					onClick={() => void save("linkedin")}
					className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition hover:border-lime disabled:opacity-60"
				>
					<Download className="h-4 w-4" />
					Download image for LinkedIn post
				</button>
			</div>
			<div
				aria-hidden="true"
				className="pointer-events-none fixed top-0 left-0 -z-50"
				style={{ transform: "translateX(-200vw)" }}
			>
				<PromoFrame speaker={speaker} format="instagram" frameRef={instagramRef} />
				<PromoFrame speaker={speaker} format="linkedin" frameRef={linkedinRef} />
			</div>
		</div>
	);
}
