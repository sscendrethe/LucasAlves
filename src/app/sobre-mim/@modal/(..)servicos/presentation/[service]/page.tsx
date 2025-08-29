import Presentation, { type ServiceKey } from "@/components/organisms/Presentation";
import ModalShell from "@/app/servicos/@modal/ModalShell";

const isService = (s: string): s is ServiceKey =>
  s === "social" || s === "foto" || s === "sites" || s === "casea" || s === "caseb" || s === "casec";

export default function ModalPresentation({ params }: { params: { service: string } }) {
  const key: ServiceKey = isService(params.service) ? params.service : "social";
  return (
    <ModalShell>
      <Presentation service={key} />
    </ModalShell>
  );
}
