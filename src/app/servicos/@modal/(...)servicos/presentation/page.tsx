// Server Component (sem "use client")
import { Presentation, type ServiceKey } from "@/components/organisms/Presentation";
import ModalShell from "../../ModalShell"; // sobe 2 níveis até @modal

// Type guard para validar o service
const isService = (s: string): s is ServiceKey =>
  s === "social" || s === "foto" || s === "sites" || s === "casea" || s === "caseb" || s === "casec";

// Tipagem do PageProps
interface PageProps {
  params: Promise<{
    service: ServiceKey | string;
  }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

// Componente ModalPresentation
export default async function ModalPresentation({ params }: PageProps) {
  const resolvedParams = await params;
  const key: ServiceKey = isService(resolvedParams.service) ? resolvedParams.service : "social";

  return (
    <ModalShell>
      <Presentation service={key} />
    </ModalShell>
  );
}

// Geração de parâmetros estáticos
export async function generateStaticParams(): Promise<{ service: ServiceKey }[]> {
  return [
    { service: "social" },
    { service: "foto" },
    { service: "sites" },
    { service: "casea" },
    { service: "caseb" },
    { service: "casec" },
  ];
}

