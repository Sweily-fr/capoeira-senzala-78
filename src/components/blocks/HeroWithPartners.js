import { HeroSection } from "./hero-section-5";
import { getPartenaires } from "@/lib/getPartenaires";

export default function HeroWithPartners(props) {
  const logos = props.partnerLogos ?? getPartenaires();
  return <HeroSection {...props} partnerLogos={logos} />;
}
