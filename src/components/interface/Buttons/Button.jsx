export default function Button({ onClick, children, hoverUnd, tailwind }) {
  return (
    <button
      onClick={onClick}
      className={
        hoverUnd
          ? `hover:underline focus:outline-none hover:pointer ${tailwind}`
          : `hover:pointer focus:outline-none ${tailwind}`
      }
    >
      {children}
    </button>
  );
}
