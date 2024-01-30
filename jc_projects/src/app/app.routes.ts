import { Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ExampleComponent } from './components/example/example.component';
import { ServiceOneComponent } from './components/servicesComponents/service-one/service-one.component';
import { ServicetwoComponent } from './components/servicesComponents/servicetwo/servicetwo.component';
import { RouteParamsComponent } from './route-params/route-params.component';
import { FormsComponent } from './forms/forms.component';
import { ObservablesComponent } from './observables/observables.component';

export const routes: Routes = [
    {
        path: 'forms',
        component: FormsComponent,
    },
    {
        path: 'pipes',
        component: ExampleComponent
    },
    {
        path: 'servicesOne',
        component: ServiceOneComponent
    },
    {
        path: 'servicesTwo',
        component: ServicetwoComponent
    },
    {
        path: 'param/:data1/:data2',
        component: RouteParamsComponent
    },
    {
        path:'observable',
        component:ObservablesComponent
    }
];
