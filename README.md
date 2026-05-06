# Vuong Tan Nhac Portfolio

Personal portfolio website for Vuong Tan Nhac, focused on presenting a Senior .NET Developer profile, selected project work, CV-backed technical experience, and contact information.

Live site: https://vuongnhac.github.io/

## Website Direction

This site is designed as a practical developer portfolio rather than a marketing landing page. The main goals are:

- Present the profile clearly as a Senior .NET Developer.
- Highlight enterprise software experience with C#, WPF, ASP.NET Core, SQL Server, EF Core, and Clean Architecture.
- Keep project descriptions public-safe until company names, screenshots, metrics, and demo links are approved.
- Make the CV, GitHub, LinkedIn, and contact channels easy to find.
- Keep content simple to update through `index.html` and `assets/files/profile-data.json`.

## Content Sources

- Main page: `index.html`
- Profile data: `assets/files/profile-data.json`
- CV file: `assets/files/my_cv.pdf`
- Styles entry: `assets/styles/main.css`
- Compiled stylesheet: `assets/styles/main.min.css`

The `Primary Stack` section is based on the current CV and lists hands-on experience by years.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server with CSS watch:

```bash
npm run develop
```

Build CSS for production:

```bash
npm run build
```

For a quick static preview without rebuilding CSS:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8000
```

## Updating Content

Use `assets/files/profile-data.json` for structured profile facts such as contact details, links, skills, and CV-backed experience.

Use `index.html` for layout, section copy, navigation, and visible project showcase content.

When adding project details, prefer verified facts:

- Project or product name safe to publish
- Role and responsibilities
- Tech stack
- Team size
- Timeline
- Screenshots or demo links approved for public use
- Measured outcomes or metrics

## Template Attribution

This portfolio was adapted from the Atom HTML template.

- Original template: https://themewagon.github.io/atom/
- Distributed by ThemeWagon: https://themewagon.com/
- Original design/code by Red Pixel Themes

## License

Original template design and code remain under their respective ThemeWagon / Red Pixel Themes license terms. Portfolio content, CV data, and personal information belong to Vuong Tan Nhac.
