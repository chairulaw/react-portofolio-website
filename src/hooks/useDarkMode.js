import { useEffect, useState } from "react";

// Hook untuk mengelola tema dark/light mode
export function useDarkMode() {
  // Fungsi untuk mendapatkan tema awal
  const getInitialTheme = () => {
    // Cek apakah tema sudah disimpan di localStorage
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme"); // Mengembalikan tema yang disimpan
    }
    // Jika tidak, cek preferensi sistem pengguna
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  // State untuk menyimpan tema saat ini
  const [theme, setTheme] = useState(getInitialTheme);

  // Efek samping untuk menerapkan tema ke elemen <html> dan menyimpan tema ke localStorage
  useEffect(() => {
    console.log("Current theme:", theme); // Debugging: Log tema saat ini

    // Terapkan tema ke elemen <html>
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // Tambahkan class "dark"
    } else {
      document.documentElement.classList.remove("dark"); // Hapus class "dark"
    }

    // Simpan tema ke localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // Jalankan efek ini setiap kali `theme` berubah

  // Fungsi untuk mengganti tema (toggle antara dark dan light mode)
  const toggleTheme = () => {
    console.log("Toggling theme..."); // Debugging: Log saat tema diganti
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Kembalikan tema saat ini dan fungsi untuk mengganti tema
  return { theme, toggleTheme };
}