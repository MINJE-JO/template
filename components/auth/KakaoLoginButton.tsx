'use client';

import { createClient } from '@/lib/supabase/client';
import { Provider } from '@supabase/supabase-js';

export default function KakaoLoginButton() {
  const supabase = createClient();

  const handleKakaoLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao' as Provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
    } catch (error) {
      console.error('Error logging in with Kakao:', error);
    }
  };

  return (
    <button
      onClick={handleKakaoLogin}
      className="flex items-center justify-center w-full px-4 py-2 text-white bg-[#FEE500] hover:bg-[#E6CF00] rounded-lg"
    >
      카카오로 로그인
    </button>
  );
} 