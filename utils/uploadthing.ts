import { createUploadthing, type FileRouter } from 'uploadthing/server';
import type { ourFileRouter as ImportedFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react";

const f = createUploadthing();

export const ourFileRouter = {
    pdfUploader: f({ pdf: { maxFileSize: '32MB' } }) // Allow only PDF files up to 10MB
        .onUploadComplete(async ({ file }) => {
            console.log('File uploaded:', file);
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter & ImportedFileRouter;

export const {useUploadThing} = generateReactHelpers<ImportedFileRouter>();