import Link from "next/link";
import { ArrowUpRight, MessageSquareText } from "lucide-react";
import type { ProjectSummary } from "@/types/project";

interface ProjectCardProps {
  projects: ProjectSummary[];
}

export function ProjectCard({ projects }: ProjectCardProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/workspace?id=${project.id}`}
          className="group rounded-2xl border border-white/10 bg-[#111111] p-4 transition hover:border-white/20 hover:bg-white/[0.03]"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-base font-semibold text-white">
                {project.title ?? "Untitled project"}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-white/40 transition group-hover:text-white/80" />
          </div>

          <p className="line-clamp-3 text-sm leading-6 text-white/60">
            {project.firstPrompt ?? "No prompt saved yet."}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-3 text-[11px] text-white/35">
            <span className="inline-flex items-center gap-1.5">
              <MessageSquareText className="h-3.5 w-3.5" />
              {project.messageCount} messages
            </span>
            <span>{new Date(project.updatedAt).toLocaleDateString()}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
