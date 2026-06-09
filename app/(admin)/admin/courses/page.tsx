"use client";

import { projectId, dataset } from "@/sanity/env";
import { CourseList } from "@/components/admin/documents/CourseList";

export default function CoursesPage() {
  return <CourseList projectId={projectId} dataset={dataset} />;
}