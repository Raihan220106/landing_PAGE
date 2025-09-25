import { useState } from "react";
import { Button } from "./ui/button";
import { GraduationCap, Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { label: "Home", value: "home" },
    { label: "Kelas", value: "kelas" },
    { label: "Testimoni", value: "testimoni" },
    { label: "Kontak", value: "kontak" },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      <header className="w-full h-[80px] bg-white shadow-sm px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <h1 
            className="text-xl font-bold text-blue-600 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleNavigate("home")}
          >
            EduKursus
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavigate(item.value)}
              className={`relative py-2 transition-colors hover:text-blue-600 ${
                currentPage === item.value 
                  ? "text-blue-600 font-medium" 
                  : "text-gray-600"
              }`}
            >
              {item.label}
              {currentPage === item.value && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
              )}
            </button>
          ))}
        </nav>
        
        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline"
            onClick={() => handleNavigate("jadwal-konsultasi")}
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            Konsultasi Gratis
          </Button>
          <Button 
            onClick={() => handleNavigate("registration")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Daftar Sekarang
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[80px] bg-black bg-opacity-50 z-40">
          <div className="bg-white w-full shadow-lg">
            <nav className="px-8 py-6">
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => handleNavigate(item.value)}
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                      currentPage === item.value 
                        ? "bg-blue-50 text-blue-600 font-medium" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              {/* Mobile Action Buttons */}
              <div className="mt-6 space-y-3">
                <Button 
                  variant="outline"
                  onClick={() => handleNavigate("jadwal-konsultasi")}
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                >
                  Konsultasi Gratis
                </Button>
                <Button 
                  onClick={() => handleNavigate("registration")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Daftar Sekarang
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}