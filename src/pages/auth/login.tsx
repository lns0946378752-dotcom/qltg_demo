export default function login() {
    return (
        <div>
            <h1>Đăng nhập</h1>
            <form>
                <div>
                    <label htmlFor="username">Tên người dùng:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    )
}