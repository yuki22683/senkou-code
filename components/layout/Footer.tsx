export function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">閃光コード</h3>
            <p className="text-sm text-muted-foreground">
              穴埋め形式で楽しく学ぶプログラミング演習プラットフォーム
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">サポート対応言語</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Python, JavaScript, Java</li>
              <li>C++, C#, Go, Rust</li>
              <li>Ruby, PHP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">リンク</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>
                <a href="#" className="hover:text-primary">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  利用規約
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          © 2026 閃光コード. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
