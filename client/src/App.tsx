import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import { Layout } from "@/components/layout";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Work from "@/pages/work";
import ProjectDetail from "@/pages/project-detail";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Process from "@/pages/process";

function AppRoutes() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/work/:id" component={ProjectDetail} />
        <Route path="/about" component={About} />
        <Route path="/process" component={Process} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="bytexis-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router base="/bytexis-website">
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
