import { useState } from "react";
import { Button } from '@/assets/components/button/button';

const FileUpload = () => {
        const [selectedFile, setSelectedFile] = useState(null);
      
        const handleFileChange = (e) => {
          setSelectedFile(e.target.files[0]);
        };
    
  return (
    <div className="flex flex-col items-center">
      <label className="relative cursor-pointer btnPrimaryC text-white font-semibold py-2 px-4 rounded-lg">
        fazer upload de curriculo
        <input 
          required
          type="file" 
          onChange={handleFileChange} 
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </label>
      {selectedFile && (
        <p className="mt-2 text-gray-700">
          {selectedFile.name}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
