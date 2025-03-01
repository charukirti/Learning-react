import { useMutation } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate = useNavigate();
    const { mutate: logIn, isPending } = useMutation({
        mutationFn: ({ email, password }) => loginAPI({ email, password }),
        onSuccess: () => {
            toast.success('User logged in successfully!');
            navigate('/dashboard');
        },
        onError: (err) => {
            console.log(err);
            toast.error('Provided email or password is incorrect');
        }
    });

    return { logIn, isPending };
}