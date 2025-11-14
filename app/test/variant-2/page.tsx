'use client';

export default function Variant2() {
  const handleCTAClick = () => {
    // CTA 버튼 클릭 로그 - Variant 2 (디자인 개선)
    console.log('[CTA Variant 2] 디자인 강화 버튼이 클릭되었습니다.', {
      timestamp: new Date().toISOString(),
      action: 'cta_button_click',
      variant: 'design_improvement',
      buttonColor: 'green',
      buttonSize: 'large',
    });
    
    alert('디자인 강화 버튼이 클릭되었습니다!');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="mb-4 text-center text-sm text-gray-500">
          A/B 테스트 Variant 2: 디자인 개선
        </div>
        <h1 className="text-4xl font-bold text-center mb-8">
          Next.js 프로젝트가 성공적으로 설치되었습니다! 🎉
        </h1>
        <p className="text-center text-gray-600 mb-8">
          개발 서버를 실행하려면 <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code> 명령어를 사용하세요.
        </p>
        
        {/* Call to Action 버튼 - 디자인 강화 (초록색, 큰 버튼, 아이콘) */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-12 rounded-xl shadow-2xl transition-all duration-200 transform hover:scale-110 active:scale-95 text-xl flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            무료로 시작하기
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}

