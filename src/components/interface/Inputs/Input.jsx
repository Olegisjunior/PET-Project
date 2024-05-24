export default function Input({
  onChange,
  tailwind,
  placeholder,
  type = "text",
}) {
  return (
    <input
      onChange={onChange}
      className={`p-2 focus:outline-none focus:border-[2px] focus:border-black text-center rounded-[35px] ${tailwind}`}
      type={type}
      placeholder={placeholder}
    />
  );
}
