// src/app/servicos/@modal/presentation/[service]/page.tsx

import Presentation, { type ServiceKey } from "@/components/organisms/Presentation";
import ModalShell from "@/app/servicos/@modal/ModalShell";

const isService = (s: string): s is ServiceKey =>
  s === "social" || s === "foto" || s === "sites";

export async function generateStaticParams() {
  return [
    { service: 'social' },
    { service: 'foto' },
    { service: 'sites' },
  ];
}

export default function ModalPresentation({ params }: { params: { service: string } }) {
  const key: ServiceKey = isService(params.service) ? params.service : "social";
  return (
    <ModalShell>
      <Presentation service={key} />
    </ModalShell>
  );
}
