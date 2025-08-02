import DeviceList from '../components/DeviceList';
import DocumentList from '../components/DocumentList';
import BillingInfo from '../components/BillingInfo';

export default function ClientPortal() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Client Portal</h1>
      {/* TODO: populate with client-specific data */}
      <DeviceList devices={[]} />
      <DocumentList documents={[]} />
      <BillingInfo />
    </div>
  );
}
