function renderHtml(url) {
    switch (url) {
        case '/home':
            return `
                <html>
                    <b>home页面</b>
                    <div>下午好,乔乔</div>
                </html>
            `
        case '/list':
            return `
                <html>
                    <b>list页面</b>
                    <div>晚上好,乔乔</div>
                </html>
            `
        default:
            return `
                <html>
                    <div>not found</div>
                </html>
            `
    }

}
module.exports = {
    renderHtml
}