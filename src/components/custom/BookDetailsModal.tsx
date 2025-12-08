import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface BookDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    name: string;
    author: string;
    image: string;
    badges: string[];
    link: string;
  } | null;
}

export function BookDetailsModal({ isOpen, onClose, book }: BookDetailsModalProps) {
  if (!book) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{book.name}</DialogTitle>
          <DialogDescription>{book.author}</DialogDescription>
        </DialogHeader>
        <img src={book.image} alt={book.name} className="w-full rounded-lg" />
        <div className="flex flex-wrap gap-2 py-4">
          {book.badges.map((badge, index) => (
        <Badge key={index} variant="secondary">
          {badge}
        </Badge>
          ))}
        </div>
        <DialogFooter>
          <a href={book.link} target="_blank" rel="noopener noreferrer">
        <Button>
          <ExternalLink className="mr-2 h-4 w-4" />
          Go to reference
        </Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
