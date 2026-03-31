import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { TooltipProvider } from "./components/ui/tooltip";
import Destinations from "./pages/Destinations";
import Planner from "./pages/Planner";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </>
  );
}

export default App;
