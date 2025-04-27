import {
  registerUser,
  sendVerificationEmail,
  loginUser,
  resetPassword,
  signInWithGoogle,
} from './src/auth.js';
import { onboardingRegistration } from './api/onboarding/onboarding.js';
import { createNewsBlog } from './api/blog/blog.js';

//Uncomment the following lines to test other authentication methods
// const a = await registerUser('test@gmail.com', 'password123');
// const b = await sendVerificationEmail(a);
const c = await loginUser('test@gmail.com', 'password123');
// const d = await resetPassword();

//Test Google Sign-In
// const e = await signInWithGoogle();
// console.log("Google Sign-In: ", e);

// //Test Onboarding Registration
// await onboardingRegistration('startup', 'company_profile', {
//     company_name: 'Test Company',
//     year_of_incorporation: '1999',
//     rc_number: '000000',
//     industry: 'Fintech',
//     startup_description: 'This is a test company',
//     funding_interest: '$3000000',
// });

//Test Blog Creation
await createNewsBlog({
  title: 'Test Blog',
  content: 'This is a test blog content',
  image: 'https://example.com/image.jpg',
  date: new Date().toISOString(),
  category: 'Test Category',
});

console.log('Done');
