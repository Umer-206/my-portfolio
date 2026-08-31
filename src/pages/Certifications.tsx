import { CertificationsHeader } from "../components/certifications/CertificationsHeader";
import { CertStats } from "../components/certifications/CertStats";
import { CertificationsGrid } from "../components/certifications/CertificationsGrid";

export const Certifications = () => {
  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <CertificationsHeader />
      <CertStats />
      <CertificationsGrid />
    </main>
  );
};
