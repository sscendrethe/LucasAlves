// Server Component (sem "use client")
import { Presentation } from "@/components/organisms/Presentation";
import ModalShell from "../../ModalShell"; // sobe 2 níveis até @modal

export default function ModalPresentation() {
  return (
    <ModalShell>
      <Presentation />
    </ModalShell>
  );
}

