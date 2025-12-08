
interface BookCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

export function BookCard({ name, image, onClick }: BookCardProps) {
  return (
    <div onClick={onClick} className="cursor-pointer group">
      <div className="hover:scale-105 transition-all overflow-hidden">
          <img src={image} alt={`${name} book cover`} className='w-full h-56 rounded-md' />
      </div>
    </div>
  );
}