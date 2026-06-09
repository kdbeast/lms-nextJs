"use client";

import { use } from "react";
import { projectId, dataset } from "@/sanity/env";
import { CategoryEditor } from "@/components/admin/editors/CategoryEditor";

export default function EditCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return <CategoryEditor documentId={id} projectId={projectId} dataset={dataset} />;
}