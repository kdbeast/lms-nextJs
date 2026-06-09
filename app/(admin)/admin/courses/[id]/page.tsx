"use client";

import { use } from "react";
import { projectId, dataset } from "@/sanity/env";
import { CourseEditor } from "@/components/admin/editors/CourseEditor";

export default function EditCoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return <CourseEditor documentId={id} projectId={projectId} dataset={dataset} />;
}