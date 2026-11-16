# webos21 — CRT & CRT-CLI

The GitHub Pages homepage for [CRT](https://github.com/webos21/crt), a native
C/C++ application runtime, and [CRT-CLI](https://github.com/webos21/crt-cli),
its development-environment manager.

The homepage is a responsive Korean/English landing page. Existing blog posts
and their permalinks are preserved, with the post index at `/archive/`.

## Local preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open <http://127.0.0.1:4000>. To validate the production output:

```sh
bundle exec jekyll build --strict_front_matter
```

## Editing

- `index.html`: page content, Korean defaults, metadata, and project links.
- `assets/css/landing.css`: standalone responsive homepage styles.
- `assets/js/landing.js`: English translations, language preference, and command copying.
- `_config.yml`: GitHub Pages URL and shared Jekyll configuration.
- `_layouts/`, `_includes/`, `_sass/`: the preserved blog/archive theme.

The landing page has no package-manager, CDN, or JavaScript-framework dependency.
Its content and navigation work without JavaScript; language switching and
clipboard copying are progressive enhancements. Korean is the default language.

Publishing follows this repository's GitHub Pages configuration. No separate
Sites hosting or backend is required. Keep Preview scope and prerequisites
aligned with the linked project READMEs and installation guides.
