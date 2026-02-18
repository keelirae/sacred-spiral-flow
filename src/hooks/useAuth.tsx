import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

// Dev-only flag (Vite exposes import.meta.env.DEV)
const isDev = typeof import.meta !== 'undefined' && Boolean((import.meta as any).env?.DEV);

interface Profile {
  id: string;
  user_id: string;
  display_name: string | null;
  user_type: 'client' | 'coach';
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  signUp: (email: string, password: string, displayName: string, userType: 'client' | 'coach') => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      setProfile(data as Profile);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  useEffect(() => {
    // In development we provide a lightweight fake auth so you can preview
    // the dashboard without running Supabase. In production we use Supabase.
    if (isDev) {
      // Try to restore a dev session from sessionStorage (optional)
      const devEmail = sessionStorage.getItem('dev:email');
      if (devEmail) {
        const u = { id: 'dev-user', email: devEmail } as unknown as User;
        setUser(u);
        setSession({ user: u } as unknown as Session);
        setProfile({
          id: 'dev-profile',
          user_id: 'dev-user',
          display_name: devEmail.split('@')[0],
          user_type: 'client',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      }

      setLoading(false);

      // No Supabase listeners in dev.
      return;
    }

    // Set up auth state listener (production / real auth)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          // Defer profile fetch to avoid auth callback issues
          setTimeout(() => {
            fetchProfile(session.user.id);
          }, 0);
        } else {
          setProfile(null);
        }

        setLoading(false);
      }
    );

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);

      if (session?.user) {
        fetchProfile(session.user.id);
      }

      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, displayName: string, userType: 'client' | 'coach') => {
    if (isDev) {
      // Create a simple dev user and profile
      const u = { id: 'dev-user', email } as unknown as User;
      setUser(u);
      setSession({ user: u } as unknown as Session);
      setProfile({
        id: 'dev-profile',
        user_id: 'dev-user',
        display_name: displayName || email.split('@')[0],
        user_type: userType,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
      try { sessionStorage.setItem('dev:email', email); } catch {}
      return { error: null };
    }

    const redirectUrl = `${window.location.origin}/`;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          display_name: displayName,
          user_type: userType
        }
      }
    });

    return { error };
  };

  const signIn = async (email: string, password: string) => {
    if (isDev) {
      const u = { id: 'dev-user', email } as unknown as User;
      setUser(u);
      setSession({ user: u } as unknown as Session);
      setProfile({
        id: 'dev-profile',
        user_id: 'dev-user',
        display_name: email.split('@')[0],
        user_type: 'client',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
      try { sessionStorage.setItem('dev:email', email); } catch {}
      return { error: null };
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    return { error };
  };

  const signOut = async () => {
    if (isDev) {
      setUser(null);
      setSession(null);
      setProfile(null);
      try { sessionStorage.removeItem('dev:email'); } catch {}
      return { error: null };
    }

    const { error } = await supabase.auth.signOut();
    return { error };
  };

  const value = {
    user,
    session,
    profile,
    signUp,
    signIn,
    signOut,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};