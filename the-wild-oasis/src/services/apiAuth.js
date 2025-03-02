import supabase from "./supabase";

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

    console.log(data);

    if (error) throw Error(error.message);

    return data?.user;
}

// logout user

export async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) throw new Error(error.message);
}