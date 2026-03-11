"use client";

import { Download, ExternalLink, FileText } from "lucide-react";

import { Button } from "../ui/button";

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
          {/* <div className="bg-background mb-6 rounded-lg text-white lg:mb-0 lg:p-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-black dark:text-white" />
                <h1 className="section-title text-foreground">Resume</h1>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={"link"}
                  onClick={handleOpenNewTab}
                  className="flex cursor-pointer items-center gap-2"
                  title="Open in new tab"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open
                </Button>
                <Button
                  variant={"link"}
                  onClick={handleDownload}
                  className="flex cursor-pointer items-center gap-2"
                  title="Download PDF"
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </div> */}

          {/* PDF Viewer Section */}
          <div className="lg:p-6">
            <div className="overflow-hidden rounded-lg border border-gray-300 bg-gray-100 shadow-inner dark:border-gray-700 dark:bg-gray-900">
              <embed
                src={resumePath}
                type="application/pdf"
                className="h-[calc(100vh-240px)] min-h-125 w-full md:min-h-267.5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
