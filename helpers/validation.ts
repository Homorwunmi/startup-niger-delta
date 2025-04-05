import { Company, Subscription } from "@/types/User";
import { z, ZodType } from "zod";

export const subscriptionSchema: ZodType<Subscription> = z.object({
  email: z.string().email(),
});

export const companySchema: ZodType<Company> = z.object({
  companyName: z.string().min(1, "Company name is required"),
});
