import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-md-background flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-md-text-primary mb-6 font-roboto">
          Permit Management Portal
        </h1>
        <p className="text-xl text-md-text-secondary mb-12 font-roboto leading-relaxed">
          Streamline your permit workflow with our comprehensive management system
        </p>
        <Button 
          size="lg" 
          className="text-lg font-medium"
          onClick={() => navigate('/role-selection')}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Home;