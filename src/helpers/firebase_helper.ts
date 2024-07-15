import firebase from 'firebase/compat/app'

// Add the Firebase products that you want to use
import "firebase/compat/auth";
import "firebase/compat/firestore";

interface UserTwo {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  createdDtm: firebase.firestore.Timestamp;
  lastLoginTime: firebase.firestore.Timestamp;
}

class FirebaseAuthBackend {

  constructor(firebaseConfig: any) {
    if (firebaseConfig) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged((user: any) => {
        if (user) {
          localStorage.setItem("authUser", JSON.stringify(user));
        } else {
          localStorage.removeItem("authUser");
        }
      });
    }
  }

  /**
   * Registers the user with given details
   */
  registerUser = (email: any, password: any) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential: any) => {
          const user = userCredential.user;
          this.addNewUserInRegister(user)
            .then(() => {
              resolve(user);
            })
            .catch((error) => {
              console.error("Error adding user to Firestore:", error);
              reject(this._handleError(error));
            });
        })
        .catch((error: any) => {
          reject(this._handleError(error));
        });
    });
  };
  addNewUserInRegister = (user: any) => {

    const emailParts = user.email.split('@');
    const usernameParts = emailParts[0].split('.');

    const collection = firebase.firestore().collection("users");
    const details = {
      id: user.uid,

      email: user.email,
      firstName: usernameParts[0],
      lastName: (usernameParts[1] || '').toUpperCase(),

      createdDtm: firebase.firestore.FieldValue.serverTimestamp(),
      lastLoginTime: firebase.firestore.FieldValue.serverTimestamp()
    };
    return collection.doc(user.uid).set(details)
      .then(() => {
        console.log("User added to Firestore successfully");
      })
      .catch((error) => {
        console.error("Error adding user to Firestore:", error);
        throw error;
      });
  };

  /**
   * Login user with given details
   */
  loginUser1 = (email: any, password: any) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          (user: any) => {
            resolve(firebase.auth().currentUser);
          },
          (error: any) => {
            reject(this._handleError(error));
          }
        );
    });
  };

  loginUser = (email: any, password: any) => {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential: any) => {
                const user = userCredential.user;
                this.getUserFromFirestore(user.uid)
                    .then((userData) => {
                        resolve({ ...user, ...userData });
                    })
                    .catch((error) => {
                        console.error("Error fetching user data from Firestore:", error);
                        reject(this._handleError(error));
                    });
            })
            .catch((error: any) => {
                reject(this._handleError(error));
            });
    });
  };
  getUserFromFirestore = (uid: string) => {
      const collection = firebase.firestore().collection("users");
      return collection.doc(uid).get().then((doc) => {
          if (doc.exists) {
              return doc.data();
          } else {
              throw new Error("No such document!");
          }
      });
  };

  /**
   * Registers the user with given details
   */
  // editProfileAPI = (email: any, password: any) => {
  //   return new Promise((resolve, reject) => {
  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then(
  //         (user: any) => {
  //           resolve(firebase.auth().currentUser);
  //         },
  //         (error: any) => {
  //           reject(this._handleError(error));
  //         }
  //       );
  //   });
  // };

  editProfileAPI = (username: any, idx: any) => {
    return new Promise((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        // Update the display name        
        currentUser.updateProfile({
          displayName: username
        })
          .then(() => {
            const data = (currentUser as any).multiFactor.user.displayName;
            resolve({ username: data });
            // resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject(new Error('User not authenticated'));
      }
    });
  }
  

  /**
   * forget Password user with given details
   */
  forgetPassword = (email: any) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .sendPasswordResetEmail(email, {
          url:
            window.location.protocol + "//" + window.location.host + "/login",
        })
        .then(() => {
          resolve(true);
        })
        .catch((error: any) => {
          reject(this._handleError(error));
        });
    });
  };

  /**
   * Logout the user
   */
  logout = () => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          resolve(true);
        })
        .catch((error: any) => {
          reject(this._handleError(error));
        });
    });
  };

  /**
   * Social Login user with given details
   */
  socialLoginUser = async (type: any) => {
    let provider: any;
    if (type === "google") {
      provider = new firebase.auth.GoogleAuthProvider();
    } else if (type === "facebook") {
      provider = new firebase.auth.FacebookAuthProvider();
    }
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      return user;
    } catch (error) {
      throw this._handleError(error);
    }
  };

  // addNewUserToFirestore = (user: any) => {
  //   const collection = firebase.firestore().collection("users");
  //   const { profile } = user.additionalUserInfo;
  //   const details = {
  //     firstName: profile.given_name ? profile.given_name : profile.first_name,
  //     lastName: profile.family_name ? profile.family_name : profile.last_name,
  //     fullName: profile.name,
  //     email: profile.email,
  //     picture: profile.picture,
  //     createdDtm: firebase.firestore.FieldValue.serverTimestamp(),
  //     lastLoginTime: firebase.firestore.FieldValue.serverTimestamp()
  //   };
  //   collection.doc(firebase.auth().currentUser?.uid).set(details);
  //   return { user, details };
  // };

  setLoggeedInUser = (user: any) => {
    localStorage.setItem("authUser", JSON.stringify(user));
  };

  /**
   * Returns the authenticated user
   */
  getAuthenticatedUser = () => {
    if (!localStorage.getItem("authUser")) return null;
    return JSON.parse(localStorage.getItem("authUser") || "");
  };

  /**
   * Handle the error
   * @param {*} error
   */
  _handleError(error: any) {
    // var errorCode = error.code;
    var errorMessage = error.message;
    return errorMessage;
  }
}

let _fireBaseBackend: any = null;

/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config: any) => {
  if (!_fireBaseBackend) {
    _fireBaseBackend = new FirebaseAuthBackend(config);
  }
  return _fireBaseBackend;
};

/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
  return _fireBaseBackend;
};


const getUserFirestore = async (uid: string): Promise<UserTwo | null> => {
  try {
      const doc = await firebase.firestore().collection('users').doc(uid).get();
      if (doc.exists) {
          const data = doc.data();
          return {
              uid: doc.id,
              email: data?.email,
              firstName: data?.firstName,
              lastName: data?.lastName,
              createdDtm: data?.createdDtm,
              lastLoginTime: data?.lastLoginTime,
          } as UserTwo;
      } else {
          console.error("No such document!");
          return null;
      }
  } catch (error) {
      console.error("Error getting document:", error);
      return null;
  }
};

export { initFirebaseBackend, getFirebaseBackend, getUserFirestore, type UserTwo };