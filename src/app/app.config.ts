import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"app-api-484e6","appId":"1:39191817865:web:513f9edf2fe8526b1e2058","storageBucket":"app-api-484e6.appspot.com","apiKey":"AIzaSyCNkDOn5RCjEUHGggD-fIzx_Lt3tm4EuBk","authDomain":"app-api-484e6.firebaseapp.com","messagingSenderId":"39191817865"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"app-api-484e6","appId":"1:39191817865:web:513f9edf2fe8526b1e2058","storageBucket":"app-api-484e6.appspot.com","apiKey":"AIzaSyCNkDOn5RCjEUHGggD-fIzx_Lt3tm4EuBk","authDomain":"app-api-484e6.firebaseapp.com","messagingSenderId":"39191817865"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
