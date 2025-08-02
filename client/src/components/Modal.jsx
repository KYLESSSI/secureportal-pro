export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative bg-white dark:bg-gray-800 p-4 rounded">
        <button onClick={onClose} className="absolute top-2 right-2">&times;</button>
        {children}
      </div>
    </div>
  );
}
