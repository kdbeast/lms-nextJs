import { courseType } from "./courseType";
import { lessonType } from "./lessonType";
import { moduleType } from "./moduleType";
import { categoryType } from "./categoryType";
import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [courseType, moduleType, lessonType, categoryType],
};
