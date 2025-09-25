import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

interface KontakPageProps {
  onNavigate: (page: string) => void;
}

export function KontakPage({ onNavigate }: KontakPageProps) {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    subjek: "konsultasi",
    pesan: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would send the message
    alert("Pesan Anda telah terkirim! Tim kami akan menghubungi Anda dalam 24 jam.");
    setFormData({
      nama: "",
      email: "",
      telepon: "",
      subjek: "konsultasi",
      pesan: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat Kantor",
      details: [
        "Jl. Sudirman No. 123, Lt. 15",
        "Jakarta Pusat 10220",
        "Indonesia"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      details: [
        "+62 21 1234 5678",
        "+62 812 3456 7890",
        "Senin - Jumat: 09:00 - 18:00"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "info@edukursus.com",
        "support@edukursus.com",
        "partnership@edukursus.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 09:00 - 18:00",
        "Sabtu: 09:00 - 15:00",
        "Minggu: Tutup"
      ]
    }
  ];

  const faqs = [
    {
      question: "Bagaimana cara mendaftar kelas?",
      answer: "Anda bisa mendaftar melalui website dengan mengisi form pendaftaran, atau menghubungi tim customer service kami."
    },
    {
      question: "Apakah ada garansi job placement?",
      answer: "Kami memberikan job placement assistance dan career coaching untuk semua alumni. Tingkat job placement kami mencapai 87%."
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer: "Kami menerima pembayaran tunai dan cicilan 0% hingga 12 bulan. Tersedia berbagai metode pembayaran."
    },
    {
      question: "Apakah kelas bisa diakses selamanya?",
      answer: "Ya, setelah menyelesaikan kelas, Anda mendapat akses seumur hidup ke materi pembelajaran dan update terbaru."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <h1 className="mb-4 text-white">Hubungi Kami</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ada pertanyaan atau butuh konsultasi? Tim kami siap membantu Anda 
              menemukan program pembelajaran yang tepat untuk mencapai tujuan karir.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="mb-8">Informasi Kontak</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm mb-1">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact */}
              <Card className="mt-8 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                    <h3>Konsultasi Gratis</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Belum yakin program mana yang cocok? Konsultasi gratis dengan career advisor kami.
                  </p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => onNavigate("jadwal-konsultasi")}
                  >
                    Jadwalkan Konsultasi
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Kirim Pesan</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <Label htmlFor="subjek">Subjek</Label>
                      <select
                        id="subjek"
                        value={formData.subjek}
                        onChange={(e) => handleInputChange("subjek", e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                        required
                      >
                        <option value="konsultasi">Konsultasi Program</option>
                        <option value="pembayaran">Informasi Pembayaran</option>
                        <option value="teknis">Bantuan Teknis</option>
                        <option value="partnership">Partnership</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="pesan">Pesan</Label>
                      <Textarea
                        id="pesan"
                        value={formData.pesan}
                        onChange={(e) => handleInputChange("pesan", e.target.value)}
                        rows={5}
                        placeholder="Tuliskan pertanyaan atau pesan Anda..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4">Lokasi Kantor</h2>
            <p className="text-muted-foreground">
              Kunjungi kantor kami untuk konsultasi langsung
            </p>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4892311775085!2d106.8191637!3d-6.2084833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sSudirman%20Central%20Business%20District%20(SCBD)!5e0!3m2!1sen!2sid!4v1707123456789!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor EduKursus"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="mb-1">EduKursus Indonesia</h4>
                    <p className="text-sm text-gray-600">Jl. Sudirman No. 123, Lt. 15</p>
                    <p className="text-sm text-gray-600">Jakarta Pusat 10220, Indonesia</p>
                    <div className="mt-2 flex flex-col sm:flex-row gap-2">
                      <Button 
                        size="sm"
                        onClick={() => window.open('https://maps.google.com/?q=Sudirman+Central+Business+District+Jakarta', '_blank')}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Buka di Google Maps
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => onNavigate("jadwal-konsultasi")}
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        Jadwalkan Kunjungan
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="mb-4 text-white">Siap Memulai Perjalanan Belajar?</h2>
          <p className="mb-8 text-xl opacity-90">
            Jangan ragu untuk menghubungi kami. Tim expert kami siap membantu Anda mencapai tujuan karir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate("kelas")}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Lihat Program Kelas
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => onNavigate("registration")}
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}