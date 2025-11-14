'use client';

export default function Variant1() {
  const handleCTAClick = () => {
    // CTA 버튼 클릭 로그 - Variant 1 (텍스트 변경)
    console.log('[CTA Variant 1] 무료로 시작하기 버튼이 클릭되었습니다.', {
      timestamp: new Date().toISOString(),
      action: 'cta_button_click',
      variant: 'text_change',
      buttonText: '무료로 시작하기',
    });
    
    alert('무료로 시작하기 버튼이 클릭되었습니다!');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="mb-4 text-center text-sm text-gray-500">
          A/B 테스트 Variant 1: 텍스트 변경
        </div>
        <h1 className="text-4xl font-bold text-center mb-8">
          Next.js 프로젝트가 성공적으로 설치되었습니다! 🎉
        </h1>
        <p className="text-center text-gray-600 mb-8">
          개발 서버를 실행하려면 <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code> 명령어를 사용하세요.
        </p>
        
        {/* Call to Action 버튼 - 텍스트 변경 */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleCTAClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg"
          >
            무료로 시작하기
          </button>
        </div>
      </div>
    </main>
  );
}

