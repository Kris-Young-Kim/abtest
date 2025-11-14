'use client';

export default function Variant4() {
  const handleCTAClick = () => {
    // CTA 버튼 클릭 로그 - Variant 4 (인센티브 메시지)
    console.log('[CTA Variant 4] 신뢰 요소 포함 버튼이 클릭되었습니다.', {
      timestamp: new Date().toISOString(),
      action: 'cta_button_click',
      variant: 'incentive_message',
      trustElements: ['no_credit_card', 'cancel_anytime', 'social_proof'],
    });
    
    alert('신뢰 요소가 포함된 버튼이 클릭되었습니다!');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="mb-4 text-center text-sm text-gray-500">
          A/B 테스트 Variant 4: 인센티브 메시지 추가
        </div>
        <h1 className="text-4xl font-bold text-center mb-8">
          Next.js 프로젝트가 성공적으로 설치되었습니다! 🎉
        </h1>
        <p className="text-center text-gray-600 mb-8">
          개발 서버를 실행하려면 <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code> 명령어를 사용하세요.
        </p>
        
        {/* 신뢰 지표 */}
        <div className="flex justify-center gap-8 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>이미 10,000명이 시작했습니다</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>평점 4.8/5.0</span>
          </div>
        </div>
        
        {/* Call to Action 버튼 - 인센티브 메시지 포함 */}
        <div className="flex flex-col items-center mt-8">
          <button
            onClick={handleCTAClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg mb-4"
          >
            무료로 시작하기
          </button>
          
          {/* 보조 메시지 */}
          <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>신용카드 불필요</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>취소는 언제든지 가능</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>첫 30일 무료</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

