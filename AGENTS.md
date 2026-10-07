<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Define all visual tokens and page treatments in src/styles.css; this keeps official branding consistent across pages.
- Keep official website copy in a shared browser-safe content module and use individual TanStack content routes; this preserves source fidelity and unique page metadata.
- Serve downloaded stock media and the supplied logo through Lovable Assets pointers, with provenance in a media source record; this avoids hotlinking and retains license context.
