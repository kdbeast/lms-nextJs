"use client";

import { projectId, dataset } from "@/sanity/env";
import { LessonList } from "@/components/admin/documents/LessonList";

export default function LessonsPage() {
  return <LessonList projectId={projectId} dataset={dataset} />;
}