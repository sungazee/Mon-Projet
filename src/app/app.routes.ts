import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },

    {
        path:'login',
        component: LoginComponent,
    },
    {
        path:'register',
        component: RegisterComponent,
    },
    { path: 'verify-email-address', component: VerifyEmailComponent }
];
