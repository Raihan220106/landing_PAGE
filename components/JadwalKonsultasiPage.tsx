import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Calendar, Clock, User, Phone, Mail, CheckCircle } from "lucide-react";

interface JadwalKonsultasiPageProps {
  onNavigate: (page: string) => void;
}

export function JadwalKonsultasiPage({ onNavigate }: JadwalKonsultasiPageProps) {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    program: "",
    tanggal: "",
    waktu: "",
    topik: "",
    pesan: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would schedule the consultation
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const availableTimes = [
    "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const consultationTopics = [
    { value: "career-switch", label: "Career Switch ke Tech" },
    { value: "program-selection", label: "Pemilihan Program yang Tepat" },
    { value: "payment-options", label: "Opsi Pembayaran & Cicilan" },
    { value: "career-roadmap", label: "Career Roadmap & Planning" },
    { value: "learning-schedule", label: "Jadwal Belajar yang Fleksibel" },
    { value: "job-guarantee", label: "Job Placement & Guarantee" }
  ];

  const benefits = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Personal Career Advisor",
      description: "Konsultasi 1-on-1 dengan career advisor berpengalaman"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Analisis Profil Lengkap",
      description: "Evaluasi background dan tujuan karir Anda"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Learning Roadmap",
      description: "Roadmap pembelajaran yang disesuaikan dengan target Anda"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="mb-4">Konsultasi Berhasil Dijadwalkan!</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Terima kasih telah menjadwalkan konsultasi gratis. Tim kami akan menghubungi Anda 
              dalam 24 jam untuk konfirmasi jadwal dan detail konsultasi.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="mb-3 text-blue-800">Detail Konsultasi Anda:</h3>
              <div className="text-left space-y-2 text-sm">
                <p><span className="font-medium">Nama:</span> {formData.nama}</p>
                <p><span className="font-medium">Email:</span> {formData.email}</p>
                <p><span className="font-medium">Tanggal:</span> {formData.tanggal}</p>
                <p><span className="font-medium">Waktu:</span> {formData.waktu}</p>
                <p><span className="font-medium">Topik:</span> {consultationTopics.find(t => t.value === formData.topik)?.label}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate("home")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Kembali ke Beranda
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigate("kelas")}
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Lihat Program Kelas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              📅 Konsultasi Gratis
            </Badge>
            <h1 className="mb-4 text-white text-4xl lg:text-5xl">
              Jadwalkan Konsultasi Gratis
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Dapatkan panduan personal dari career advisor kami untuk menemukan 
              program pembelajaran yang tepat sesuai tujuan karir Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Yang Akan Anda Dapatkan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Konsultasi gratis selama 30 menit dengan career advisor profesional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Jadwalkan Konsultasi Anda</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nama">Nama Lengkap *</Label>
                        <Input
                          id="nama"
                          value={formData.nama}
                          onChange={(e) => handleInputChange("nama", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
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
                      <Label htmlFor="telepon">Nomor WhatsApp *</Label>
                      <Input
                        id="telepon"
                        value={formData.telepon}
                        onChange={(e) => handleInputChange("telepon", e.target.value)}
                        placeholder="08xxxxxxxxxx"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="program">Program yang Diminati</Label>
                      <select
                        id="program"
                        value={formData.program}
                        onChange={(e) => handleInputChange("program", e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                      >
                        <option value="">Pilih Program (Opsional)</option>
                        <option value="web-development">Web Development Complete</option>
                        <option value="data-science">Data Science & Analytics</option>
                        <option value="ui-ux-design">UI/UX Design Professional</option>
                        <option value="digital-marketing">Digital Marketing Strategy</option>
                        <option value="belum-yakin">Belum Yakin / Butuh Saran</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="tanggal">Tanggal Konsultasi *</Label>
                        <Input
                          id="tanggal"
                          type="date"
                          value={formData.tanggal}
                          onChange={(e) => handleInputChange("tanggal", e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="waktu">Waktu Konsultasi *</Label>
                        <select
                          id="waktu"
                          value={formData.waktu}
                          onChange={(e) => handleInputChange("waktu", e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                          required
                        >
                          <option value="">Pilih Waktu</option>
                          {availableTimes.map((time) => (
                            <option key={time} value={time}>{time} WIB</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="topik">Topik Konsultasi *</Label>
                      <select
                        id="topik"
                        value={formData.topik}
                        onChange={(e) => handleInputChange("topik", e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                        required
                      >
                        <option value="">Pilih Topik</option>
                        {consultationTopics.map((topic) => (
                          <option key={topic.value} value={topic.value}>
                            {topic.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="pesan">Pesan Tambahan</Label>
                      <Textarea
                        id="pesan"
                        value={formData.pesan}
                        onChange={(e) => handleInputChange("pesan", e.target.value)}
                        rows={4}
                        placeholder="Ceritakan latar belakang dan tujuan karir Anda (opsional)..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Jadwalkan Konsultasi Gratis
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <Card className="bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-blue-800">Informasi Konsultasi</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span>Durasi: 30 menit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>Via Google Meet/Zoom</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>Link akan dikirim via email</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span>Senin - Jumat: 09:00 - 17:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-green-800">100% Gratis & No Obligation</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5" />
                      <span>Tidak ada biaya tersembunyi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5" />
                      <span>Tidak ada kewajiban untuk mendaftar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5" />
                      <span>Dapat dijadwal ulang jika berhalangan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5" />
                      <span>Career advice personal & objektif</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4">Butuh Bantuan?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Tim customer service kami siap membantu jika Anda memiliki pertanyaan.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>+62 21 1234 5678</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>konsultasi@edukursus.com</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate("kontak")}
                    className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Hubungi Customer Service
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}