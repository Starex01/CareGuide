

export default function Footer() {
  return (
    <footer className="border-t py-6 text-sm text-center mt-24 pb-10 text-blue-700"
        style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}
      >
        <p>
        © {new Date().getFullYear()} ✔ Verified healthcare data | 📍 Serving Lagos & Abuja |💲 Always free to use</p>
        <p className="text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
          Powered by Starex Developer · For support contact: starexdeveloper@gmail.com
        </p>
      
    </footer>
  );
}



    