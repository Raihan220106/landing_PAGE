import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface KelasPageProps {
  onNavigate: (page: string) => void;
}

export function KelasPage({ onNavigate }: KelasPageProps) {
  const courses = [
    {
      id: "web-development",
      title: "Web Development Complete",
      description: "Program lengkap untuk menjadi Full Stack Developer. Mulai dari HTML, CSS, JavaScript, hingga framework modern seperti React dan Node.js.",
      image: "https://images.unsplash.com/photo-1742072594003-abf6ca86e154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NTgwNjE0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 2500000,
      originalPrice: 3500000,
      duration: "12 minggu",
      students: 1250,
      rating: 4.9,
      level: "Pemula - Mahir",
      modules: [
        "HTML & CSS Fundamentals",
        "JavaScript ES6+",
        "React.js & Next.js",
        "Node.js & Express",
        "Database & MongoDB",
        "Deployment & DevOps"
      ]
    },
    {
      id: "data-science",
      title: "Data Science & Analytics",
      description: "Pelajari Python, machine learning, dan analisis data untuk menjadi Data Scientist profesional. Dengan studi kasus nyata dari industri.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgwMzU0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 3000000,
      originalPrice: 4200000,
      duration: "16 minggu",
      students: 850,
      rating: 4.8,
      level: "Menengah - Mahir",
      modules: [
        "Python Programming",
        "Statistics & Probability",
        "Data Visualization",
        "Machine Learning",
        "Deep Learning",
        "Big Data Analytics"
      ]
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design Professional",
      description: "Kuasai desain user interface dan user experience dengan tools modern. Dari wireframe hingga prototype yang siap development.",
      image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1ODAzMTg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 2000000,
      originalPrice: 2800000,
      duration: "10 minggu",
      students: 950,
      rating: 4.7,
      level: "Pemula - Menengah",
      modules: [
        "Design Thinking",
        "User Research",
        "Wireframing & Prototyping",
        "Figma & Adobe XD",
        "Visual Design",
        "Usability Testing"
      ]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Strategy",
      description: "Strategi pemasaran digital yang komprehensif. Dari SEO, social media marketing, hingga advertising yang mengkonversi.",
      image: "https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc29jaWFsJTIwbWVkaWF8ZW58MXx8fHwxNzU4MDU5NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: 1500000,
      originalPrice: 2200000,
      duration: "8 minggu",
      students: 1500,
      rating: 4.6,
      level: "Pemula - Menengah",
      modules: [
        "Digital Marketing Fundamentals",
        "SEO & Content Marketing",
        "Social Media Strategy",
        "Google Ads & Facebook Ads",
        "Email Marketing",
        "Analytics & Reporting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <h1 className="mb-4 text-white">Program Kelas Tersedia</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Pilih program pembelajaran yang sesuai dengan tujuan karir Anda. 
              Semua kelas dilengkapi dengan mentor berpengalaman dan materi terkini.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600">
                    Diskon {Math.round((1 - course.price / course.originalPrice) * 100)}%
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{course.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Course Stats */}
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students.toLocaleString("id-ID")} siswa
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.level}
                    </div>
                  </div>

                  {/* Modules */}
                  <div>
                    <h4 className="mb-2">Materi Pembelajaran:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {course.modules.map((module, index) => (
                        <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {module}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-600">
                          Rp {course.price.toLocaleString("id-ID")}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          Rp {course.originalPrice.toLocaleString("id-ID")}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">*Dapat dicicil tanpa bunga</p>
                    </div>
                    <Button 
                      onClick={() => onNavigate("registration")}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Daftar Sekarang
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="mb-4 text-white">Masih Bingung Memilih Kelas?</h2>
          <p className="mb-8 text-xl opacity-90">
            Konsultasi gratis dengan tim kami untuk mendapatkan rekomendasi kelas yang tepat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => onNavigate("kontak")}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Konsultasi Gratis
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => onNavigate("testimoni")}
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Lihat Testimoni
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}