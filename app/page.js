import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">CV</h1>
        <h2 className="text-4xl font-bold">TITANIA</h2>
      </header>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p>
          Saya merupakan seorang mahasiswa aktif Universitas Masoem semester 4.
          Prodi yang saya tempuh ialah Komputerisasi Akuntansi.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Bekerja dengan tim</li>
          <li>Komunikasi yang baik</li>
          <li>microsoft office (terkhusus word dan exel)</li>
          <li>Gampang untuk beradaptasi dengan hal baru</li>
        </ul>
      </section>

      {/* Services Section */}
      <section className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <p>saya mampu dalam menyusun laporan keuangan</p>
      </section>

      {/* Portfolio Section */}
      <section className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
        <p>membuat form penjualan dalam berbasis desktop</p>
      </section>

      {/* Contact Section */}
      <section className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:titania683@gmail.com" className="text-black">titania683@gmail.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/0895356201809" className="text-black">0895356201809</a></p>
      </section>
    </div>
  );
}
