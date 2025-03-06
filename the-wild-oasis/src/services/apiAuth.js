import supabase, { supabaseUrl } from "./supabase";

export async function signUp({ fullName, email, password }) {
    const { data, error } = await supabase.auth.signUp({
        email, password, options: {
            data: {
                fullName,
                avatar: ''
            }
        }
    });

    if (error) throw new Error(error.message);
    return data;
}

export async function login({ email, password }) {

    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) throw Error(error.message);

    console.log(data);
    return data;
}

// load user from supabase

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();

    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();


    if (error) throw Error(error.message);

    return data?.user;
}

// logout user

export async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) throw new Error(error.message);
}


// update user data

export async function updateCurrentUserData({ password, fullName, avatar }) {
    // 1. Upadate password or fullName
    let updateData;

    // update according to what received

    if (password) updateData = { password };
    if (fullName) updateData = { data: { fullName } };


    const { data, error } = await supabase.auth.updateUser(updateData);

    if (error) throw new Error(error.message);

    if (!avatar) return data;

    // 2. Upload avatar
    const fileName = `avatar=${data.user.id}-${Math.random()}`;

    const { error: storageError } = await supabase.storage.from('avatars').upload(fileName, avatar);
    if (storageError) throw new Error(storageError.message);

    // 3. Update avatar

    const { data: updatedUser, error: updateAvatarError } = await supabase.auth.updateUser({
        data: {
            avatar: `${supabaseUrl}/storage/v1/object/public/avatars//${fileName}`
        }
    });

    if (updateAvatarError) throw new Error(updateAvatarError.message);

    return updatedUser;
}