# Gmail Setup Guide for Nodemailer

## 📧 Setting Up Gmail to Send Emails

Follow these steps to configure Gmail to work with Nodemailer:

### Step 1: Enable 2-Factor Authentication

1. Go to your [Google Account Settings](https://myaccount.google.com/)
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", click on **2-Step Verification**
4. Follow the prompts to enable 2FA if it's not already enabled

### Step 2: Generate an App Password

1. After enabling 2FA, go back to the **Security** page
2. Under "Signing in to Google", click on **App passwords**
3. You may need to sign in again
4. In the "Select app" dropdown, choose **Mail**
5. In the "Select device" dropdown, choose **Other (Custom name)**
6. Enter a name like "Portfolio Contact Form"
7. Click **Generate**
8. **IMPORTANT:** Copy the 16-character password that appears (it will look like: `xxxx xxxx xxxx xxxx`)
9. Save this password securely - you won't be able to view it again

### Step 3: Update Your .env.local File

1. Open the `.env.local` file in your project root
2. Replace the placeholders with your actual credentials:

```env
GMAIL_USER=lakshyabhardwaj200315@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
```

⚠️ **Important Notes:**
- Use your **App Password**, NOT your regular Gmail password
- Remove any spaces from the App Password when pasting it
- The `.env.local` file is gitignored by default - never commit it to Git
- Restart your dev server after updating the .env.local file

### Step 4: Test Your Configuration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact form
3. Fill out the form with a test message
4. Submit the form
5. Check your Gmail inbox for:
   - The contact form submission email (sent to you)
   - Check the test email address you used for the confirmation email

## 🔧 Troubleshooting

### "Invalid login" or "Authentication failed"
- Double-check that you're using the App Password, not your regular password
- Make sure there are no spaces in the App Password
- Verify that 2FA is enabled on your Google account

### "Less secure app access"
- This is no longer needed if you're using App Passwords
- App Passwords are the recommended and secure method

### Emails not being received
- Check your spam folder
- Verify the GMAIL_USER email is correct in .env.local
- Check the terminal/console for error messages
- Make sure the dev server was restarted after updating .env.local

### Rate Limiting
- Gmail has sending limits (approximately 500 emails per day for free accounts)
- For production, consider using a dedicated email service like SendGrid, Mailgun, or AWS SES

## 🚀 Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables to your hosting platform:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`

2. Never commit `.env.local` or any file containing your App Password

3. For better reliability in production, consider:
   - Using a professional email service (SendGrid, Mailgun, AWS SES)
   - Implementing rate limiting
   - Adding CAPTCHA to prevent spam

## 📝 What Happens When Form is Submitted

1. User fills out the contact form
2. Form data is sent to `/api/send-email`
3. Two emails are sent:
   - **To you**: Contains the sender's name, email, and message
   - **To sender**: Confirmation email thanking them for reaching out
4. User sees a success message on the form

## 🎨 Customization

You can customize the emails by editing:
`app/api/send-email/route.ts`

- Modify the HTML templates in `mailOptionsToYou` and `mailOptionsToSender`
- Change the email subjects
- Add CC or BCC recipients
- Customize the styling

---

**Need Help?** If you encounter any issues, check the console for error messages or feel free to ask for assistance!
