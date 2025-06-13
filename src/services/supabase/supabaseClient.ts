// src/services/supabase/supabaseClient.ts

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Ensure environment variables are defined
const supabaseUrl: string = process.env.REACT_APP_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.REACT_APP_SUPABASE_ANON_KEY!;

// Interceptor-style wrapper around fetch
async function youreduInterceptor(
    input: RequestInfo,
    init?: RequestInit
): Promise<Response> {
    try {
        const response = await fetch(input, init);

        if (response.status === 401) {
            // 🔐 Add your 401-handling logic here
            console.warn('[Interceptor] 401 Unauthorized');           
        }

        return response;
    } catch (error) {
        console.error('[Fetch Error]', error);
        throw error;
    }
}

// Create Supabase client with custom fetch and headers
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
        storageKey: 'youredu_supabase_auth',
        storage: localStorage,
        flowType: 'pkce',
    },
    realtime: {
        params: {
            eventsPerSecond: 10,
        },
    },
    global: {
        headers: {
            'X-Client-Info': 'youredu-web-app',
        },
        fetch: youreduInterceptor as typeof fetch,
    },
    db: {
        schema: 'public',
    },
});
