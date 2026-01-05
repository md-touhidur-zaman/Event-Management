"use client";
import { useFileUpload } from "@/hooks/use-file-upload";
import { Button } from "@/components/ui/button";

import { Dispatch, SetStateAction } from "react";
import { AlertCircleIcon } from "lucide-react";

interface IProfileImageUploadProps {
  setImage: Dispatch<SetStateAction<File | null>>;
  setPreviewUrl: Dispatch<SetStateAction<string | undefined>>;
  
}

export default function ProfileImageUploader({
  setImage,
  setPreviewUrl,
  
}: IProfileImageUploadProps) {
  const maxSizeMB = 5;
  const maxSize = maxSizeMB * 1024 * 1024;
  const [{ files, errors }, {  openFileDialog, getInputProps }] =
    useFileUpload({
      accept: "image/*",
      maxSize,
    });

  

  if (files.length > 0) {
    setImage(files[0].file as File);
    setPreviewUrl(files[0].preview);
  } else {
    setImage(null);
  }

  
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Button
            type="button"
            variant={"outline"}
            className="bg-[#DC143C] text-white cursor-pointer"
            aria-haspopup="dialog"
            onClick={openFileDialog}
          >
            Change Profile Picture
          </Button>
        </div>
        <small className="text-muted-foreground">
          Max Size: {maxSizeMB} MB
        </small>
        <input
          {...getInputProps()}
          aria-label="Upload image file"
          className="sr-only"
          tabIndex={-1}
        />
      </div>
      {errors.length > 0 && (
        <div
          className="flex items-center gap-1 text-destructive text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  );
}
