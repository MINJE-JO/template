# Next.js Template

## 기술 스택
- Next.js 14.2.20
- Node.js 20.18.1
- Tailwind CSS
- shadcn/ui
- Supabase (with Kakao Auth)

## 시작하기

### 1. 환경 설정
`.env.local` 파일을 생성하고 다음 내용을 추가하세요:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
KAKAO_CLIENT_ID=your-kakao-client-id
KAKAO_CLIENT_SECRET=your-kakao-client-secret
```

### 2. 설치 및 실행
```
npm install
npm run dev
```
