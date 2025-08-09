import { useState } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Permit {
  id: string;
  title: string;
  status: 'approved' | 'pending' | 'denied' | 'ongoing';
  location: string;
  type: string;
  createdAt: string;
  description: string;
}

const mockPermits: Permit[] = [
  // Keeping mock data for now
  { id: '1', title: 'Electrical Work - Building A', status: 'ongoing', location: 'Building A, Floor 3', type: 'Electrical', createdAt: '2024-01-15', description: 'Installation of new electrical panels and wiring'},
  { id: '2', title: 'Hot Work - Welding Bay', status: 'pending', location: 'Manufacturing Floor', type: 'Hot Work', createdAt: '2024-01-16', description: 'Welding repairs on production equipment'},
];

const SseMaintenanceDashboard = () => {
  const [permits] = useState<Permit[]>(mockPermits);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved': return <Badge className="bg-md-success text-white">Approved</Badge>;
      case 'pending': return <Badge className="bg-md-warning text-white">Pending</Badge>;
      case 'denied': return <Badge className="bg-md-error text-white">Denied</Badge>;
      case 'ongoing': return <Badge className="bg-md-primary text-white">On-going</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleCreatePermit = () => {
    console.log('Creating new permit...');
  };

  return (
    <DashboardLayout title="SSE (Maintenance) Dashboard">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-md-text-primary font-roboto mb-2">
            My Permits
          </h2>
          <p className="text-md-text-secondary font-roboto">
            Manage and track your submitted permits
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {permits.map((permit) => (
            <Card key={permit.id} className="md-elevation-1 hover:md-elevation-2 transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-roboto text-md-text-primary">
                    {permit.title}
                  </CardTitle>
                  {getStatusBadge(permit.status)}
                </div>
              </CardHeader>
              <CardContent>
                {/* Content from original SupervisorDashboard */}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="fixed bottom-6 right-6">
          <Button 
            variant="fab" 
            size="fab"
            onClick={handleCreatePermit}
            title="New Permit"
          >
            <span className="material-icons text-xl">add</span>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SseMaintenanceDashboard;