"use client";

import { projectId, dataset } from "@/sanity/env";
import { ModuleList } from "@/components/admin/documents/ModuleList";

export default function ModulesPage() {
  return <ModuleList projectId={projectId} dataset={dataset} />;
}