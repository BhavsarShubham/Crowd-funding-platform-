
    // Initialize your provider
import { input } from "@nextui-org/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
    // Upload files to IPFS
    import { useStorageUpload } from "@thirdweb-dev/react";

    // Render files from IPFS
    import { MediaRenderer } from "@thirdweb-dev/react";
    import { useState } from "react";

    export default function upload() {
    const { mutateAsync: upload } = useStorageUpload();
    const [files, setFiles] = useState([])
    const storage = new ThirdwebStorage({

      clientId:"45cdc3e09127f4f6fc3b6d0655d05b57",// You can get one from dashboard settings
    });
    const uploadData = async () => {
        // Get any data that you want to upload'
        const dataToUpload = files;

        // And upload the data with the upload function
        const uris = await storage.upload({ data: dataToUpload , options: { uploadWithGatewayUrl: true }});
    }
    return (
      <>
        <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
        <button onClick={uploadData} >Upload</button>
        <MediaRenderer src="ipfs://QmQ1hDny8esSN41Ac2tTZfS8dkF8wQN6VTnzP8h5hGMvNf" />
        </>
    );
    }
