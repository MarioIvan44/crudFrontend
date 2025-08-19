const IMAGE_API = 'http://localhost:8081/api/image';

//Sube una imagen y devuelve el JSON del backend: { message, url}
export async function uploadImage(file) {
    const formData = new FormData();
    formData.append('image', file); //Se agrega el archivo (file) al formulario con el nombre image
     //Debe coincidir con @RequestParam("image")

    const res = await fetch (`${IMAGE_API}/upload`, {
        method: 'POST', 
        body: formData,
    });
    
    return res.json();
}

//Sube a una carpeta específicada en el backend
export async function uploadImageToFolder(file, folder) {
    const formData = new FormData(); //Se crea el objeto de formData para encapsular los datos que se enviarán en la petición
    formData.append('image', file); //Se añade el archivo que el usuario selecciona
    formData.append('folder', folder); //Además de la imagen, se envia el nombre de la carpeta de destino

    const res = await fetch(`${IMAGE_API}/upload-to-Folder`, {
        method: 'POST',
        body: formData,
    });

    return res.json();
}