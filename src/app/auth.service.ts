import { Injectable, inject } from '@angular/core';
import { UserInterface as User } from './user.interface';
import { Router } from '@angular/router';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);
  public userData?: User;
  constructor(public router: Router) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        const docRef = doc(this.firestore, 'users', user.uid);
        getDoc(docRef).then((docSnap) => {
          if (docSnap.exists()) {
            this.userData = <User>docSnap.data();
          }
        });
      }
    });
  }

  // Sign in with email/password
  public signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          this.router.navigate(['dashboard']);
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  public signUp(
    email: string,
    password: string,
    username: string
  ) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.sendVerificationMail();
        this.setUserData(
          result.user?.uid ?? '',
          result.user?.email ?? '',
          username
        );
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  public sendVerificationMail() {
    if (this.auth.currentUser) {
      sendEmailVerification(this.auth.currentUser).then(() => {
        this.router.navigate(['verify-email-address']);
      });
    }
  }
  // Reset Forggot password
  public forgotPassword(passwordResetEmail: string) {
    return sendPasswordResetEmail(this.auth, passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  public setUserData(
    userUid: string,
    email: string,
    username: string,
  ) {
    const userRef = doc(this.firestore, `users/${userUid}`);
    const userData: User = {
      email: email,
      username: username,
    };
    return setDoc(userRef, userData, {
      merge: true,
    });
  }

  public signOut() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['login']);
    });
  }
}