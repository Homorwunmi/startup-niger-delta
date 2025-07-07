import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { loginSchema } from '@/helpers/validation';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'sonner';
import { loginUser } from '@/api/auth/auth';
import { useState } from 'react';
import { setAuthToken, getAuthToken } from '@/utils/auth-utils';
import { useRouter } from 'next/navigation';

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'form'>) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const parsedData = loginSchema.parse({
        email,
        password,
      });
      const response = await loginUser(parsedData.email, parsedData.password);
      if (response) {
        toast.success('Login successful!');
        setAuthToken(response?.user.accessToken || '');
        if (getAuthToken()) {
          router.push('/onboarding/startup');
        }
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <form
      className={cn('flex flex-col gap-6', className)}
      {...props}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="text-xl text-green-950">Sign in</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your account details
        </p>
      </div>

      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label htmlFor="email" className="text-gray-400 text-xs">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="text-gray-400 placeholder:text-gray-400 custom-input text-xs placeholder:text-xs custom-round shadow-none border-gray-300 focus-visible:shadow-none focus-visible:border-balance"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="password" className="text-gray-400 text-xs">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="text-gray-400 placeholder:text-gray-400 custom-input text-xs placeholder:text-xs custom-round shadow-none border-gray-300 focus-visible:shadow-none focus-visible:border-balance"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-green-800 text-sm">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full custom-round gradient-button">
          Sign in
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            OR
          </span>
        </div>

        <Button variant="outline" className="w-full custom-round">
          <FcGoogle />
          Continue with Google
        </Button>
      </div>

      <p className="text-center text-sm">
        By clicking the button above, you agree to our Terms of Use and Privaccy
        Policy
      </p>

      <div className="text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link href="/sign-up" className="text-green-800">
          Sign up
        </Link>
      </div>
    </form>
  );
}
