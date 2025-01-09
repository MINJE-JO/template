'use client';

import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<string>('');
  const supabase = createClient();

  const testConnection = async () => {
    try {
      // 테이블이 없으면 에러가 발생할 수 있습니다.
      // Supabase 대시보드에서 테이블을 먼저 생성해주세요
      const { data, error } = await supabase
        .from('test')
        .select('*')
        .limit(2);

      if (error) {
        setResult('Error: ' + error.message);
        return;
      }

      setResult('Connection successful! Data: ' + JSON.stringify(data));
    } catch (error) {
      setResult('Error: ' + error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <button
        onClick={testConnection}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Test Supabase Connection
      </button>
      <div className="mt-4 p-4 bg-gray-100 rounded max-w-xl overflow-auto">
        {result}
      </div>
    </div>
  );
}
