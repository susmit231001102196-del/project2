const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Students', href: '#students' },
  { label: 'Results', href: '#results' },
  { label: 'Support', href: '#support' },
]

function Header() {
  return (
    <header className="portal-header">
      <div className="container header-inner">
        <div className="brand-block">
          <div className="brand-mark">SP</div>
          <div>
            <span className="eyebrow">Campus Portal</span>
            <h2>StudentPulse</h2>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button type="button" className="header-button">
          Add Student
        </button>
      </div>
    </header>
  )
}

export default Header
