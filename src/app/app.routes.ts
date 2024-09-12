import { Routes } from '@angular/router';
import { PolicyComponent } from './application/policy/policy.component';
import { ConditionsComponent } from './application/conditions/conditions.component';
import { ApplicationComponent, resolveApplication } from './application/application.component';

export const routes: Routes = [
    {
        path: ":appId/privacy",
        component : PolicyComponent,  
    }, 
    {
        path: ":appId/conditions",
        component: ConditionsComponent,
        resolve: {
            application: resolveApplication
        }
    },
    {
        path: ":appId",
        component: ApplicationComponent,
        resolve: {
            application: resolveApplication
        }
    }
];
