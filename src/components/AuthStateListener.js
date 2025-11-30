import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth_mod } from "../firebase/config";
import { reducerSetLogin } from "../../redux/loginSlice";

const AuthStateListener = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth_mod, async (user) => {
            if (user) {
                const token = await user.getIdToken();
                const serializableUser = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    emailVerified: user.emailVerified,
                    accessToken: token,
                }
                dispatch(reducerSetLogin(serializableUser));
            }
        });

        return () => unsub();
    }, [dispatch]); // Adicione dispatch nas dependências do useEffect

    return null; // Este componente não renderiza nada visualmente
};

export default AuthStateListener;