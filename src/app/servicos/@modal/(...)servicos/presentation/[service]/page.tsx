import Presentation, { type ServiceKey } from "@/components/organisms/Presentation";
import ModalShell from "@/app/servicos/@modal/ModalShell";

// Type guard para validar o service
const isService = (s: string): s is ServiceKey =>
  s === "social" || s === "foto" || s === "sites";

// Tipagem do PageProps
interface PageProps {
  params: {
    service: ServiceKey | string;
  };
}

// Página modal
export default function ModalPresentation({ params }: PageProps) {
  const key: ServiceKey = isService(params.service) ? params.service : "social";

  return (
    <ModalShell>
      <Presentation service={key} />
    </ModalShell>
  );
}

// Geração de parâmetros estáticos
export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [
    { service: "social" },
    { service: "foto" },
    { service: "sites" },
  ];
}

