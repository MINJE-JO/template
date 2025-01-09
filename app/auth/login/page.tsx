import KakaoLoginButton from '@/components/auth/KakaoLoginButton';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">로그인</h2>
          <p className="mt-2 text-gray-600">
            계정에 로그인하세요
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <KakaoLoginButton />
        </div>
      </div>
    </div>
  );
} 