import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { RegistrationData } from "./RegistrationPage";

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
  registrationData: RegistrationData | null;
}

export function CheckoutPage({ onNavigate, registrationData }: CheckoutPageProps) {
  const programs = [
    { value: "web-development", label: "Web Development", price: 2500000 },
    { value: "data-science", label: "Data Science", price: 3000000 },
    { value: "digital-marketing", label: "Digital Marketing", price: 1500000 },
    { value: "ui-ux-design", label: "UI/UX Design", price: 2000000 },
  ];

  const selectedProgram = programs.find(p => p.value === registrationData?.program);
  const adminFee = 50000;
  const total = selectedProgram ? selectedProgram.price + adminFee : 0;

  const handlePayment = () => {
    // In a real app, this would integrate with a payment gateway
    alert("Pembayaran berhasil! Terima kasih telah mendaftar di EduKursus.");
    onNavigate("home");
  };

  if (!registrationData || !selectedProgram) {
    return (
      <div className="min-h-[800px] px-8 py-16 bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="mb-4">Tidak ada data pendaftaran.</p>
            <Button onClick={() => onNavigate("registration")}>
              Kembali ke Pendaftaran
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-[800px] px-8 py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Checkout</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Order Summary */}
            <div>
              <h3 className="mb-4">Ringkasan Pesanan</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Program:</span>
                  <span>{selectedProgram.label}</span>
                </div>
                <div className="flex justify-between">
                  <span>Harga Program:</span>
                  <span>Rp {selectedProgram.price.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Admin:</span>
                  <span>Rp {adminFee.toLocaleString("id-ID")}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Total Harga:</span>
                  <span>Rp {total.toLocaleString("id-ID")}</span>
                </div>
              </div>
            </div>

            {/* Student Information */}
            <div>
              <h3 className="mb-4">Data Siswa</h3>
              <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                <div><strong>Nama:</strong> {registrationData.nama}</div>
                <div><strong>Email:</strong> {registrationData.email}</div>
                <div><strong>Telepon:</strong> {registrationData.telepon}</div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="mb-4">Metode Pembayaran</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg text-center bg-white">
                  <div className="mb-2">💳</div>
                  <div>Kartu Kredit</div>
                </div>
                <div className="p-4 border rounded-lg text-center bg-white">
                  <div className="mb-2">🏦</div>
                  <div>Transfer Bank</div>
                </div>
                <div className="p-4 border rounded-lg text-center bg-white">
                  <div className="mb-2">📱</div>
                  <div>E-Wallet</div>
                </div>
                <div className="p-4 border rounded-lg text-center bg-white">
                  <div className="mb-2">🏪</div>
                  <div>Minimarket</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                variant="outline" 
                onClick={() => onNavigate("registration")}
                className="flex-1"
              >
                Kembali
              </Button>
              <Button 
                onClick={handlePayment}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                Bayar Sekarang
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}