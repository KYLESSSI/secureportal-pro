export default function DocumentList({ documents }) {
  return (
    <div>
      <h2 className="text-lg font-semibold">Documents</h2>
      <ul className="divide-y">
        {documents.map(doc => (
          <li key={doc.id} className="p-2">
            <a href={doc.url} className="text-blue-600" target="_blank" rel="noopener noreferrer">{doc.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
