import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  // auth, 
  signInWithGooglePopup,
  // signInWithGoogleRedirect, 
  createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
//   useEffect( () => {
//  async function fetchData() {
//     const response = await getRedirectResult(auth);

//     if(response) {
//       const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   }
//   fetchData();
//   },[])

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>SignIn page</h1>
      <button onClick={logGoogleUser}>
        Sign in with google popup
      </button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}
    </div>
  )
}

export default SignIn;