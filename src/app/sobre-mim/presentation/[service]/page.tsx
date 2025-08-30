import Presentation, { type ServiceKey } from "@/components/organisms/Presentation";

const isService = (s: string): s is ServiceKey =>
  s === "social" || s === "foto" || s === "sites" || s === "case1" || s === "case2" || s === "case3";

export default function Page({ params }: { params: { service: string } }) {
  const key: ServiceKey = isService(params.service) ? params.service : "social";
  return <Presentation service={key} />;
}
export async function generateStaticParams() {
  return [
    { service: 'social' },
    { service: 'foto' },
    { service: 'sites' },
    { service: 'casea' },
    { service: 'caseb' },
    { service: 'casec' },
  ];
}