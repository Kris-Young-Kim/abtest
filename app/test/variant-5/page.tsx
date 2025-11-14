'use client';

export default function Variant5() {
  const handleCTAClick = (source: string) => {
    // CTA 버튼 클릭 로그 - Variant 5 (레이아웃 개선)
    console.log(`[CTA Variant 5] ${source}에서 버튼이 클릭되었습니다.`, {
      timestamp: new Date().toISOString(),
      action: 'cta_button_click',
      variant: 'layout_improvement',
      clickSource: source,
    });
    
    alert(`${source}에서 버튼이 클릭되었습니다!`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full">
        <div className="mb-4 text-center text-sm text-gray-500">
          A/B 테스트 Variant 5: 레이아웃 개선
        </div>
        
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Next.js 프로젝트가 성공적으로 설치되었습니다! 🎉
          </h1>
          <p className="text-gray-600 mb-8">
            개발 서버를 실행하려면 <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code> 명령어를 사용하세요.
          </p>
          
          {/* 상단 CTA */}
          <button
            onClick={() => handleCTAClick('헤더')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg"
          >
            무료로 시작하기
          </button>
        </div>

        {/* 이점(Benefits) 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">왜 선택해야 할까요?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">빠른 시작</h3>
              <p className="text-gray-600">5분 안에 시작할 수 있습니다. 복잡한 설정 없이 바로 사용하세요.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">안전한 보안</h3>
              <p className="text-gray-600">엔터프라이즈급 보안으로 데이터를 안전하게 보호합니다.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">확장 가능</h3>
              <p className="text-gray-600">비즈니스가 성장해도 함께 성장하는 솔루션입니다.</p>
            </div>
          </div>
        </section>

        {/* 소셜 증명(Social Proof) 섹션 */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">이미 많은 사람들이 시작했습니다</h2>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">10,000+</div>
              <div className="text-gray-600">활성 사용자</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">4.8/5.0</div>
              <div className="text-gray-600">평균 평점</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600">업타임</div>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">자주 묻는 질문</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Q. 신용카드가 필요한가요?</h3>
              <p className="text-gray-600">A. 아니요, 무료로 시작할 때는 신용카드가 필요하지 않습니다.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Q. 언제든지 취소할 수 있나요?</h3>
              <p className="text-gray-600">A. 네, 언제든지 취소할 수 있으며 추가 비용은 없습니다.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Q. 무료 체험 기간은 얼마나 되나요?</h3>
              <p className="text-gray-600">A. 첫 30일 동안 무료로 모든 기능을 사용할 수 있습니다.</p>
            </div>
          </div>
        </section>

        {/* 하단 CTA */}
        <section className="text-center bg-gradient-to-r from-blue-50 to-blue-100 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
          <p className="text-gray-600 mb-6">무료로 시작하고 30일 동안 모든 기능을 체험해보세요.</p>
          <button
            onClick={() => handleCTAClick('하단')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg"
          >
            무료로 시작하기
          </button>
          <div className="mt-4 text-sm text-gray-600">
            <p>✓ 신용카드 불필요</p>
            <p>✓ 취소는 언제든지 가능</p>
            <p>✓ 첫 30일 무료</p>
          </div>
        </section>
      </div>
    </main>
  );
}

