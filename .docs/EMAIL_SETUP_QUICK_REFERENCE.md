# Contact Form Email Configuration - Quick Reference

## Environment Variables Needed

Add these to your `.env.local` file:

```env
GMAIL_USER=lakshyabhardwaj200315@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

## How to Get Gmail App Password

1. Enable 2FA: https://myaccount.google.com/security
2. Create App Password: https://myaccount.google.com/apppasswords
3. Select "Mail" and "Other (Custom)"
4. Copy the 16-character password
5. Paste it in `.env.local` (no spaces)

## Files Created/Modified

✅ `app/api/send-email/route.ts` - Email API endpoint
✅ `components/contact.tsx` - Updated with API integration
✅ `.env.local` - Environment variables (UPDATE THIS!)
✅ `GMAIL_SETUP_GUIDE.md` - Detailed setup instructions

## Testing

1. Restart dev server after updating `.env.local`
2. Fill out the contact form
3. Check your email for:
   - Message from the contact form (to you)
   - Confirmation email (to the sender)

## Production Deployment

Add these environment variables to your hosting platform:
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`

**For Vercel:**
Project Settings → Environment Variables → Add each one

**For Netlify:**
Site Settings → Build & Deploy → Environment → Add each one

---

**Full Documentation:** See `GMAIL_SETUP_GUIDE.md` for complete instructions
