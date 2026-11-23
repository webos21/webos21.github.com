(() => {
  'use strict';

  // Korean copy is in the HTML so the complete page also works without JavaScript.
  const english = {
    'skip': 'Skip to content',
    'nav.projects': 'Projects',
    'nav.stack': 'The stack',
    'nav.start': 'Get started',
    'hero.lead': 'From embedded to desktop.\nOne C/C++ codebase.',
    'hero.description': 'Build native applications for Linux, Windows, and macOS with CRT and CRT-CLI. The crt-vscode extension brings this workflow to VS Code and is in early development.',
    'hero.cta': 'Start building',
    'hero.explore': 'Explore the projects',
    'hero.note': 'Dev SDK and CLI Previews available · VS Code extension in development',
    'hero.diagram': 'Rebuilt as a native executable for each host',
    'principle.1': 'Embedded Linux first',
    'principle.2': 'Native builds per host',
    'principle.3': 'Built on Clang / LLVM',
    'principle.4': 'Developed in the open',
    'projects.title': 'Explore the CRT projects',
    'projects.description': 'The runtime and SDK, the build tools,\nand the VS Code extension.',
    'crt.tagline': 'Keep your app native.\nLet the runtime bridge the platforms.',
    'crt.description': 'A native application stack built on a Bionic-compatible C/C++ runtime and platform abstraction layer, extending into graphics, media, networking, and application UI.',
    'crt.feature1': 'Native Linux, Windows, and macOS hosts',
    'crt.feature2': 'Skia graphics with Vulkan · D3D12 · Metal',
    'crt.feature3': 'Media, application UI, and optional Web embedding',
    'crt.fingerprint': 'Release signing public key fingerprint',
    'crt.fingerprintGuide': 'Public key & verification guide ↗',
    'cli.tagline': 'From SDK selection to execution.\nA workflow built for your terminal.',
    'cli.description': 'A native development-environment manager for CRT applications. Connect SDK installation, project creation, builds, tests, and execution through one CLI.',
    'cli.feature1': 'SDK installation and verification with exact pins',
    'cli.feature2': 'crt.json projects and direct LLVM invocation',
    'cli.feature3': 'A build → test → run development workflow',
    'editor.label': 'VS CODE EXTENSION',
    'editor.tagline': 'Open and develop CRT projects in VS Code.',
    'editor.description': 'A TypeScript extension for CRT C/C++ development. Its VS Code commands and tasks call crt-cli.',
    'editor.feature1': 'crt.json workspaces and CRT tasks',
    'editor.feature2': 'Build, Test, Run, and Doctor command definitions',
    'editor.feature3': 'clangd integration and extension distribution are planned',
    'editor.status': 'Early development · Try version 0.0.1 from source',
    'editor.source': 'Try from source',
    'common.repository': 'View on GitHub',
    'common.docs': 'Read the docs',
    'architecture.title': 'From runtime to pixels.\nOne connected stack.',
    'architecture.description': 'Build on a shared C/C++ foundation and add the layers you need. Develop and run the code for your embedded Linux product on native desktop hosts.',
    'architecture.link': 'Architecture & roadmap',
    'architecture.scope': 'The public Dev SDK Previews cover C/C++ development. Check the layer-specific documentation for graphics, media, UI, and Web support and distribution status.',
    'architecture.status': 'Current implementation status ↗',
    'architecture.optional': 'Web optional',
    'architecture.footnote': 'Architecture overview · Layer support varies by host and device.',
    'workflow.title': 'From an idea to its first run.',
    'workflow.description': 'An explicit, reproducible workflow.\nRight in your familiar terminal.',
    'workflow.step1.title': 'Prepare your environment',
    'workflow.step1.description': 'Choose your host CLI and Dev SDK, and set up the external LLVM tools.',
    'workflow.step2.title': 'Create and build',
    'workflow.step2.description': 'Create a C/C++ project. Select your SDK and tool paths for the first build.',
    'workflow.step3.title': 'Test, run, repeat',
    'workflow.step3.description': 'Continue building, testing, and running with the pinned SDK and tool configuration.',
    'workflow.copy': 'Copy commands',
    'workflow.codeNote': '# After SDK installation · substitute real LLVM paths',
    'workflow.note': 'Illustrative workflow. See the getting-started guides for SDK installation and OS-specific prerequisites.',
    'workflow.editor.title': 'Try it in VS Code',
    'workflow.editor.description': 'Set up the CLI and Dev SDK first. Open a trusted CRT project in the Extension Development Host and set crt.cliPath to the absolute path of your CLI. Verification of the real CLI task workflow is pending.',
    'workflow.editor.link': 'Extension development guide',
    'usecases.title': 'Small devices.\nBigger possibilities.',
    'usecases.hmi': 'Industrial HMI',
    'usecases.hmiText': 'Control panel and dashboard prototypes',
    'usecases.media': 'Media & displays',
    'usecases.mediaText': 'Streaming clients and STB / TV interfaces',
    'usecases.native': 'Native visualization',
    'usecases.nativeText': 'GPU experiments and desktop development tools',
    'start.title': 'Your next native project\nstarts here.',
    'start.description': 'Choose a host Preview and installation guide.\nThe CLI and Dev SDK are provided separately.',
    'start.linux': 'Requires LLVM 21',
    'start.windows': 'Requires LLVM + Windows SDK',
    'start.macos': 'Requires Xcode Command Line Tools',
    'start.download': 'Choose a CLI Preview',
    'start.sdk': 'Dev SDK installation guide',
    'start.workflow': 'Your first CLI project',
    'start.note': 'Public Dev SDK and CLI Preview archives have detached publisher signatures. Verify the archive digest and signature before installing, and set up the tools required by your host.',
    'start.signing': 'Publisher key and verification guide',
    'contribute.title': 'A native ecosystem. Built together.',
    'contribute.description': 'Explore the code, try it on your machine, and share what you discover.',
    'contribute.link': 'Join us on GitHub',
    'footer.archive': 'Blog archive',
    'footer.top': 'Back to top ↑'
  };
  const elements = [...document.querySelectorAll('[data-i18n]')];
  const korean = new Map(elements.map(element => [element, element.innerHTML]));
  const languageButtons = document.querySelectorAll('[data-language]');
  const status = document.querySelector('.copy-status');
  let language = 'ko';

  function setLanguage(next) {
    if (next !== 'en' && next !== 'ko') return;
    language = next;
    document.documentElement.lang = next;
    elements.forEach(element => {
      if (next === 'ko') {
        element.innerHTML = korean.get(element);
      } else {
        const text = english[element.dataset.i18n];
        if (text === undefined) return;
        // Translation values are plain text; only explicit newlines become breaks.
        element.replaceChildren(...text.split('\n').flatMap((line, index) =>
          index === 0 ? [document.createTextNode(line)] : [document.createElement('br'), document.createTextNode(line)]
        ));
      }
    });
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
    status.textContent = '';
    try { localStorage.setItem('webos21-language', next); } catch (_) { /* Storage can be disabled. */ }
  }

  let savedLanguage;
  try { savedLanguage = localStorage.getItem('webos21-language'); } catch (_) { /* Use the default. */ }
  if (savedLanguage === 'en') setLanguage('en');
  document.querySelector('.language-switch').hidden = false;
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));

  const copyButton = document.querySelector('.copy-button');
  if (navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(document.querySelector('#workflow-code').textContent);
        status.textContent = language === 'ko' ? '명령을 복사했습니다. /path/to/ 경로를 실제 도구 경로로 바꿔주세요.' : 'Commands copied. Replace /path/to/ with your actual tool paths.';
      } catch (_) {
        status.textContent = language === 'ko' ? '복사할 수 없습니다. 코드 영역의 명령을 선택해 복사해주세요.' : 'Clipboard unavailable. Select and copy the commands from the code block.';
      }
    });
  }
})();
