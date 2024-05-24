export default function Button(onClick, children, hoverUnd) {
  return (
    <button
      key={children}
      className={hoverUnd ? `hover:underline` : ``}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
