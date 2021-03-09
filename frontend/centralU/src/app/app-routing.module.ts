import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./product/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./product/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'update-product',
    loadChildren: () => import('./product/update-product/update-product.module').then( m => m.UpdateProductPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./product/add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'see-all-task',
    loadChildren: () => import('./task/see-all-task/see-all-task.module').then( m => m.SeeAllTaskPageModule)
  },
  {
    path: 'see-my-own-task',
    loadChildren: () => import('./task/see-my-own-task/see-my-own-task.module').then( m => m.SeeMyOwnTaskPageModule)
  },
  {
    path: 'create-task',
    loadChildren: () => import('./task/create-task/create-task.module').then( m => m.CreateTaskPageModule)
  },
  {
    path: 'update-task',
    loadChildren: () => import('./task/update-task/update-task.module').then( m => m.UpdateTaskPageModule)
  },
  {
    path: 'see-employees',
    loadChildren: () => import('./user/see-employees/see-employees.module').then( m => m.SeeEmployeesPageModule)
  },
  {
    path: 'create-employee',
    loadChildren: () => import('./user/create-employee/create-employee.module').then( m => m.CreateEmployeePageModule)
  },
  {
    path: 'update-employee',
    loadChildren: () => import('./user/update-employee/update-employee.module').then( m => m.UpdateEmployeePageModule)
  },
  {
    path: 'add-adjustment',
    loadChildren: () => import('./inventory/add-adjustment/add-adjustment.module').then( m => m.AddAdjustmentPageModule)
  },
  {
    path: 'see-adjustment',
    loadChildren: () => import('./inventory/see-adjustment/see-adjustment.module').then( m => m.SeeAdjustmentPageModule)
  },
  {
    path: 'see-employee-task',
    loadChildren: () => import('./task/see-employee-task/see-employee-task.module').then( m => m.SeeEmployeeTaskPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
