'use client';

import KakaoLoginButton from '@/components/auth/KakaoLoginButton';
import { createClient } from '@/lib/supabase/client';

export default function Home() {
  const supabase = createClient();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-md">
        <KakaoLoginButton />
        
        {/* 로그인 상태 테스트를 위한 버튼 */}
        <button 
          onClick={async () => {
            const { data: { session } } = await supabase.auth.getSession();
            console.log('Current session:', session);
          }}
          className="mt-4 px-4 py-2 bg-gray-200 rounded"
        >
          Check Session
        </button>
      </div>
    </main>
  );
}
