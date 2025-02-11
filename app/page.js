import React from 'react';
import { Mail, Phone, Briefcase, User, Code, Folder } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white">
      <div className="max-w-4xl mx-auto bg-gray-100 text-gray-900 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8">
          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <img src="aku.jpg" alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-gray-700" />
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Titania</h1>
              <p className="text-lg text-gray-600">Mahasiswa Komputerisasi Akuntansi - Universitas Masoem</p>
            </div>
          </div>

          {/* About Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-700 flex items-center"><User className="mr-2" /> Tentang Saya</h2>
            <p className="mt-2 text-gray-700">
              Saya merupakan seorang mahasiswa aktif Universitas Masoem semester 4, prodi yang saya tempuh ialah Komputerisasi Akuntansi.
            </p>
          </section>

          {/* Skills Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-700 flex items-center"><Code className="mr-2" /> Keterampilan</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Bekerja dengan tim</li>
              <li>Komunikasi yang baik</li>
              <li>Gampang beradaptasi dengan hal baru</li>
            </ul>
          </section>

          {/* Services Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-700 flex items-center"><Briefcase className="mr-2" /> Layanan</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Pencatatan dan pengelolaan transaksi keuangan</li>
              <li>Pembuatan laporan keuangan bulanan dan tahunan</li>
              <li>Konsultasi perpajakan dan pengisian SPT</li>
              <li>Audit internal sederhana untuk usaha kecil</li>
              <li>Analisis laporan keuangan untuk pengambilan keputusan bisnis</li>
            </ul>
          </section>

          {/* Portfolio Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-700 flex items-center"><Folder className="mr-2" /> Portofolio</h2>
            <p className="mt-2 text-gray-700">
              Proyek-proyek yang telah saya kerjakan selama menempuh pendidikan D3 Komputerisasi Akuntansi, termasuk aplikasi pencatatan keuangan dan analisis data.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-700 flex items-center">Kontak</h2>
            <div className="mt-4 space-y-2 text-gray-700">
              <p className="flex items-center"><Mail className="mr-2 text-gray-700" /> titania683@gmail.com</p>
              <p className="flex items-center"><Phone className="mr-2 text-gray-700" /> 0895356201809</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
