import Navbar from "@/components/shared/Navbar";
import Status from "@/components/shared/status";
import Sidebar from "@/components/shared/sidebar";
import { sideBarData } from "@/lib/data";
export default function page() {
  return (
    <section className="bg-[#C6D9B5] h-screen w-full">
      <Navbar />
      <Status />
      <Sidebar
        sidebarItems={sideBarData}
        value={"Angel Investor Registration"}
      />
    </section>
  );
}
