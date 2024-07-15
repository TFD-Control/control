import React, { useEffect, useState } from 'react';

import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";


const useUserRole = () => {
    // const [role, setRole] = useState<string | null>(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const fetchUserRole = async () => {
            const user = firebase.auth().currentUser;
            if (user) {
                const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();

                const userData = userDoc.data();
                if (userData && userData.role) {
                    setUserRole(userData.role); 
                }

                // if (userDoc.exists) {
                //     const userData = userDoc.data();
                //     setRole(userData?.role || null);
                // }
            }
        };

        fetchUserRole();
    }, []);

    return userRole;
};

export default useUserRole;

// const useUserRole = () => {
//   const auth = useAuth(); // Supposons que vous utilisez un hook pour l'authentification Firebase
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       if (auth.currentUser) {
//         // Ici, vous pouvez accéder aux données de l'utilisateur pour récupérer le rôle
//         // Exemple fictif pour démonstration, vous devrez adapter à votre structure Firebase
//         const userSnapshot = await firebase.firestore().collection('users').doc(auth.currentUser.uid).get();
//         const userData = userSnapshot.data();
//         if (userData && userData.role) {
//           setUserRole(userData.role); // Assurez-vous d'avoir une propriété "role" dans vos données utilisateur Firebase
//         }
//       }
//     };

//     fetchUserRole();
//   }, [auth.currentUser]);

//   return userRole;
// };

// export default useUserRole;
