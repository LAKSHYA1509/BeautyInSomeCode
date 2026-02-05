# 🗨️ Giscus Setup Guide

Complete setup instructions for enabling GitHub-powered comments on your blog.

---

## 📋 **Prerequisites**

- [x] Your repository is **public** (required for Giscus)
- [x] Repository has **GitHub Discussions enabled**
- [x] **Giscus app installed** on your repository

---

## 🚀 **Step-by-Step Setup**

### **Step 1: Enable GitHub Discussions**

1. Go to your repository: https://github.com/LAKSHYA1509/BeautyInSomeCode
2. Click **Settings** tab
3. Scroll down to **Features** section
4. Check ✅ **Discussions**
5. Click **Set up discussions**

### **Step 2: Install Giscus App**

1. Visit: https://github.com/apps/giscus
2. Click **Install**
3. Select **LAKSHYA1509/BeautyInSomeCode**
4. Authorize the app

### **Step 3: Get Your Configuration**

1. Go to: https://giscus.app
2. Fill in the form:

   **Repository:**
   ```
   LAKSHYA1509/BeautyInSomeCode
   ```

   **Page ↔️ Discussions Mapping:**
   - Select: **pathname** (recommended)

   **Discussion Category:**
   - Create a new category called **"Blog Comments"**
   - Or select **"General"**

   **Features:**
   - ✅ Enable reactions
   - ✅ Emit discussion metadata
   - Choose **"Comment box above comments"**

   **Theme:**
   - Select: **dark** (matches your site)

3. **Copy the configuration values** that appear at the bottom. You'll need:
   - `data-repo-id`
   - `data-category-id`

### **Step 4: Update Your Code**

Open `components/comments.tsx` and update the Giscus component with your values:

```tsx
<Giscus
  id="comments"
  repo="LAKSHYA1509/BeautyInSomeCode"
  repoId="YOUR_REPO_ID_HERE"        // Replace with actual value from giscus.app
  category="Blog Comments"
  categoryId="YOUR_CATEGORY_ID_HERE" // Replace with actual value from giscus.app
  mapping="pathname"
  term={postSlug}
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="top"
  theme="dark"
  lang="en"
  loading="lazy"
/>
```

---

## 🎨 **Custom Theming (Optional)**

To match Giscus with your site's design, you can create a custom theme CSS file:

```css
/* public/giscus-custom.css */
.giscus {
  color-scheme: dark;
}

.giscus-frame {
  border: 1px solid #222 !important;
  border-radius: 16px !important;
  background: #0A0A0A !important;
}

/* Customize further as needed */
```

Then update the Giscus theme:
```tsx
theme="https://yourdomain.com/giscus-custom.css"
```

---

## ✅ **Verification**

After setup:

1. Run your dev server: `npm run dev`
2. Navigate to a blog post
3. You should see the Giscus comment widget
4. Try posting a test comment (you'll need to sign in with GitHub)
5. Check your repository's Discussions tab to see the comment appear

---

## 🔧 **Troubleshooting**

**Comments not loading?**
- Make sure the repository is **public**
- Verify **Discussions are enabled**
- Check that **Giscus app is installed**
- Confirm `repoId` and `categoryId` are correct

**Theme doesn't match?**
- Use `theme="dark"` for dark mode
- Or create a custom theme CSS

**Want to moderate comments?**
- Go to your repository's **Discussions** tab
- You can edit, delete, or lock any discussion
- All blog comments appear as discussions

---

## 📊 **Benefits of Giscus**

✅ **Free forever** - No cost, no limits  
✅ **No database needed** - GitHub is your backend  
✅ **Spam protection** - GitHub's moderation tools  
✅ **User authentication** - GitHub OAuth built-in  
✅ **Markdown support** - Rich formatting in comments  
✅ **Reactions** - Emoji reactions on comments  
✅ **Notifications** - Users get notified of replies  

---

## 🎉 **You're Done!**

Your blog now has a fully functional, GitHub-powered comment system with zero backend code!
