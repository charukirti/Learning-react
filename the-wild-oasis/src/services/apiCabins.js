import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase
        .from('cabins')
        .select('*');

    if (error) {
        console.log(error);
        throw new Error('Cabins could not be loaded');
    }

    // if every thing is okay

    return data;

}

export async function createEditCabin(newCabin, id) {

    console.log(newCabin, id);

    // https://ptidnexffkvtctgfumer.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');

    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    // 1. create a cabin

    let query = supabase.from('cabins');

    // A. Create

    if (!id)
        query =
            query
                .insert([
                    { ...newCabin, image: imagePath }
                ]);


    //B. Edit

    if (id) query = query.update({ ...newCabin, image: imagePath })
        .eq('id', id)
        .select();

    const { data, error } = await query.select().single();

    if (error) {
        console.log(error);
        throw new Error('Cabins could not be loaded');
    }

    // 2. upload image

    const { error: storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image);

    // 3. if there is an error while uploading the image, delete that cabin

    if (storageError) {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id);
        console.log(storageError);
        throw new Error('Cabins cabin image could not be uploaded, and cabin could not be created');
    }

    // if every thing is okay

    return data;

}

export async function deleteCabin(id) {
    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        console.log(error);
        throw new Error('Cabin could not be deleted');
    }

    return data;
}