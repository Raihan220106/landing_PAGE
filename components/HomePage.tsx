import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Users, Award, Clock, CheckCircle } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: "📚",
      title: "Materi Lengkap & Terstruktur",
      description: "Kurikulum yang disusun oleh ahli industri dengan materi yang selalu update mengikuti tren teknologi terbaru."
    },
    {
      icon: "👨‍🏫",
      title: "Mentor Berpengalaman",
      description: "Dibimbing langsung oleh praktisi profesional yang bekerja di perusahaan teknologi terkemuka."
    },
    {
      icon: "💻",
      title: "Fleksibel & Accessible",
      description: "Belajar kapan saja, di mana saja dengan akses seumur hidup ke materi pembelajaran."
    },
    {
      icon: "🎯",
      title: "Job Placement Assistance",
      description: "Bantuan penempatan kerja dengan job placement rate hingga 87% untuk semua alumni."
    },
    {
      icon: "🏆",
      title: "Sertifikat Profesional",
      description: "Dapatkan sertifikat yang diakui industri sebagai bukti kompetensi Anda."
    },
    {
      icon: "👥",
      title: "Community Support",
      description: "Bergabung dengan komunitas alumni yang saling mendukung dalam pengembangan karir."
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "5,000+", label: "Alumni Sukses" },
    { icon: <Star className="w-8 h-8" />, value: "4.8/5", label: "Rating Kepuasan" },
    { icon: <Award className="w-8 h-8" />, value: "87%", label: "Job Placement" },
    { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Amelia",
      role: "Frontend Developer at Tokopedia",
      text: "Program Web Development di EduKursus benar-benar mengubah karir saya. Sekarang saya bekerja di perusahaan impian!",
      rating: 5,
      avatar: "SA"
    },
    {
      name: "Rudi Hartono", 
      role: "Data Scientist at Gojek",
      text: "Materinya sangat praktis dan mentor selalu siap membantu. Highly recommended untuk career switcher!",
      rating: 5,
      avatar: "RH"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-8 py-20 flex items-center min-h-[600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                🎓 Platform Pembelajaran #1 di Indonesia
              </Badge>
              <h1 className="mb-6 text-white text-4xl lg:text-5xl leading-tight">
                Transformasi Karir Dimulai dari 
                <span className="text-yellow-300"> Skill Terbaru</span>
              </h1>
              <p className="mb-8 text-xl opacity-90 leading-relaxed">
                Kuasai teknologi terdepan dengan bimbingan mentor profesional. 
                Dari nol hingga siap berkarir di perusahaan teknologi terkemuka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg"
                  onClick={() => onNavigate("kelas")}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  Jelajahi Program Kelas
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate("testimoni")}
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Lihat Success Stories
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Gratis konsultasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Cicilan 0%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Job guarantee</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1613151096599-b234757eb4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnRzJTIwbGFwdG9wfGVufDF8fHx8MTc1ODEwNTMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students learning online"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-600">
              Kenapa Memilih EduKursus?
            </Badge>
            <h2 className="mb-4">Fitur Unggulan Platform Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dirancang khusus untuk memastikan kesuksesan pembelajaran dan transformasi karir Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="pt-6 text-center">
                  <div className="mb-6 text-5xl">{feature.icon}</div>
                  <h3 className="mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-600">
              Success Stories
            </Badge>
            <h2 className="mb-4">Cerita Sukses Alumni</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan alumni yang telah berhasil mengubah karir mereka
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              onClick={() => onNavigate("testimoni")}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Lihat Lebih Banyak Testimoni
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-white text-3xl lg:text-4xl">
            Siap Memulai Transformasi Karir Anda?
          </h2>
          <p className="mb-8 text-xl opacity-90 leading-relaxed">
            Jangan biarkan kesempatan berlalu. Bergabunglah dengan ribuan alumni yang 
            telah berhasil mengubah hidup mereka melalui teknologi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate("registration")}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
            >
              Mulai Sekarang - Gratis Konsultasi
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => onNavigate("kelas")}
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8"
            >
              Lihat Program Kelas
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            * Konsultasi gratis | Cicilan 0% | Garansi kepuasan 100%
          </p>
        </div>
      </section>
    </div>
  );
}