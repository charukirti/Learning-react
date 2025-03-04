import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUserData } from "../../services/apiAuth";

export function useUpdateUser() {

    const queryClient = useQueryClient();

    const { mutate: updateUser, isLoading: isUpdating } = useMutation({
        mutationFn: updateCurrentUserData,
        onSuccess: ({user}) => {
            toast.success("User account successfully updated");
            // queryClient.invalidateQueries({ queryKey: ["user"] });
            queryClient.setQueryData(['user'], user)

        },
        onError: (err) => toast.error(err.message),
    });

    return {
        updateUser,
        isUpdating
    }
}