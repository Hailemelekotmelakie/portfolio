export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <p>© {year} Hailemelekot Melakie</p>
        <p>
          status: <span style={{ color: "var(--radar)" }}>Available</span>
        </p>
      </div>
    </footer>
  );
}
