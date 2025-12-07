import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Contact() {
  const emailAddress = "alexandre.poupeau.contact@gmail.com"; // Replace with your actual email
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message after 2 seconds
    } catch (err) {
      console.error("Failed to copy email: ", err);
      // Optionally, set a different message for error
    }
  };

  return (
    <div className="max-w-6xl container mx-auto p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>I'd love to hear from you!</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg mb-4">
            For quick inquiries, you can reach me directly at:
          </p>
          <TooltipProvider>
            <Tooltip open={copied || undefined}>
              <TooltipTrigger asChild>
                <a
                  href={`mailto:${emailAddress}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent mailto link from opening immediately
                    handleCopy();
                  }}
                  className="text-blue-500 hover:underline font-semibold text-xl cursor-pointer"
                  aria-label="Copy email address to clipboard"
                >
                  {emailAddress}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{copied ? "Copied!" : "Click to copy"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">Click the email address to copy it to your clipboard.</p>
        </CardFooter>
      </Card>
    </div>
  );
}
