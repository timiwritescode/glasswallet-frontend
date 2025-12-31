export function Logo({
  className = "h-10"
}: {
  className?: string;
}) {
  return (
    <img
      src="/glasswallet-logo.svg"
      alt="Glasswallet Logo"
      className={className}
    />
  );
}
