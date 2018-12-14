import { InjectionToken } from "@angular/core";
import { SearchWikiModel } from "./search-wiki.model";

export const ResponseToken = new InjectionToken<SearchWikiModel>(
  "This will provide state from selector"
);

export const ErrorToken = new InjectionToken<string>("This will provide Error");
