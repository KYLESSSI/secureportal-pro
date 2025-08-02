export default function FormInput({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-sm">{label}</span>
      <input className="mt-1 p-2 border rounded w-full" {...props} />
    </label>
  );
}
