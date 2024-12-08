import supabase from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase
        .from('cabins')
        .select('*');
    
    if (error) {
        console.log(error)
        throw new Error('Cabins could not be loaded')
    }

    // if every thing is okay

    return data

}