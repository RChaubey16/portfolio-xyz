"use client";

import { Download, ExternalLink, FileText } from "lucide-react";

export default function ResumeViewer() {
  // Update this path to match where your PDF is stored in your Next.js project
  // For example: '/resume.pdf' if it's in the public folder
  const basePath = "/assets/Ruturaj-Chaubey-Resume.pdf";

  // Add PDF Open Parameters to customize the view
  // Note: Browser support varies - works best in Adobe Reader plugin
  const resumePath = `${basePath}#toolbar=1&navpanes=0&scrollbar=1&page=1&view=FitH`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Ruturaj-Chaubey-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    window.open(resumePath, "_blank");
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-5xl">
        <div className="bg-background overflow-hidden rounded-lg">
          {/* Header */}
          <div className="bg-background mb-6 rounded-lg text-white lg:mb-0 lg:p-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-black dark:text-white" />
                <h1 className="section-title text-foreground">Resume</h1>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handleOpenNewTab}
                  className="flex cursor-pointer items-center gap-2 rounded border border-gray-600 bg-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
                  title="Open in new tab"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open
                </button>
                <button
                  onClick={handleDownload}
                  className="flex cursor-pointer items-center gap-2 rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  title="Download PDF"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* PDF Viewer Section */}
          <div className="lg:p-6">
            <div className="overflow-hidden rounded-lg border border-gray-300 bg-gray-100 shadow-inner dark:border-gray-700 dark:bg-gray-900">
              <embed
                src={resumePath}
                type="application/pdf"
                className="h-[calc(100vh-240px)] min-h-[500px] w-full md:min-h-[1070px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
