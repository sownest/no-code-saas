import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing } from "uploadthing/next";
import { type FileRouter } from "uploadthing/next";

// Initialize the Uploadthing instance
const f = createUploadthing();

// Define the file router for handling uploads
export const ourFileRouter = {
    pdfUploader: f({ pdf: { maxFileSize: "32MB" } }) // Configure to accept PDF files up to 32MB
        .middleware(async ({ req }) => {
            // Authenticate the user using Clerk
            const user = await currentUser();
            if (!user) throw new Error("Unauthorized"); // Throw an error if the user is not authenticated

            // Return metadata for the upload
            return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            // Log details about the completed upload
            console.log("Upload complete for file:", file);
            console.log("Metadata:", metadata);
            console.log("File URL:", file.ufsUrl);

            // Perform additional actions with the uploaded file and metadata if needed
            return { userId: metadata.userId };
        }),
} satisfies FileRouter;

export type ourFileRouter = typeof ourFileRouter;