import { registerUser, sendVerificationEmail, loginUser, resetPassword } from './src/auth.js';
import { onboardingRegistration } from './src/onboarding.js';

// const a = await registerUser('test@gmail.com', 'password123');
// const b = await sendVerificationEmail(a);
const c = await loginUser('test@gmail.com', 'password123');
// const d = await resetPassword();
await onboardingRegistration('startup', 'company_profile', {
    company_name: 'Test Company',
    year_of_incorporation: '1999',
    rc_number: '000000',
    industry: 'Fintech',
    startup_description: 'This is a test company',
    funding_interest: '$3000000',
});

console.log("Done");