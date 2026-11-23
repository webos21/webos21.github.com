# webos21 — CRT, CRT-CLI & crt-vscode

[CRT](https://github.com/webos21/crt) 네이티브 C/C++ 런타임과
[CRT-CLI](https://github.com/webos21/crt-cli) 개발 도구,
개발 중인 VS Code 확장 [crt-vscode](https://github.com/webos21/crt-vscode)를 소개하는 GitHub Pages 사이트입니다.

- 한국어·영어 전환, 모바일 반응형 레이아웃, CLI 명령 복사를 제공합니다.
- 기존 블로그 글과 URL을 보존하며 `/archive/`에서 글 목록을 볼 수 있습니다.
- 홈페이지의 콘텐츠는 JavaScript 없이도 표시됩니다.

Ruby와 Bundler를 설치한 뒤 실행하세요.

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

로컬 미리보기: <http://127.0.0.1:4000>

빌드 검증: `bundle exec jekyll build --strict_front_matter`

홈페이지 내용은 `index.html`, 스타일은 `assets/css/landing.css`,
영어 번역과 상호작용은 `assets/js/landing.js`에서 수정합니다.
배포는 기존 GitHub Pages 설정을 사용합니다.
