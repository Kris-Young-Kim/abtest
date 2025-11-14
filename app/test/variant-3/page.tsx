'use client';

export default function Variant3() {
  const handleCTAClick = (position: string) => {
    // CTA 버튼 클릭 로그 - Variant 3 (위치 변경)
    console.log(`[CTA Variant 3] ${position} 버튼이 클릭되었습니다.`, {
      timestamp: new Date().toISOString(),
      action: 'cta_button_click',
      variant: 'position_change',
      buttonPosition: position,
    });
    
    alert(`${position} 버튼이 클릭되었습니다!`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 relative">
      {/* 상단 CTA 버튼 (제목 바로 아래) */}
      <div className="z-10 max-w-5xl w-full mx-auto">
        <div className="mb-4 text-center text-sm text-gray-500">
          A/B 테스트 Variant 3: 위치 변경
        </div>
        <h1 className="text-4xl font-bold text-center mb-8">
          Next.js 프로젝트가 성공적으로 설치되었습니다! 🎉
        </h1>
        
        {/* 상단 CTA 버튼 */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => handleCTAClick('상단')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg"
          >
            무료로 시작하기
          </button>
        </div>
        
        <p className="text-center text-gray-600 mb-8">
          개발 서버를 실행하려면 <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code> 명령어를 사용하세요.
        </p>
        
        <div className="space-y-4 mb-32">
          <p className="text-center text-gray-500">
            스크롤해도 하단에 버튼이 고정되어 있습니다.
          </p>
          <p className="text-center text-gray-500">
            더 많은 콘텐츠를 추가할 수 있습니다...
          </p>
        </div>
      </div>
      
      {/* 스티키 하단 CTA 버튼 (스크롤해도 항상 보임) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
        <div className="max-w-5xl mx-auto flex justify-center">
          <button
            onClick={() => handleCTAClick('하단 스티키')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg w-full max-w-md"
          >
            무료로 시작하기
          </button>
        </div>
      </div>
    </main>
  );
}

