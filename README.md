# StudyHub 📚

A multi-page CS study resource website built with HTML, CSS, and JavaScript for the AICT course at Air University Islamabad.

---

## 🔗 Live Demo

> Deploy to AwardSpace and paste your link here.  
> Example: `http://studyhub-cs.atwebpages.com/`

---

## 📋 Project Overview

**StudyHub** is a responsive, interactive study resource for Computer Science students. It includes organized notes across 6 subjects, a configurable practice quiz, and a contact/suggestions form.

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, subject overview, recent notes, tips, how-it-works |
| Notes | `notes.html` | All notes with filter by subject, search, sort, and modal detail view |
| Quiz | `quiz.html` | Configurable quiz — choose subject & number of questions |
| Contact | `contact.html` | Contact form with validation + FAQ accordion |

---

## ✨ Features

- **Responsive design** — works on mobile, tablet, and desktop
- **Subject filter + Search** — filter notes by subject, search by keyword
- **Sort** — sort notes A→Z or Z→A
- **Note Detail Modal** — click any note to expand it with full content and code examples
- **Configurable Quiz** — choose subject and question count; shuffled questions; score + review
- **Form Validation** — full client-side validation with error messages
- **FAQ Accordion** — collapsible FAQ on the contact page
- **Animated counters** — on the homepage hero
- **Sticky navbar** — with scroll shadow and active link highlighting
- **Hamburger menu** — for mobile navigation
- **Tip of the Day** — rotating study tips with a button

---

## 🛠️ Technologies Used

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties (variables), Grid, Flexbox, transitions, responsive design
- **JavaScript (ES6)** — DOM manipulation, event handling, array methods (filter, sort, map), localStorage-free architecture

---

## 📁 File Structure

```
studyhub/
├── index.html        # Home page
├── notes.html        # Notes listing with filter & modal
├── quiz.html         # Practice quiz
├── contact.html      # Contact form & FAQ
├── css/
│   └── style.css     # All styles
├── js/
│   ├── data.js       # Notes data + quiz questions
│   └── main.js       # Shared utilities (navbar, renderNoteCard)
└── README.md
```

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/studyhub.git
cd studyhub
# Open index.html in any browser — no build tools needed
```

---

## 🌐 How to Deploy on AwardSpace (Bonus Marks)

1. Sign up free at [awardspace.com](https://www.awardspace.com)
2. Go to **File Manager** → upload all files keeping the folder structure
3. Your site is live instantly at `https://yourdomain.awardspace.com`

---

## 📝 Suggested Git Commit History

```
Initial commit: project folder structure
feat: add shared CSS design system and variables
feat: add shared JS data (notes and quiz questions)
feat: implement home page with hero and subject cards
feat: add notes page with filter, search, sort, and modal
feat: implement quiz page with subject/count selection and scoring
feat: add contact page with form validation and FAQ accordion
fix: responsive navbar hamburger menu
fix: mobile layout for hero and footer
docs: add README with project overview
```

---

## 👤 Author

Member 1: **Ali Hamza**  - Reg no:**2600243** 
Member 2: **Abdullah Bin Ahmed**  - Reg no:**2600267** 
Member 3: **Fahad Aziz**  - Reg no:**2600255** 
Air University Islamabad — Department of Computer Science  
AICT Project · Spring 2026 · Instructor: Tariq Mahmood
