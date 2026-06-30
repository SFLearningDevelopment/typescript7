/* build: 2026063001 */
/* ============================================================================
   SF KNOWLEDGE HUB — TypeScript 7 — CERTIFICATION QUESTION BANK
   Exposes window.QUESTION_BANK, consumed by certification-test.html.
   Each question: { id, module, stem, options:{A,B,C[,D]}, correct }.
   45 questions total: 30 drawn from the five module quizzes (m1..m5, 6 each)
   + 15 exam-only synthesis/scenario questions (xS*).
   The exam samples 30 at random per attempt.
   courseId: Nr2nA1nxBRaFA4fwzA36
   ============================================================================ */
window.QUESTION_BANK = [

  /* ===== MODULE 1 — Why TypeScript 7 Exists ============================== */
  { id:'m1q1', module:'Module 1', stem:'What is the primary change introduced by TypeScript 7?',
    options:{ A:'The compiler and tooling were rebuilt as native code (ported to Go) for roughly 10× faster builds, while type-checking behaviour is preserved.', B:'A large set of new type-system features and syntax were added to the language.', C:'TypeScript stopped compiling to JavaScript and now runs its own bytecode at runtime.' }, correct:'A' },
  { id:'m1q2', module:'Module 1', stem:'The team describes the effort as a "port, not a rewrite." Why does that distinction matter?',
    options:{ A:'It means the editor extension is optional and you only get speed in CI.', B:'Because the type-checking logic was kept structurally identical, a project that checks cleanly under 6.0 should produce the same results under 7.0.', C:'It means your existing TypeScript source must be manually rewritten in Go.' }, correct:'B' },
  { id:'m1q3', module:'Module 1', stem:'Why does a faster compiler improve the editing experience, not just CI build times?',
    options:{ A:'The editor uses a separate, unrelated engine that was sped up independently.', B:'Faster CI indirectly frees up the editor by reducing background network traffic.', C:'The same type-checker that builds your code also powers editor features like hover, go-to-definition, and error reporting, so speeding it up speeds up both.' }, correct:'C' },
  { id:'m1q4', module:'Module 1', stem:'During the preview period, which npm package provides the native TypeScript 7 compiler?',
    options:{ A:'@typescript/native-preview', B:'typescript@7-next', C:'typescript-go' }, correct:'A' },
  { id:'m1q5', module:'Module 1', stem:'You installed a native-preview build and tsc is not found. What is the most likely explanation?',
    options:{ A:'The package failed to install and must be reinstalled globally only.', B:'On pre-RC preview builds the binary is named tsgo; the tsc name applies to the 7.0 RC and later.', C:'The native compiler has no command-line binary and runs only inside VS Code.' }, correct:'B' },
  { id:'m1q6', module:'Module 1', stem:'Why can the native preview and classic TypeScript 6.0 compiler be installed in the same project at once?',
    options:{ A:'They share the same binary, so only one is ever really installed.', B:'npm automatically uninstalls 6.0 when the preview is added.', C:'The preview ships under a separate package name (@typescript/native-preview), so it does not collide with an existing typescript install — supporting side-by-side validation.' }, correct:'C' },

  /* ===== MODULE 2 — Performance & Parallelism ============================ */
  { id:'m2q1', module:'Module 2', stem:'Roughly how is TypeScript 7\u2019s ~10× speed-up split?',
    options:{ A:'Entirely from parallelism; native code makes no difference.', B:'About half from native code execution (no JS-runtime/JIT overhead) and about half from parallelism.', C:'Entirely from caching results between runs.' }, correct:'B' },
  { id:'m2q2', module:'Module 2', stem:'What does the --checkers flag control, and what is its default?',
    options:{ A:'The number of parallel type-checking workers; default 4.', B:'The number of files checked per second; default 1000.', C:'Whether to emit declaration files; default off.' }, correct:'A' },
  { id:'m2q3', module:'Module 2', stem:'Why can raising --checkers stop helping — or even slow things down — on some machines?',
    options:{ A:'The compiler caps useful workers at 2 regardless of hardware.', B:'More workers add coordination cost and memory use; beyond your core count or memory budget the overhead outweighs the gain.', C:'Extra workers disable native-code execution.' }, correct:'B' },
  { id:'m2q4', module:'Module 2', stem:'How do --builders and --checkers interact?',
    options:{ A:'They are mutually exclusive — setting one disables the other.', B:'They multiply: each builder spins up its own checkers, so --checkers 4 --builders 4 can run up to 16 type-checkers at once.', C:'They add: --checkers 4 --builders 4 gives exactly 8 type-checkers.' }, correct:'B' },
  { id:'m2q5', module:'Module 2', stem:'When is --singleThreaded the right tool?',
    options:{ A:'For everyday builds, because it is always the fastest mode.', B:'For debugging, comparing 6.0 vs 7.0 fairly, orchestrating parallelism externally, or running where memory is very limited.', C:'Only when emitting declaration files.' }, correct:'B' },
  { id:'m2q6', module:'Module 2', stem:'When benchmarking the two compilers, why discard the first run and compare later runs?',
    options:{ A:'The first run is always wrong and must be deleted.', B:'The first run reads files from disk (cold cache); later runs hit the warm in-memory cache, so warm-vs-warm is the fair comparison.', C:'The compiler refuses to parallelise on the first run.' }, correct:'B' },

  /* ===== MODULE 3 — Breaking Changes & New Defaults ===================== */
  { id:'m3q1', module:'Module 3', stem:'What happens in 7.0 to flags and behaviours that 6.0 had merely deprecated?',
    options:{ A:'They are restored to their original behaviour.', B:'They become hard errors that stop the build.', C:'They continue to emit warnings, exactly as in 6.0.' }, correct:'B' },
  { id:'m3q2', module:'Module 3', stem:'Which two default changes does the team call out as most likely to surprise you?',
    options:{ A:'rootDir and types.', B:'strict and outDir.', C:'noEmit and incremental.' }, correct:'A' },
  { id:'m3q3', module:'Module 3', stem:'Your project never set "strict" and now shows many type errors under 7.0. Why?',
    options:{ A:'strict is now on by default, so previously-tolerated shortcuts (implicit any, unchecked null) are flagged.', B:'7.0 changed the type-checking algorithm, producing new and different results.', C:'The native compiler cannot read an existing tsconfig.json.' }, correct:'A' },
  { id:'m3q4', module:'Module 3', stem:'What is the status of "ignoreDeprecations": "6.0" in TypeScript 7.0?',
    options:{ A:'It works permanently and is the recommended long-term fix.', B:'It no longer works — the deprecated behaviours are removed, so there is nothing left to silence.', C:'It now also disables strict mode.' }, correct:'B' },
  { id:'m3q5', module:'Module 3', stem:'What is the precise "clean and honest build" test for 7.0-readiness?',
    options:{ A:'The project builds under any TypeScript 5.x version without warnings.', B:'The project compiles cleanly under 6.0 with stableTypeOrdering enabled and ignoreDeprecations not set — it should then produce identical results under 7.0.', C:'The project has zero dependencies.' }, correct:'B' },
  { id:'m3q6', module:'Module 3', stem:'Why does the team recommend doing the cleanup under 6.0 before jumping to 7.0?',
    options:{ A:'6.0 is faster than 7.0, so the work completes sooner.', B:'6.0 still gives warnings, the ignoreDeprecations valve, and migration tooling (ts5to6) — a gentler environment than 7.0, where the same issues are hard errors.', C:'7.0 cannot read a tsconfig.json that was written for 6.0.' }, correct:'B' },

  /* ===== MODULE 4 — Packaging, Tooling & Coexistence =================== */
  { id:'m4q1', module:'Module 4', stem:'Where does the native compiler live during the preview, and where does it go at stable release?',
    options:{ A:'It stays permanently in @typescript/native-preview; the typescript package is retired.', B:'In the preview it is @typescript/native-preview; at stable release it takes over the regular typescript package and the tsc command.', C:'It is only ever distributed inside the VS Code extension.' }, correct:'B' },
  { id:'m4q2', module:'Module 4', stem:'What does the @typescript/typescript6 compatibility package provide?',
    options:{ A:'A faster build of the 7.0 compiler.', B:'A re-export of the stable TypeScript 6.0 API plus a tsc6 executable, so 6.0\u2019s API stays available alongside 7.0\u2019s tsc.', C:'A linter that replaces typescript-eslint.' }, correct:'B' },
  { id:'m4q3', module:'Module 4', stem:'Why is the compat package necessary right now rather than pointing tooling at the new compiler\u2019s API?',
    options:{ A:'The new compiler has no command-line interface yet.', B:'TypeScript 7.0 does not ship a stable programmatic API; that is targeted for 7.1, so tools like typescript-eslint still need the 6.0 API.', C:'npm cannot install two packages at once.' }, correct:'B' },
  { id:'m4q4', module:'Module 4', stem:'You add only "typescript": "npm:@typescript/typescript6@^6.0.0" to devDependencies. What is the catch?',
    options:{ A:'Nothing — this fully sets up both 6.0 and 7.0.', B:'You are left with only a tsc6 executable; you must add a second alias (e.g. typescript-7) to get 7.0\u2019s tsc back.', C:'It uninstalls ESLint.' }, correct:'B' },
  { id:'m4q5', module:'Module 4', stem:'What does an npm alias like "typescript": "npm:@typescript/typescript6@^6.0.0" accomplish?',
    options:{ A:'It installs the compat package but makes it resolvable under the name typescript, so tools importing typescript transparently get the 6.0 API.', B:'It renames your project to "typescript".', C:'It deletes the real typescript package globally.' }, correct:'A' },
  { id:'m4q6', module:'Module 4', stem:'A dependency quietly pulls in a second copy of typescript and you get contradictory errors. Good first diagnostic?',
    options:{ A:'Reinstall the operating system.', B:'Run npm ls typescript to see every copy and which dependency required it, then dedupe or reinstall cleanly.', C:'Delete the tsconfig.json.' }, correct:'B' },

  /* ===== MODULE 5 — Editor / Language Service & Rollout ================ */
  { id:'m5q1', module:'Module 5', stem:'What is the "language service," and why does the native port speed it up?',
    options:{ A:'A separate cloud service; it is faster because of better servers.', B:'The part of TypeScript powering editor features (completions, hover, go-to-definition); it runs on the same fast native foundation as the compiler.', C:'A linter bundled with VS Code, unrelated to the compiler.' }, correct:'B' },
  { id:'m5q2', module:'Module 5', stem:'What protocol does the TypeScript 7 editor integration use, and why does it matter?',
    options:{ A:'The custom TSServer protocol, locking it to VS Code.', B:'The Language Server Protocol (LSP), so the same language service can drive most modern editors, not just VS Code.', C:'HTTP REST, requiring a network connection to work.' }, correct:'B' },
  { id:'m5q3', module:'Module 5', stem:'Which statement best describes editor feature parity in the native preview?',
    options:{ A:'Nothing works yet; the editor experience is purely experimental.', B:'Core features (completions, hover, go-to-definition, find-all-references, rename, auto-imports) work for daily use; a few niceties and old server plugins are still catching up.', C:'It is fully identical to the old extension with no differences at all.' }, correct:'B' },
  { id:'m5q4', module:'Module 5', stem:'Why is CI the recommended first place to pilot TypeScript 7?',
    options:{ A:'CI is the only place the native compiler can run.', B:'An added, non-blocking 7.0 type-check job runs on real code continuously, in an isolated and reproducible environment, with zero risk to what ships.', C:'CI automatically rewrites your code to be 7.0-compatible.' }, correct:'B' },
  { id:'m5q5', module:'Module 5', stem:'What is the guiding principle for sequencing a TypeScript 7 rollout?',
    options:{ A:'Switch production emit first, since it is the most important.', B:'Adopt reversible, low-stakes things first (editor, informational CI type-check); gate production emit on stable GA and your tests passing.', C:'Flip the entire monorepo at once to avoid partial states.' }, correct:'B' },
  { id:'m5q6', module:'Module 5', stem:'In a monorepo, what is the recommended adoption order?',
    options:{ A:'Start with the most depended-upon core project so everything inherits it immediately.', B:'Adopt leaf projects (few dependents) first, watch them through a release cycle, then move up the dependency graph.', C:'Order does not matter; convert projects alphabetically.' }, correct:'B' },

  /* ===== EXAM-ONLY — synthesis / scenario (xS1..xS15) ================== */
  { id:'xS1', module:'Synthesis', stem:'After upgrading, your monorepo build is slow AND your linter throws "incompatible TypeScript version." Which combination addresses both?',
    options:{ A:'Tune --builders/--checkers for the slow build, and alias typescript to @typescript/typescript6 so the linter gets the 6.0 API.', B:'Disable strict mode and delete node_modules.', C:'Switch the linter off and run --singleThreaded.' }, correct:'A' },
  { id:'xS2', module:'Synthesis', stem:'A teammate says "TypeScript 7 gave me a different result than 6.0 on the same file." What is the most likely real explanation?',
    options:{ A:'7.0 reimplemented type-checking, so divergence is expected.', B:'Their 6.0 build was not "clean and honest" — e.g. relying on a changed default or a deprecated flag — so the difference traces to config, not the checker.', C:'The native compiler randomly varies its output each run.' }, correct:'B' },
  { id:'xS3', module:'Synthesis', stem:'You want the fastest safe win from TypeScript 7 this week, with zero risk to production. What do you adopt first?',
    options:{ A:'Switch production JavaScript emit to 7.0 immediately.', B:'The editor (native preview extension) and a non-blocking 7.0 type-check job in CI.', C:'Rewrite all tsconfig files to remove every explicit setting.' }, correct:'B' },
  { id:'xS4', module:'Synthesis', stem:'Your CI runner has only 2 cores and the 7.0 job is slower than expected. Best first adjustment?',
    options:{ A:'Raise --checkers to 16 to force more parallelism.', B:'Lower --checkers (e.g. to 2) to match the core count and cut coordination overhead.', C:'Add --builders 8 to compensate.' }, correct:'B' },
  { id:'xS5', module:'Synthesis', stem:'A project relies on auto-loaded @types globals and now shows "cannot find name" errors under 7.0. Root cause and fix?',
    options:{ A:'strict mode; set strict:false.', B:'types now defaults to [] (no auto-load); list the global @types you depend on, e.g. "types": ["node"].', C:'The compiler is broken; reinstall Node.' }, correct:'B' },
  { id:'xS6', module:'Synthesis', stem:'You need byte-for-byte identical type-check results across every CI machine. Which setting most directly helps?',
    options:{ A:'Fix --checkers to the same number across all environments (varying it can surface order-dependent results).', B:'Always use --builders 1.', C:'Enable --watch everywhere.' }, correct:'A' },
  { id:'xS7', module:'Synthesis', stem:'Which sequence reflects the recommended migration path end-to-end?',
    options:{ A:'Jump straight to 7.0, fix every hard error at once, then ship emit immediately.', B:'Clean the 6.0 build honestly → adopt 7.0 for editor + CI type-check → validate side-by-side → flip the type-check default → gate production emit on stable GA.', C:'Switch emit first, then worry about type-checking later.' }, correct:'B' },
  { id:'xS8', module:'Synthesis', stem:'During the preview you need production declaration (.d.ts) emit, which may be incomplete in the native compiler. Pragmatic approach?',
    options:{ A:'Abandon TypeScript 7 entirely.', B:'Type-check with 7.0 for speed, but keep 6.0 (tsc6) for the production emit that touches the incomplete features until stable.', C:'Force declaration emit with --singleThreaded.' }, correct:'B' },
  { id:'xS9', module:'Synthesis', stem:'Why does running Node directly on a .ts file (type stripping) NOT replace the TypeScript 7 compiler in your pipeline?',
    options:{ A:'It does replace it; the compiler is redundant.', B:'Type stripping erases types and runs the code without checking them, so it never reports type errors — the compiler is what verifies types.', C:'Node can only strip types from JavaScript, not TypeScript.' }, correct:'B' },
  { id:'xS10', module:'Synthesis', stem:'A tool in your stack imports the typescript package directly and breaks under 7.0. What property of that tool explains why, and what fixes it?',
    options:{ A:'It peer-depends on typescript; alias that name to the 6.0 compat package so the tool gets the stable API.', B:'It is written in Go; recompile it.', C:'It needs --checkers raised.' }, correct:'A' },
  { id:'xS11', module:'Synthesis', stem:'You benchmark a small project and see only ~3× speed-up, not 10×. What is the correct interpretation?',
    options:{ A:'The install is broken; 10× is guaranteed.', B:'Normal — the headline figure came from a very large codebase; smaller projects have less to parallelise and proportionally more fixed overhead.', C:'You must enable --builders to reach 10×.' }, correct:'B' },
  { id:'xS12', module:'Synthesis', stem:'Which pair correctly matches a TypeScript 7 control to its purpose?',
    options:{ A:'--checkers → declaration emit; --builders → linting.', B:'--checkers → number of type-checking workers; --builders → number of project-reference builds run in parallel.', C:'--checkers → watch mode; --builders → target version.' }, correct:'B' },
  { id:'xS13', module:'Synthesis', stem:'An old TypeScript server plugin stops working once the native preview extension is enabled. How should you read this?',
    options:{ A:'A critical bug; downgrade immediately.', B:'Expected — the native port uses LSP rather than the old TSServer protocol, so plugins tied to the old protocol do not load.', C:'The plugin was uninstalled by npm.' }, correct:'B' },
  { id:'xS14', module:'Synthesis', stem:'You changed package.json aliases but the old TypeScript version still resolves. Most reliable reset?',
    options:{ A:'Restart the computer.', B:'Delete node_modules and package-lock.json, then npm install, so the tree resolves fresh against the new aliases.', C:'Run tsc --noEmit twice.' }, correct:'B' },
  { id:'xS15', module:'Synthesis', stem:'A team lead asks for one number and one risk statement to decide on TypeScript 7. What best reflects the course\u2019s guidance?',
    options:{ A:'"It is 10× faster everywhere and has no risk."', B:'"Our measured speed-up is N× (from our own benchmark); we can adopt editor + CI type-check now reversibly, and gate production emit on stable GA and our test suite."', C:'"We should rewrite the codebase in Go."' }, correct:'B' }

];
