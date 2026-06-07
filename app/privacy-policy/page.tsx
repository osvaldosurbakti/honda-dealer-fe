'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { contactInfo } from '@/data/contact';

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-10 lg:py-16 max-w-4xl">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Kebijakan Privasi
        </h1>
        <p className="text-sm text-gray-500">
          Terakhir diperbarui: 2025
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
        <section>
          <p>
            Selamat datang di <strong>{siteConfig.company.name}</strong>. Kami
            menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi
            setiap pengunjung dan calon pelanggan yang menggunakan website ini.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            1. Informasi yang Kami Kumpulkan
          </h2>
          <p className="mb-2">
            Kami dapat mengumpulkan informasi berikut:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nama lengkap</li>
            <li>Alamat email</li>
            <li>Nomor WhatsApp atau telepon</li>
            <li>Pesan atau pertanyaan yang Anda kirimkan melalui form</li>
            <li>
              Informasi teknis seperti alamat IP, jenis perangkat, browser, dan
              aktivitas di website
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            2. Penggunaan Informasi
          </h2>
          <p>
            Informasi yang kami kumpulkan digunakan untuk:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Menanggapi pertanyaan dan permintaan informasi Anda</li>
            <li>Memberikan konsultasi pembelian mobil Honda</li>
            <li>Simulasi kredit dan booking test drive</li>
            <li>Menyampaikan promo, penawaran, dan informasi produk</li>
            <li>Analisis dan peningkatan kualitas website</li>
          </ul>
          <p className="mt-2">
            Kami <strong>tidak menjual atau membagikan</strong> data pribadi Anda
            kepada pihak lain tanpa izin.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            3. Cookies dan Teknologi Pelacakan
          </h2>
          <p>
            Website ini menggunakan cookies dan teknologi serupa untuk membantu
            kami memahami bagaimana pengunjung menggunakan website, serta untuk
            mendukung aktivitas pemasaran dan periklanan.
          </p>
          <p className="mt-2">
            Anda dapat mengatur browser Anda untuk menolak cookies, namun
            beberapa fitur website mungkin tidak berfungsi secara optimal.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            4. Layanan Pihak Ketiga
          </h2>
          <p>
            Kami menggunakan layanan pihak ketiga berikut:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Google Analytics untuk analisis statistik pengunjung</li>
            <li>Google Ads untuk keperluan periklanan</li>
          </ul>
          <p className="mt-2">
            Layanan pihak ketiga tersebut memiliki kebijakan privasi masing-masing
            dalam mengelola data pengguna.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            5. Keamanan Data
          </h2>
          <p>
            Kami berupaya menjaga keamanan data pribadi Anda dengan langkah-
            langkah teknis dan administratif yang wajar untuk mencegah akses atau
            penggunaan yang tidak sah.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            6. Hak Pengguna
          </h2>
          <p>
            Anda berhak untuk meminta informasi, perbaikan, atau penghapusan data
            pribadi Anda yang tersimpan pada kami dengan menghubungi kontak resmi
            kami.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            7. Perubahan Kebijakan Privasi
          </h2>
          <p>
            Kebijakan Privasi ini dapat diperbarui sewaktu-waktu. Setiap
            perubahan akan ditampilkan pada halaman ini.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            8. Informasi Kontak
          </h2>
          <p className="mb-2">
            Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan
            hubungi kami melalui:
          </p>
          <ul className="space-y-1">
            <li>
              <strong>{siteConfig.company.name}</strong>
            </li>
            <li>Surabaya, Jawa Timur</li>
            <li>Telepon / WhatsApp: {contactInfo.phones.primary}</li>
            <li>Email: {contactInfo.emails.primary}</li>
          </ul>
        </section>

        <section className="pt-6 border-t">
          <p className="text-xs text-gray-500">
            Dengan menggunakan website ini, Anda menyatakan telah membaca,
            memahami, dan menyetujui Kebijakan Privasi ini.
          </p>
          <p className="text-xs mt-2">
            Kembali ke{' '}
            <Link href="/" className="text-honda-red hover:underline">
              Beranda
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
