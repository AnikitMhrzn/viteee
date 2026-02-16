import '../index.css'

export default function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="footer-left">
        © {new Date().getFullYear()} MyApp
      </div>

      <div className="footer-right">
        <span className="pi pi-github" />
        <span className="pi pi-twitter" />
        <span className="pi pi-linkedin" />
      </div>
    </footer>
  )
}
