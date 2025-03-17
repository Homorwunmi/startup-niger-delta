import { registerUser, sendVerificationEmail, loginUser, resetPassword } from './src/auth.js';

const a = await registerUser('omotayomowunmi@gmail.com', 'password123');
const b = await sendVerificationEmail(a);
const c = await loginUser('omotayomowunmi@gmail.com', 'password123');
const d = await resetPassword(a);