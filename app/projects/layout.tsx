import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Outer from "@/components/Outer";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Outer>
      <Header />
      {children}
      <Footer />
    </Outer>
  );
}
