import IPermissionDependency from '@/router/permissions/IPermissionDependency';

export interface IRouter {
  path: string;
  name?: string;
  redirect?: string;
  meta?: IRouterMeta;
  component: any;
  props?: boolean;
  children?: IRouter[];
}

export interface IRouterMeta {
  title: string;
  permission?: string;
  requiresAuth: boolean;
  icon?: string;
  permissionChecker?: IPermissionDependency;
}
