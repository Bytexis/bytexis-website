import { getProjects, getProject, type Project } from "@/data/projects";

export function useProjects() {
  const data = getProjects();
  return { data, isLoading: false, error: null };
}

export function useProject(id: string | number) {
  const numericId = typeof id === "string" ? parseInt(id, 10) : id;
  const data: Project | null = getProject(numericId) ?? null;
  return { data, isLoading: false, error: null };
}
