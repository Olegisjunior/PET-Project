export default function Button({ onClick, children, hoverUnd, tailwind }) {
  return (
    <button
      className={
        hoverUnd
          ? `hover:underline focus:outline-none hover:pointer ${tailwind}`
          : `hover:pointer focus:outline-none ${tailwind}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
