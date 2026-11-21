# Ankush Vishwakarma’s portfolio

The deployable site is in `public/`. It uses plain HTML and CSS, with no build, dependencies, or JavaScript. The two original resumes are private source files outside `public/`. They are excluded from Git.

## Preview locally

Open `public/index.html` in a browser for a quick preview. To test the Resume download, run the following from this folder and visit `http://localhost:8000`.

```sh
python -m http.server 8000 --directory public
```

## Deploy

- **Netlify:** Drag the `public/` folder onto [Netlify Drop](https://app.netlify.com/drop). [Netlify manual deploy guide](https://docs.netlify.com/manage/projects/add-new-project/#use-drag-and-drop-to-publish)
- **Vercel:** Drag the `public/` folder onto [Vercel Drop](https://vercel.com/drop), or import a Git repository containing the project. For Git import, keep the detected **Other** preset and the blank build command. Vercel serves `public/` automatically. [Vercel Drop guide](https://vercel.com/changelog/vercel-drop) · [Vercel build defaults](https://vercel.com/docs/builds/configure-a-build#framework-preset)

## TODOs

- Add a photo.
- Add a Neural ArXiv live demo link.
- After choosing a public site URL and social preview image, add their absolute URLs as `og:url` and `og:image` in `public/index.html`.

The downloadable PDF is resume 2 with the phone number removed. It was chosen for its broader technical skills section.
