import { Subscription } from "@/types/User";
import { z, ZodType } from "zod";

export const subscriptionSchema: ZodType<Subscription> = z.object({
  email: z.string().email(),
});
