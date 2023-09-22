import type { Page, PageData } from "lume/core.ts";
// To handle all types in one place, use re-export
export type { PageHelpers } from "lume/core.ts";

export interface DocumentSidebarData extends PageData {
    relatedPages?: Array<Page>
}
  
  // Create a new interface for `custom.tsx`
export interface ArticlePage extends Page {
    data: DocumentSidebarData;
}

