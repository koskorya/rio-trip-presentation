import Reveal from 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/reveal.esm.js';
import Markdown from 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/plugin/markdown/markdown.esm.js';
import Highlight from 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/plugin/highlight/highlight.esm.js';
import Notes from 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/plugin/notes/notes.esm.js';

Reveal.initialize({
    hash: true,
    plugins: [ Markdown, Highlight, Notes ]
});