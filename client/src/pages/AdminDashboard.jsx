import DeviceList from '../components/DeviceList';
import DocumentList from '../components/DocumentList';
import BillingInfo from '../components/BillingInfo';

export default function AdminDashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      {/* TODO: populate with real data */}
      <DeviceList devices={[]} />
      <DocumentList documents={[]} />
      <BillingInfo />
    </div>
  );
}
