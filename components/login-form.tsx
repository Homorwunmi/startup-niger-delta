import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { subscriptionSchema } from '@/helpers/validation';
import { FcGoogle } from 'react-icons/fc';
import { Form } from './ui/form';

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'form'>) {
  const form = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(subscriptionSchema),
  });

  return (
    <Form {...form}>
      <form className={cn('flex flex-col gap-6', className)} {...props}>
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
          By clicking the button above, you agree to our Terms of Use and
          Privaccy Policy
        </p>

        <div className="text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="text-green-800">
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
}
