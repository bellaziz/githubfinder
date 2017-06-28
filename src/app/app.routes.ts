import {Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {UserComponent} from './user/user.component';

export const appRoutes: Routes = [

    {
        path: 'search',
        component: SearchComponent
    },

    {
        path: 'user/:userId',
        component: UserComponent
    }
];
