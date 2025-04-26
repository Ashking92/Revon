
import React from 'react';
import { Upload, File } from "lucide-react";

interface AppStepThreeProps {
  fileData: File | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AppStepThree: React.FC<AppStepThreeProps> = ({ fileData, onFileChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Upload App Files (Optional)</h3>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="flex flex-col items-center justify-center space-y-3">
            {fileData ? (
              <>
                <File className="h-12 w-12 text-blue-500" />
                <span className="text-sm font-medium">{fileData.name}</span>
                <span className="text-xs text-gray-500">{(fileData.size / (1024 * 1024)).toFixed(2)} MB</span>
                <span className="text-xs text-blue-500 underline">Change File</span>
              </>
            ) : (
              <>
                <Upload className="h-12 w-12 text-gray-400" />
                <span className="text-sm font-medium">Drag and drop your file here, or click to browse</span>
                <span className="text-xs text-gray-500">APK for Android, TestFlight link for iOS</span>
                <span className="text-xs text-gray-500">Max 50MB</span>
              </>
            )}
          </div>
        </label>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
          onChange={onFileChange}
          accept=".apk,.zip,.ipa"
        />
      </div>
      
      <p className="text-sm text-gray-600">
        Note: For iOS apps, you can either upload an IPA file or provide a TestFlight link in the "App Store Link" field.
      </p>
    </div>
  );
};
