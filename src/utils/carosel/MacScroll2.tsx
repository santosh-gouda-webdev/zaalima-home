
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function MacbookScrollDemo2() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
      <MacbookScroll
        badge={
          <a href="#">
            <Badge className="h-auto w-20 -rotate-12 transform" />
          </a>
        }
        src={`https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?q=80&w=1208&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <img src="/logo2.png" alt="Peerlist Logo" className={className} />
  );
};
