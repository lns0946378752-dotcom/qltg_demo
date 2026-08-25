export default function register() {
    return (
        <div>
            <h1>Đăng ký</h1>
            <form>
                <div>
                    <label htmlFor="username">Tên người dùng:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">register</button>
            </form>
        </div>
    )
}