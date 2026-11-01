"use client";

import { ArrowUpRight, Check, ChevronDown, Copy, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiClaude, SiOpenai } from "react-icons/si";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type CopyPageButtonProps = {
  markdown: string;
  // Site-relative path of the raw markdown, e.g. /work/knowbase.md
  markdownPath: string;
};

function askPrompt(markdownUrl: string) {
  return encodeURIComponent(
    `Read ${markdownUrl} so I can ask questions about it.`,
  );
}

const CopyPageButton = ({ markdown, markdownPath }: CopyPageButtonProps) => {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 2000);
  };

  // Resolved on click so it always matches the host the visitor is on
  const absoluteMarkdownUrl = () =>
    new URL(markdownPath, window.location.origin).toString();

  const openInNewTab = (url: string) =>
    window.open(url, "_blank", "noopener,noreferrer");

  return (
    <div className="inline-flex items-center">
      <Button
        variant="outline"
        size="sm"
        onClick={copy}
        className="rounded-r-none border-r-0 px-2.5 text-[13px] font-normal"
      >
        <span aria-hidden="true" className="grid *:[grid-area:1/1]">
          <Copy
            className={cn(
              "transition-[opacity,scale,filter] duration-150 ease-(--ease-out-quint)",
              copied
                ? "scale-50 opacity-0 blur-[2px]"
                : "scale-100 opacity-100 blur-none",
            )}
          />
          <Check
            className={cn(
              "text-success transition-[opacity,scale,filter] duration-150 ease-(--ease-out-quint)",
              copied
                ? "scale-100 opacity-100 blur-none"
                : "scale-50 opacity-0 blur-[2px]",
            )}
          />
        </span>
        <span className="grid *:[grid-area:1/1]">
          <span
            aria-hidden={copied}
            className={cn(
              "transition-opacity duration-150 ease-(--ease-out-quint)",
              copied && "opacity-0",
            )}
          >
            Copy page
          </span>
          <span
            aria-hidden={!copied}
            className={cn(
              "transition-opacity duration-150 ease-(--ease-out-quint)",
              !copied && "opacity-0",
            )}
          >
            Copied
          </span>
        </span>
      </Button>
      {/* Outside the button so it isn't folded into the button's accessible name */}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon-sm"
            aria-label="More page options"
            className="w-7 rounded-l-none"
          >
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-60">
          <DropdownMenuItem onSelect={copy}>
            <Copy />
            <div>
              <p>Copy page</p>
              <p className="text-muted-foreground text-xs">
                Copy as Markdown for LLMs
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={markdownPath} target="_blank" rel="noopener noreferrer">
              <FileText />
              <div className="flex-1">
                <p>View as Markdown</p>
                <p className="text-muted-foreground text-xs">
                  Open this page as plain text
                </p>
              </div>
              <ArrowUpRight className="text-muted-foreground" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() =>
              openInNewTab(
                `https://claude.ai/new?q=${askPrompt(absoluteMarkdownUrl())}`,
              )
            }
          >
            <SiClaude />
            <div className="flex-1">
              <p>Open in Claude</p>
              <p className="text-muted-foreground text-xs">
                Ask questions about this page
              </p>
            </div>
            <ArrowUpRight className="text-muted-foreground" />
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() =>
              openInNewTab(
                `https://chatgpt.com/?hints=search&q=${askPrompt(absoluteMarkdownUrl())}`,
              )
            }
          >
            <SiOpenai />
            <div className="flex-1">
              <p>Open in ChatGPT</p>
              <p className="text-muted-foreground text-xs">
                Ask questions about this page
              </p>
            </div>
            <ArrowUpRight className="text-muted-foreground" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CopyPageButton;
