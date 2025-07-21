// import Investment from 'components/news/investment';
import { Company, Subscription } from 'types/User';
import { signupAuth, loginAuth } from 'types/auth';
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

export const startupCompanyProfileSchema = z.object({
  companyName: z.string().min(3, 'Company name is required'),
  incorporation: z
    .string()
    .min(4, 'Year of incorporation is required')
    .max(4, 'Year of incorporation cannot be in the future')
    .refine((value) => {
      const currentYear = new Date().getFullYear();
      const year = parseInt(value, 10);
      return year >= 1900 && year <= currentYear;
    }, 'Year of incorporation must not be greater than the current year'),
  rcNumber: z.string().min(7, 'RC Number is required'),
  industry: z.string().min(5, 'Industry is required'),
  description: z.string().min(8, 'Description is required'),
  fundingInterest: z.string().min(4, 'Funding interest is required'),
});

export const startupContactInfoSchema = z.object({
  companyEmail: z.string().email('Invalid email address'),
  companyWebsite: z.string().url('Invalid URL'),
  companyAddress: z.string().min(5, 'Company address is required'),
  companyPhone: z
    .string()
    .min(10, 'Company phone number must be at least 10 digits')
    .max(14, 'Company phone number must not exceed 14 digits'),
});

export const startupFounderInfoSchema = z.object({
  founderName: z.string().min(3, 'Founder name is required'),
  founderEmail: z.string().email('Invalid email address'),
  founderAddress: z.string().min(5, 'Founder address is required'),
  founderMobile: z
    .string()
    .min(10, 'Founder mobile number must be at least 10 digits')
    .max(14, 'Founder mobile number must not exceed 14 digits'),
  founderNo: z.string().min(1, 'Number of founders is required'),
});

export const startupIdentitySchema = z.object({
  certificate: z
    .instanceof(File)
    .refine((file) => file.size > 0, 'Certificate is required'),
  logo: z.instanceof(File).refine((file) => file.size > 0, 'Logo is required'),
});

export const angelProfileSchema = z.object({
  companyName: z.string().min(3, 'Company name is required'),
  industry: z.string().min(3, 'Industry is required'),
  description: z.string().min(10, 'Description is required'),
  fundingInterest: z.string().min(4, 'Funding interest is required'),
});

export const angelContactInfoSchema = z.object({
  companyEmail: z.string().email('Invalid email address'),
  companyWebsite: z.string().url('Invalid URL'),
  companyAddress: z.string().min(5, 'Company address is required'),
  companyPhone: z
    .string()
    .min(10, 'Company phone number must be at least 10 digits')
    .max(14, 'Company phone number must not exceed 14 digits'),
});

export const angelInvestmentInfoSchema = z.object({
  angelName: z.string(),
  investmentExperience: z.string().date('Invalid date'),
  investmentProof: z.string().url('Invalid URL'),
  investmentSize: z.string(),
});

export const angelInvestmentIdentificationSchema = z.object({
  identification: z.string().min(1, 'Identification is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  message: z.string().min(1, 'message is required'),
});

export const ventureCapitalistProfileSchema = z.object({
  companyName: z.string().min(3, 'Company name is required'),
  industry: z.string().min(3, 'Industry is required'),
  description: z.string().min(10, 'Description is required'),
  fundingInterest: z.string().min(4, 'Funding interest is required'),
});

export const ventureCapitalistContactInfoSchema = z.object({
  companyEmail: z.string().email('Invalid email address'),
  companyWebsite: z.string().url('Invalid URL'),
  companyAddress: z.string().min(5, 'Company address is required'),
  companyPhone: z
    .string()
    .min(10, 'Company phone number must be at least 10 digits')
    .max(14, 'Company phone number must not exceed 14 digits'),
});

export const ventureCapitalistInvestmentInfoSchema = z.object({
  generalPartner: z.string().min(3, 'General partner is required'),
  investmentExperience: z.string().min(1, 'Investment experience is required'),
  investmentProof: z.string().url('Invalid URL'),
  investmentSize: z.string(),
});

export const ventureCapitalistInvestmentIdentificationSchema = z.object({
  identification: z.string().min(1, 'Identification is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  message: z.string().min(1, 'Message is required'),
});

export const acceleratorProfileSchema = z.object({
  companyName: z.string().min(3, 'Company name is required'),
  industry: z.string().min(3, 'Industry is required'),
  description: z.string().min(10, 'Description is required'),
  fundingInterest: z.string().min(4, 'Funding interest is required'),
});

export const acceleratorContactInfoSchema = z.object({
  companyEmail: z.string().email('Invalid email address'),
  companyWebsite: z.string().url('Invalid URL'),
  companyAddress: z.string().min(5, 'Company address is required'),
  companyPhone: z
    .string()
    .min(10, 'Company phone number must be at least 10 digits')
    .max(14, 'Company phone number must not exceed 14 digits'),
});

export const acceleratorIncubatorSchema = z.object({
  principalPromoter: z.string().min(3, 'Principal promoter is required'),
  investmentExperience: z.string().min(1, 'Investment experience is required'),
  investmentProof: z.string().url('Invalid URL'),
  investmentSize: z.string(),
});

export const acceleratorInvestmentIdentificationSchema = z.object({
  identification: z.string().min(1, 'Identification is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  message: z.string().min(1, 'Message is required'),
});
