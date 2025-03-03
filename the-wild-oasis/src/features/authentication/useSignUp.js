import { useMutation } from "@tanstack/react-query";
import { signUp as signUpAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
    const { mutate: signUp, isPending } = useMutation({
        mutationFn: signUpAPI,
        onSuccess: () => {
           
            toast.success('Account successfully created!, please verify the new account from the users email address');
        }
    });

    return { signUp, isPending };
}