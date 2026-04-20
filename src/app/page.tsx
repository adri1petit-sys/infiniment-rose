import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { BackyardExplained } from "@/components/BackyardExplained";
import { Parcours } from "@/components/Parcours";
import { WhyWeRun } from "@/components/WhyWeRun";
import { DonationWall } from "@/components/DonationWall";
import { PastEditions } from "@/components/PastEditions";
import { FAQ } from "@/components/FAQ";
import { VolunteerForm } from "@/components/VolunteerForm";
import { Sponsor } from "@/components/Sponsor";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="top">
      <NavBar />
      <Hero />
      <BackyardExplained />
      <Parcours />
      <WhyWeRun />
      <DonationWall />
      <PastEditions />
      <FAQ />
      <VolunteerForm />
      <Sponsor />
      <Footer />
    </main>
  );
}
