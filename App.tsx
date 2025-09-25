import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { KelasPage } from "./components/KelasPage";
import { TestimoniPage } from "./components/TestimoniPage";
import { KontakPage } from "./components/KontakPage";
import { JadwalKonsultasiPage } from "./components/JadwalKonsultasiPage";
import { RegistrationPage, RegistrationData } from "./components/RegistrationPage";
import { CheckoutPage } from "./components/CheckoutPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleRegister = (data: RegistrationData) => {
    setRegistrationData(data);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "kelas":
        return <KelasPage onNavigate={handleNavigate} />;
      case "testimoni":
        return <TestimoniPage onNavigate={handleNavigate} />;
      case "kontak":
        return <KontakPage onNavigate={handleNavigate} />;
      case "jadwal-konsultasi":
        return <JadwalKonsultasiPage onNavigate={handleNavigate} />;
      case "registration":
        return <RegistrationPage onNavigate={handleNavigate} onRegister={handleRegister} />;
      case "checkout":
        return <CheckoutPage onNavigate={handleNavigate} registrationData={registrationData} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}