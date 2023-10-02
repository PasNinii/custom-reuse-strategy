import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class CustomReuseStrategy implements RouteReuseStrategy {
    private readonly storedRoutes = new Map<string, DetachedRouteHandle>();

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
      return true;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
      if (route.routeConfig?.path && handle) {
        this.storedRoutes.set(route.routeConfig.path, handle);
      }
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
      if (route.routeConfig?.path) {
        return !!route.routeConfig && !!this.storedRoutes.get(route.routeConfig.path);
      }

      return false;
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
      return this.storedRoutes.get(route.routeConfig?.path || "") || null;
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
       return future.routeConfig === curr.routeConfig;
    }
}
