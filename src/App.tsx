import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ProgressPage from "./pages/Progress";
import ProfilePage from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "workout") {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect passcode");
    }
  };

  return (
    <>
      <Dialog open={!unlocked}>
        <DialogContent className="backdrop-blur-lg bg-white/30 dark:bg-black/30 border-none shadow-xl flex flex-col items-center justify-center min-h-[320px]">
          <form onSubmit={handleUnlock} className="w-full max-w-xs flex flex-col gap-4 items-center">
            <h2 className="text-2xl font-bold mb-2 text-center">Enter Passcode</h2>
            <Input
              type="password"
              placeholder="Passcode"
              value={passcode}
              onChange={e => setPasscode(e.target.value)}
              className="text-center text-lg bg-white/40 dark:bg-black/40 backdrop-blur rounded-xl border-none shadow-inner"
              autoFocus
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button type="submit" className="w-full py-2 rounded-xl bg-primary text-white font-semibold shadow-lg hover:bg-primary/90 transition">Unlock</button>
          </form>
        </DialogContent>
      </Dialog>
      {/* App content below */}
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
