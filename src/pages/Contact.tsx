import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Copy, Check } from 'lucide-react';
import { EMAIL } from '@/data/constants';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message after 2 seconds
    } catch (err) {
      console.error("Failed to copy email: ", err);
      // Optionally, set a different message for error
    }
  };

  return (
    <div className="max-w-6xl container mx-auto p-4 space-y-8">
      <title>Contact - Alexandre Poupeau</title>
      <meta name="description" content="Get in touch with me. Find my email address and connect for any questions or collaborations." />
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>I'd love to hear from you!</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg mb-6">
            For quick inquiries, you can reach me directly at:
          </p>
              <div className="flex w-full max-w-sm items-center gap-2 mx-auto">
              <input
                type="text"
                readOnly
                value={EMAIL}
                className="flex h-10 w-full rounded-md border border-input bg-foreground text-muted dark:bg-accent-foreground dark:text-muted px-3 py-1 shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="Email"
                aria-label="Email address"
              />
              <TooltipProvider>
                <Tooltip open={copied || undefined}>
                <TooltipTrigger asChild>
                  <button
                  onClick={handleCopy}
                  className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-foreground text-muted dark:bg-accent-foreground dark:text-muted px-3 py-2 font-medium ring-offset-background transition-colors hover:bg-accent-foreground/90 hover:dark:bg-accent-foreground/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="Copy email address to clipboard"
                  >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{copied ? "Copied!" : "Click to copy"}</p>
                </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">Click the icon to copy the email address to your clipboard.</p>
        </CardFooter>
      </Card>
    </div>
  );
}