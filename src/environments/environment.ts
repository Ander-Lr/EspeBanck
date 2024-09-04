// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  envUser_Id: null as string | null, // Permite que envUser_Id sea string o null
  firebaseConfig: {
    apiKey: "AIzaSyAje6ZIK9FYZls5F_XDT7GHNiPUvh1Icts",
    authDomain: "esperanza-bd.firebaseapp.com",
    projectId: "esperanza-bd",
    storageBucket: "esperanza-bd.appspot.com",
    messagingSenderId: "482012383025",
    appId: "1:482012383025:web:efd7e1e6cb052f5276d210",
    measurementId: "G-2KCSWZ4GH9"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
