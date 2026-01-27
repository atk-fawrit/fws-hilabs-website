/**
 * BackButton Component
 * 
 * Reusable back button with consistent styling and icon
 * Used for navigation back to overview pages
 */

interface BackButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  text,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-accent hover:text-primary transition-colors mb-6 ${className}`}
    >
      <svg 
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M15 19l-7-7 7-7" 
        />
      </svg>
      {text}
    </button>
  );
};