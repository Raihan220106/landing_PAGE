import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface RegistrationPageProps {
  onNavigate: (page: string) => void;
  onRegister: (data: RegistrationData) => void;
}

export interface RegistrationData {
  nama: string;
  email: string;
  telepon: string;
  program: string;
}

export function RegistrationPage({ onNavigate, onRegister }: RegistrationPageProps) {
  const [formData, setFormData] = useState<RegistrationData>({
    nama: "",
    email: "",
    telepon: "",
    program: "",
  });

  const programs = [
    { value: "web-development", label: "Web Development", price: 2500000 },
    { value: "data-science", label: "Data Science", price: 3000000 },
    { value: "digital-marketing", label: "Digital Marketing", price: 1500000 },
    { value: "ui-ux-design", label: "UI/UX Design", price: 2000000 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nama && formData.email && formData.telepon && formData.program) {
      onRegister(formData);
      onNavigate("checkout");
    }
  };

  const handleInputChange = (field: keyof RegistrationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-[800px] px-8 py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Form Pendaftaran</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nama">Nama Lengkap</Label>
                <Input
                  id="nama"
                  value={formData.nama}
                  onChange={(e) => handleInputChange("nama", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="telepon">Nomor Telepon</Label>
                <Input
                  id="telepon"
                  value={formData.telepon}
                  onChange={(e) => handleInputChange("telepon", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="program">Program Kursus</Label>
                <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih program kursus" />
                  </SelectTrigger>
                  <SelectContent>
                    {programs.map((program) => (
                      <SelectItem key={program.value} value={program.value}>
                        {program.label} - Rp {program.price.toLocaleString("id-ID")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => onNavigate("home")}
                  className="flex-1"
                >
                  Kembali
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Lanjut ke Pembayaran
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}