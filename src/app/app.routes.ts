import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './service/auth.guard';
import { RegisterrComponent } from './registerr/registerr.component';

export const routes: Routes = [
    {
        path: '', redirectTo:'resgiter' , pathMatch:'full'
    },
        {
        path:'resgiter',
        component:RegisterrComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent,
                canActivate: [authGuard]
            }
        ]
    }
];
