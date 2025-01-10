# ArticleHub 📚

*A modern platform for reading, managing, and sharing articles.*  
Built with React, this platform is designed to provide a seamless and engaging reading experience while enabling robust content management.

---

## Features

### 1. Article List View (Homepage)
- *Responsive Design*: Article cards with consistent spacing that adapt to various screen sizes.
- *Card Details*:
  - Title
  - Excerpt
  - Thumbnail
  - Reading time
  - Category
  - Last edited timestamp
- *Smooth Interactions*:
  - Hover effects and transitions for an intuitive UI.
- *Advanced Filtering*:
  - *Category-based Filtering*: View articles by category.
  - *Search Functionality*: Search articles by title or content.
  - *Sorting Options*:
    - By date
    - By reading time
    - By popularity
    - By last edited
  - *Filter Pills*: Displays active filters for better UX.

---

### 2. Reading Experience
- *Article View*:
  - Clean typography with proper vertical rhythm for readability.
  - Adjustable font size to suit user preferences.
  - Estimated reading time for each article.
  - *Reading Progress Indicator*: A scroll-based visual progress tracker.
  - Sticky header displaying the article title for easy navigation.
  - Edit button for modifying article content.

---

### 3. Content Management
- *Article Creation*:
  - Rich text editor for content.
  - Fields for title and excerpt.
  - Dropdown for category selection.
  - Input for tags.
  - Thumbnail URL input for adding article images.
- *Article Editing*:
  - Modify existing articles using the same interface as article creation.

---

### To Do: Future Enhancements
#### 4. Interactive Features
- *Bookmarking System*:
  - Add/remove bookmarks.
  - View bookmarked articles in a dedicated list.
  - Persist bookmarks using localStorage.
- *Sharing Functionality*:
  - Copy article links to the clipboard.
  - Share article previews with thumbnail and excerpt.
  - Notifications for successful or failed share actions.

---

## Technology Stack
- *Frontend*: React
- *Navigation*: React Router
- *Styling*: CSS Modules
- *Persistence*: LocalStorage
- *Rich Text Editing*: Draft.js library
