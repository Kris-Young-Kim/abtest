export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* 헤더 */}
      <header className="border-b border-border">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl">LightSpeed</div>
          <div className="flex gap-8">
            <a href="#features" className="text-sm hover:text-primary transition-colors">기능</a>
            <a href="#benefits" className="text-sm hover:text-primary transition-colors">장점</a>
            <a href="#cta" className="text-sm hover:text-primary transition-colors">시작</a>
          </div>
        </nav>
      </header>

      {/* 히어로 섹션 */}
      <section className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-3xl text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
            번개 같이 빠른 웹 경험
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-balance">
            저용량 페이지로 모든 사용자에게 빠른 로딩 속도를 제공합니다.
            최적화된 디자인과 뛰어난 성능이 만난 곳입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
              시작하기
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
              더 알아보기
            </button>
          </div>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section id="features" className="bg-muted py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">주요 기능</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-2xl font-bold">⚡</div>
              <h3 className="font-bold text-lg">초고속 로딩</h3>
              <p className="text-sm text-muted-foreground">
                최적화된 코드로 0.5초 이내 로딩 완료
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold">📱</div>
              <h3 className="font-bold text-lg">반응형 디자인</h3>
              <p className="text-sm text-muted-foreground">
                모든 기기에서 완벽하게 작동합니다
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold">🎯</div>
              <h3 className="font-bold text-lg">미니멀 코드</h3>
              <p className="text-sm text-muted-foreground">
                불필요한 요소를 제거한 깔끔한 구성
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section id="benefits" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">입증된 효과</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-sm text-muted-foreground">더 빠른 로딩</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-sm text-muted-foreground">접근성 준수</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15KB</div>
              <p className="text-sm text-muted-foreground">최소 번들 크기</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1ms</div>
              <p className="text-sm text-muted-foreground">평균 응답 시간</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section id="cta" className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">지금 바로 시작하세요</h2>
          <p className="text-lg opacity-90">
            빠르고 효율적인 웹 경험으로 전환하세요
          </p>
          <button className="px-8 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:opacity-90 transition-opacity">
            무료 시작
          </button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="border-t border-border py-8 px-6 bg-muted">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© 2025 LightSpeed. 모든 권리 보유.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">개인정보</a>
            <a href="#" className="hover:text-foreground transition-colors">이용약관</a>
            <a href="#" className="hover:text-foreground transition-colors">문의</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
