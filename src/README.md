# Tosin Adeoyo — CV site

React + Vite + Tailwind v4. Run with `npm run dev`, build with `npm run build`.

## Where things live

```
src/
  App.jsx               page order: one line per section
  data.js               ALL the text: jobs, skills, interests, contact
  index.css             colours (light + dark), fonts, animations
  hooks/
    useTheme.js         light/dark logic, remembers the visitor's choice
  components/
    sections/           one file per section of the page
      Hero  Ticker  Profile  Arcs  Shelves  OffTheClock  Credits  Contact
    ui/                 small reusable pieces
      Reveal            drop-in animation on scroll
      Redact            black bar that reveals text
      SectionHeading    big outlined comic heading + note
      ArcCard           one job card
      Shelf             one row of book spines
      InterestCard      one "Off the clock" card
      StatCard  Slots  Equaliser  ThemeToggle  CopyButton
```

## Common changes

| I want to...                     | Edit                                              |
| -------------------------------- | ------------------------------------------------- |
| Change any wording or add a job  | `src/data.js`                                     |
| Fill in my anime/books/music     | `interests` in `src/data.js`                      |
| Change the profile paragraph     | `components/sections/Profile.jsx`                 |
| Change a colour                  | `:root` in `src/index.css` (dark values below it) |
| Change or add an animation       | `@keyframes` at the bottom of `src/index.css`     |
| Reorder or remove a section      | `src/App.jsx`                                     |
| Add a new section                | new file in `sections/`, then add it to `App.jsx` |

## Styling rules of thumb

- Layout and spacing use Tailwind classes in the JSX.
- Colours are Tailwind classes backed by CSS variables: `bg-pink`, `text-note`, `border-line`.
- Custom looks that Tailwind can't express (`panel`, `sfx`, `spine`, `redact`...) are plain classes in `index.css`.