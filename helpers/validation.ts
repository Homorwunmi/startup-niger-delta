import { Company, Subscription } from '@/types/User';
import { signupAuth, loginAuth } from '@/types/auth';
import { z, ZodType } from 'zod';

export const subscriptionSchema: ZodType<Subscription> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must not exceed 20 characters'),
});

export const companySchema: ZodType<Company> = z.object({
  companyName: z.string().min(1, 'Company name is required'),
});

export const signupSchema: ZodType<signupAuth> = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must not exceed 20 characters'),
});

export const loginSchema: ZodType<loginAuth> = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must not exceed 20 characters'),
});
