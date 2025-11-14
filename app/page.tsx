'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        {/* A/B 테스트 Variant 링크 */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-6">A/B 테스트 Variant 페이지</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/test/variant-1"
              className="bg-white border border-gray-300 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="font-bold text-blue-600 mb-2">Variant 1</div>
              <div className="text-sm text-gray-600">텍스트 변경</div>
              <div className="text-xs text-gray-500 mt-1">&quot;무료로 시작하기&quot;</div>
            </Link>
            <Link 
              href="/test/variant-2"
              className="bg-white border border-gray-300 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="font-bold text-blue-600 mb-2">Variant 2</div>
              <div className="text-sm text-gray-600">디자인 개선</div>
              <div className="text-xs text-gray-500 mt-1">초록색, 큰 버튼, 아이콘</div>
            </Link>
            <Link 
              href="/test/variant-3"
              className="bg-white border border-gray-300 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="font-bold text-blue-600 mb-2">Variant 3</div>
              <div className="text-sm text-gray-600">위치 변경</div>
              <div className="text-xs text-gray-500 mt-1">상단 + 스티키 버튼</div>
            </Link>
            <Link 
              href="/test/variant-4"
              className="bg-white border border-gray-300 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="font-bold text-blue-600 mb-2">Variant 4</div>
              <div className="text-sm text-gray-600">인센티브 메시지</div>
              <div className="text-xs text-gray-500 mt-1">신뢰 요소 추가</div>
            </Link>
            <Link 
              href="/test/variant-5"
              className="bg-white border border-gray-300 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="font-bold text-blue-600 mb-2">Variant 5</div>
              <div className="text-sm text-gray-600">레이아웃 개선</div>
              <div className="text-xs text-gray-500 mt-1">이점, FAQ, 소셜 증명</div>
            </Link>
            <Link 
              href="/test/variant-b"
              className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-500 rounded-lg p-4 hover:border-green-600 hover:shadow-lg transition-all"
            >
              <div className="font-bold text-green-600 mb-2 flex items-center gap-2">
                Variant B
                <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">NEW</span>
              </div>
              <div className="text-sm text-gray-700 font-semibold">종합 개선안</div>
              <div className="text-xs text-gray-600 mt-1">심리학적 트리거 + UX 최적화</div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
