
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function MacbookScrollDemo1() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
      <MacbookScroll
        badge={
          <a href="#">
            <Badge className="h-auto w-20 -rotate-12 transform" />
          </a>
        }
        src={`https://images.unsplash.com/photo-1690264696811-527b835b94f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
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
