import { SanityLive } from "../sanity/lib/live";
import { TutorWidget } from "@/components/tutor";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <SanityLive />
      <TutorWidget />
    </div>
  );
}

export default AppLayout;
