import { useEffect, useState } from "react";
import { getCurrentWebview } from "@tauri-apps/api/webview";
import { readTextFile, readFile } from "@tauri-apps/plugin-fs";

export default function Droparea() {
    const [fileDropped, setFileDropped] = useState<string>("");
    const [fileContent, setFileContent] = useState<string>("");
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        let cleanupFunction: (() => void) | undefined;

        const setupDragDrop = async () => {
            const webview = getCurrentWebview();

            cleanupFunction = await webview.onDragDropEvent(async (event: any) => {
                if (event.payload.type === "drop" && event.payload.paths?.length) {
                    const path = event.payload.paths[0];
                    setFileDropped(path);

                    try {
                        if (path.match(/\.(png|jpg|jpeg|gif|bmp|webp)$/i)) {
                            // Read image as binary
                            const fileBytes = await readFile(path);
                            const blob = new Blob([new Uint8Array(fileBytes)], { type: "image/png" });
                            const imageUrl = URL.createObjectURL(blob);
                            setImageSrc(imageUrl);
                            setFileContent(""); // Clear text preview
                        } else {
                            // Read text file
                            const content = await readTextFile(path);
                            setFileContent(content.substring(0, 500) + "..."); // Show first 500 chars
                            setImageSrc(null); // Clear image preview
                        }
                    } catch (error) {
                        console.error("Error reading file:", error);
                    }
                }
            });
        };

        setupDragDrop();

        return () => {
            if (cleanupFunction) cleanupFunction();
        };
    }, []);

    return (
        <div className="border-2 border-dashed border-gray-400 p-4 text-slate-400 text-center">
            <p>Dropped File: {fileDropped}</p>

            {fileContent && (
                <div className="mt-4">
                    <p>File Preview:</p>
                    <pre className="mt-2 p-2 bg-gray-100 text-slate-500 rounded">{fileContent}</pre>
                </div>
            )}

            {imageSrc && (
                <div className="mt-4">
                    <p>Image Preview:</p>
                    <img src={imageSrc} alt="Dropped" className="mt-2 max-w-full max-h-96 border rounded" />
                </div>
            )}
        </div>
    );
}
