export default function DeviceList({ devices }) {
  return (
    <div>
      <h2 className="text-lg font-semibold">Devices</h2>
      <ul className="divide-y">
        {devices.map(device => (
          <li key={device.id} className="p-2">
            {device.name} - {device.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
