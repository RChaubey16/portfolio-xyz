"use client";

import { FileText, Download, ExternalLink } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="bg-background rounded-lg overflow-hidden">
          {/* Header */}
          <div className="mb-6 lg:mb-0 bg-background lg:p-6 text-white rounded-lg ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-black dark:text-white" />
                <h1 className="section-title text-foreground">Resume</h1>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handleOpenNewTab}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 dark:bg-gray-800 text-white rounded hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors text-sm font-medium border border-gray-600 cursor-pointer"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm font-medium border border-gray-300 dark:border-gray-600 cursor-pointer"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* PDF Viewer Section */}
          <div className="lg:p-6">
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-inner bg-gray-100 dark:bg-gray-900">
              <embed
                src={resumePath}
                type="application/pdf"
                className="w-full h-[calc(100vh-240px)] min-h-[500px] md:min-h-[1070px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
