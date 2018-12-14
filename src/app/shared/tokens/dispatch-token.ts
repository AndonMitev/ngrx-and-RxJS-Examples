import { InjectionToken } from "@angular/core";

export const DispatcherToken = new InjectionToken<Function>(
  "This will dispatch actions"
);
