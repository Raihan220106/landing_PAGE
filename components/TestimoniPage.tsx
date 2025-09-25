import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

interface TestimoniPageProps {
  onNavigate: (page: string) => void;
}

export function TestimoniPage({ onNavigate }: TestimoniPageProps) {
  const testimonials = [
    {
      name: "Sarah Amelia",
      role: "Frontend Developer",
      company: "Tokopedia",
      program: "Web Development",
      avatar: "SA",
      rating: 5,
      text: "Program Web Development di EduKursus benar-benar mengubah karir saya. Dari yang tidak tahu coding sama sekali, sekarang saya bekerja sebagai Frontend Developer di perusahaan unicorn. Mentor sangat sabar dan materinya terstruktur dengan baik.",
      graduatedYear: "2023"
    },
    {
      name: "Rudi Hartono",
      role: "Data Scientist",
      company: "Gojek",
      program: "Data Science",
      avatar: "RH",
      rating: 5,
      text: "Sebagai lulusan non-IT, saya sempat ragu mengambil kelas Data Science. Tapi ternyata mentornya sangat membantu dan materinya dimulai dari basic. Setelah lulus, langsung diterima di Gojek sebagai Data Scientist.",
      graduatedYear: "2023"
    },
    {
      name: "Maya Sari",
      role: "UI/UX Designer",
      company: "Traveloka",
      program: "UI/UX Design",
      avatar: "MS",
      rating: 5,
      text: "Kelas UI/UX Design sangat praktis dan langsung applicable ke dunia kerja. Portfolio yang saya buat selama kelas langsung jadi bekal untuk melamar kerja. Sekarang saya sudah bekerja di Traveloka.",
      graduatedYear: "2024"
    },
    {
      name: "Budi Prasetyo",
      role: "Digital Marketing Manager",
      company: "Blibli",
      program: "Digital Marketing",
      avatar: "BP",
      rating: 5,
      text: "Program Digital Marketing membuka mata saya tentang strategi marketing modern. Dari SEO sampai ads, semuanya dijelaskan dengan detail plus studi kasus real. ROI dari investasi kelas ini sangat worth it!",
      graduatedYear: "2024"
    },
    {
      name: "Anita Dewi",
      role: "Full Stack Developer",
      company: "Bukalapak",
      program: "Web Development",
      avatar: "AD",
      rating: 5,
      text: "Mentor di EduKursus tidak hanya mengajar teori, tapi juga sharing pengalaman industri. Project akhir yang kita buat juga real-world application, jadi pas interview sudah punya portfolio yang bagus.",
      graduatedYear: "2023"
    },
    {
      name: "Fahmi Rahman",
      role: "Machine Learning Engineer",
      company: "OVO",
      program: "Data Science",
      avatar: "FR",
      rating: 4,
      text: "Materi Data Science sangat comprehensive, dari Python basic sampai deep learning. Yang paling saya suka adalah adanya mentoring 1-on-1 yang membantu saya memahami konsep yang sulit.",
      graduatedYear: "2024"
    },
    {
      name: "Lisa Permata",
      role: "Product Designer",
      company: "Shopee",
      program: "UI/UX Design",
      avatar: "LP",
      rating: 5,
      text: "Transisi karir dari accounting ke UI/UX design bukanlah hal mudah. Tapi dengan bimbingan mentor di EduKursus, saya bisa menguasai design thinking dan tools seperti Figma dengan cepat.",
      graduatedYear: "2024"
    },
    {
      name: "Arif Setiawan",
      role: "Growth Marketing Specialist",
      company: "Zalora",
      program: "Digital Marketing",
      avatar: "AS",
      rating: 5,
      text: "Kelas Digital Marketing sangat update dengan trend terkini. Mentor juga aktif berbagi tips dan trik yang tidak diajarkan di tempat lain. Setelah lulus, saya langsung bisa implement ke bisnis pribadi dan perusahaan.",
      graduatedYear: "2023"
    },
    {
      name: "Dina Maharani",
      role: "Backend Developer",
      company: "Dana",
      program: "Web Development",
      avatar: "DM",
      rating: 5,
      text: "Program Web Development sangat intensive dan challenging, tapi itulah yang membuat saya grow sebagai developer. Sekarang saya handle sistem backend yang dipakai jutaan user di Dana.",
      graduatedYear: "2024"
    }
  ];

  const stats = [
    { label: "Total Alumni", value: "5,000+" },
    { label: "Tingkat Kelulusan", value: "95%" },
    { label: "Job Placement Rate", value: "87%" },
    { label: "Rating Kepuasan", value: "4.8/5" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <h1 className="mb-4 text-white">Testimoni Alumni</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Dengarkan cerita sukses alumni EduKursus yang telah berhasil 
              mentransformasi karir mereka melalui program pembelajaran kami.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 line-clamp-4">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-blue-600 text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="mb-1">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.program}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Lulus {testimonial.graduatedYear}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Kisah Sukses Alumni</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dari berbagai latar belakang, mereka berhasil mencapai impian karir di bidang teknologi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="mb-2">Career Switch</h3>
                <p className="text-muted-foreground mb-4">
                  72% alumni berhasil beralih karir ke bidang teknologi dalam 6 bulan
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="mb-2">Salary Increase</h3>
                <p className="text-muted-foreground mb-4">
                  Rata-rata peningkatan gaji 150% setelah menyelesaikan program
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="mb-2">Top Companies</h3>
                <p className="text-muted-foreground mb-4">
                  Alumni bekerja di perusahaan unicorn dan tech companies terkemuka
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="mb-4 text-white">Siap Menjadi Success Story Berikutnya?</h2>
          <p className="mb-8 text-xl opacity-90">
            Bergabunglah dengan ribuan alumni yang telah berhasil mengubah karir mereka
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