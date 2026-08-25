export default function AuthHome() {
  return (
    <main>
      <h1>Đăng nhập / Đăng ký</h1>

      <button onClick={() => (window.location.href = "/auth/login")}>
        Login
      </button>

      <button onClick={() => (window.location.href = "/auth/register")}>
        Register
      </button>
    </main>
  );
}