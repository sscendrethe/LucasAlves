import Presentation, { type ServiceKey } from "@/components/organisms/Presentation";

// Type guard para validar o service
const isService = (s: string): s is ServiceKey =>
  s === "social" || s === "foto" || s === "sites" || s === "casea" || s === "caseb" || s === "casec";

// Tipagem do PageProps do Next App Router
interface PageProps {
  params: Promise<{
    service: ServiceKey | string;
  }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

// Componente principal
export default async function Page({ params }: PageProps) {
  const resolvedParams = await params; // resolve a Promise
  const key: ServiceKey = isService(resolvedParams.service) ? resolvedParams.service : "social";

  return <Presentation service={key} />;
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

