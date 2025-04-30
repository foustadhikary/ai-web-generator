import { WebContainer } from '@webcontainer/api';
import React, { useEffect, useState } from 'react';

interface PreviewFrameProps {
  files: any[];
  webContainer: WebContainer | undefined; // Changed to allow undefined
}

export function PreviewFrame({ files, webContainer }: PreviewFrameProps) {
  // In a real implementation, this would compile and render the preview
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function main() {
    // Check if webContainer exists
    if (!webContainer) {
      setError("WebContainer not available");
      setLoading(false);
      return;
    }

    try {
      const installProcess = await webContainer.spawn('npm', ['install']);

      installProcess.output.pipeTo(new WritableStream({
        write(data) {
          console.log(data);
        }
      }));

      await webContainer.spawn('npm', ['run', 'dev']);

      // Wait for `server-ready` event
      webContainer.on('server-ready', (port, url) => {
        // ...
        console.log(url);
        console.log(port);
        setUrl(url);
        setLoading(false);
      });
    } catch (err) {
      console.error("Error in WebContainer:", err);
      setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
      setLoading(false);
    }
  }

  useEffect(() => {
    main();
  }, [webContainer]); // Added webContainer to dependency array

  return (
    <div className="h-full flex items-center justify-center text-gray-400">
      {loading && !error && (
        <div className="text-center">
          <p className="mb-2">Loading...</p>
        </div>
      )}
      {error && (
        <div className="text-center text-red-500">
          <p className="mb-2">{error}</p>
        </div>
      )}
      {url && <iframe width={"100%"} height={"100%"} src={url} />}
    </div>
  );
}