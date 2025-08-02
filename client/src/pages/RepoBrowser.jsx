import { useEffect, useState } from 'react';

function renderTree(nodes) {
  return (
    <ul className="ml-4 list-disc">
      {nodes.map(node => (
        <li key={node.name}>
          {node.name}
          {node.type === 'dir' && node.children && renderTree(node.children)}
        </li>
      ))}
    </ul>
  );
}

export default function RepoBrowser() {
  const [tree, setTree] = useState([]);

  useEffect(() => {
    fetch('/repo')
      .then(res => res.json())
      .then(setTree)
      .catch(err => console.error('Failed to load repo tree', err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Repository Browser</h1>
      {tree.length ? renderTree(tree) : <p>Loading...</p>}
    </div>
  );
}
