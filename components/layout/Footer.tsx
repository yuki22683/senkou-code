export function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-3">© 2026 閃光コード. All rights reserved.</p>
          <div className="flex justify-center items-center gap-6">
            <a href="#" className="hover:text-primary">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-primary">
              利用規約
            </a>
            <a href="#" className="hover:text-primary">
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
