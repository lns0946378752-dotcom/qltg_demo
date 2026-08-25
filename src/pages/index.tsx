import Link from "next/link";

export default function Home() {
  return (
    <main className="site-shell home-page">
      <nav className="topbar" aria-label="Điều hướng chính">
        <span className="brand">HỒ SƠ SINH VIÊN</span>
        <Link className="nav-link active" href="/">Trang chủ</Link>
        <Link className="nav-link" href="/about">Trang cấp 2</Link>
      </nav>

      <section className="profile-hero" aria-labelledby="profile-title">
        <div className="profile-intro">
          <p className="eyebrow">THÔNG TIN CÁ NHÂN / 2025</p>
          <h1 id="profile-title">Lê Nhật Sáng</h1>
          <p className="intro-copy">Sinh viên lớp 25CT401, Là một học sinh/sinh viên tại trường đại học Lạc Hồng.</p>
          <Link className="primary-button" href="/about">Xem thêm về mình <span aria-hidden="true">→</span></Link>
        </div>

        <div className="identity-mark" aria-hidden="true">
          <span>LN</span>
          <small>25</small>
        </div>
      </section>

      <section className="details-panel" aria-labelledby="details-title">
        <dl className="details-grid">
          <div className="detail-item">
            <dt>Họ và tên</dt>
            <dd>Lê Nhật Sáng</dd>
          </div>
          <div className="detail-item">
            <dt>Mã số sinh viên</dt>
            <dd>425000117</dd>
          </div>
          <div className="detail-item">
            <dt>Lớp</dt>
            <dd>25CT401</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}