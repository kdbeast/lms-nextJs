"use client";

import { use } from "react";
import { projectId, dataset } from "@/sanity/env";
import { LessonEditor } from "@/components/admin/editors/LessonEditor";

export default function EditLessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <LessonEditor documentId={id} projectId={projectId} dataset={dataset} />
  );
}