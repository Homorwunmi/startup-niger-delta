import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'form'>) {
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-xl text-green-950">Create an account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Let&apos;s get started with getting you in
        </p>
      </div>

      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label htmlFor="email" className="text-gray-400 text-xs">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            className="text-gray-400 placeholder:text-gray-400 custom-input text-xs placeholder:text-xs custom-round shadow-none border-gray-300 focus-visible:shadow-none focus-visible:border-balance"
            placeholder="Enter your names"
            required
          />
        </div>
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
        <Button type="submit" className="w-full custom-round gradient-button">
          Sign up with email
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
        Already have an account?{' '}
        <Link href="/" className="text-green-800">
          Sign in
        </Link>
      </div>
    </form>
  );
}
