import { Download, ExternalLink } from "lucide-react";

import { Button } from "../ui/button";

const RESUME_PATH = "/assets/Ruturaj-Chaubey-Resume.pdf";

export default function ResumeViewer() {
  // PDF Open Parameters — browser support varies
  const viewerSrc = `${RESUME_PATH}#toolbar=1&navpanes=0&scrollbar=1&page=1&view=FitH`;

  return (
    <div>
      <div className="flex gap-2">
        <Button asChild variant="outline" size="sm">
          <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
            <ExternalLink />
            Open
          </a>
        </Button>
        <Button asChild size="sm">
          <a href={RESUME_PATH} download="Ruturaj-Chaubey-Resume.pdf">
            <Download />
            Download
          </a>
        </Button>
      </div>
      <div className="bg-muted mt-4 overflow-hidden rounded-xl border">
        <embed
          src={viewerSrc}
          type="application/pdf"
          className="h-[calc(100vh-260px)] min-h-125 w-full"
        />
      </div>
    </div>
  );
}
