
  export async function action(formData) {
   
    const file = formData.get("file");

    if (!file) {
      console.error("No file uploaded.");
      return;
    }

    // You can now read file contents if needed
    console.log("Received file:", file.name, file.size);

    // Optionally, store it, send to S3, etc.
  }