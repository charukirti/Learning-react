import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    const { mutate: logIn, isPending } = useMutation({
        mutationFn: ({ email, password }) => loginAPI({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user)
            toast.success('User logged in successfully!');
            navigate('/dashboard', {replace: true});
        },
        onError: (err) => {
            console.log(err);
            toast.error('Provided email or password is incorrect');
        }
    });

    return { logIn, isPending };
}