import TestDriveForm from "@/components/forms/TestDriveForm";
export default function TestDrivePage() {
    return (
    <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Jadwalkan Test Drive Anda
        </h1>   
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            Rasakan sensasi mengemudi mobil Honda impian Anda secara langsung. Isi formulir di bawah ini untuk menjadwalkan test drive sesuai kenyamanan Anda.
        </p>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <TestDriveForm />
        </div>
        </div>
    </div>
    );
}