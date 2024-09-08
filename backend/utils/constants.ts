import type { CookieOptions } from 'express';
import type { Document } from '../types';

/*const COOKIE_CONFIG: CookieOptions = {
  httpOnly: true,
  domain: process.env.FRONT_DOMAIN,
  secure: process.env.NODE_ENV == 'production' ? true : false,
  sameSite: 'lax',
};*/
const COOKIE_CONFIG: CookieOptions = {
  httpOnly: true,
  domain: process.env.NODE_ENV == 'production' ? process.env.FRONT_DOMAIN : undefined,
  secure: process.env.NODE_ENV == 'production' ? true : false,
  sameSite: 'lax',
};

const MIME_TYPES_IMAGE = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/webp': 'webp',
  'image/svg+xml': 'svg',
};
const OTHER_MIME_TYPES = {
  'application/pdf': 'pdf',
  // doc, docx, xls, xlsx, ppt, pptx
  'application/msword': 'doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
  'application/vnd.ms-excel': 'xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
  'application/vnd.ms-powerpoint': 'ppt',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
  // txt
  'text/plain': 'txt',
  // zip, tar, rar
  'application/zip': 'zip',
  'application/x-tar': 'tar',
  'application/x-rar-compressed': 'rar',
};
const ACCEPTED_MIME_TYPES = {
  ...MIME_TYPES_IMAGE,
  ...OTHER_MIME_TYPES,
};

const DEFAULT_DOCUMENT: Omit<Document, 'id' | 'author_id' | 'created_timestamp' | 'updated_timestamp'> = {
  name: 'Welcome to Alexandrie!',
  description: 'This is your first document, you can edit it or delete it.',
  tags: 'welcome, first',
  category: undefined,
  parent_id: undefined,
  accessibility: 1,
  content_markdown:
    '# Welcome to Alexandrie ! 🚀\n\n## Formatting options\n\nLorem **ipsum dolor** *sit amet*, consectetur _adipiscing elit_. ==But not sad.==   \n\n### Different content blocks\n\n:::blue Blue\nA blue block\n:::\n:::red Red\nA red block\n:::\n:::green Green\nA green block\n:::\n:::grey Grey\nA grey block\n:::\n:::yellow Yellow\nA yellow block\n:::\n:::turquoise Turquoise\nA turquoise block\n:::\n:::details Details\nA details block\n:::\n\n\n:::no-print\nThis content will not be printed\n:::\n\n:::center\nThis content is centered\n:::\n\n:::definition Red Info\nBlock of content (ex: definition)\n:::\n\n:::property Blue Info\nBlock of content (ex: property)\n:::\n\n:::theorem Turquoise Info\nBlock of content (ex: theorem)\n:::\n\n:::info-u Info without background\nBlock of content (ex: info, tip, note)\n:::\n\n:::warning Warning Info\nBlock of content (ex: warning)\n:::\n\n### Bullet and Numbered Lists:\n\n- Bullet 1\n- Bullet 2\n  - Sub-bullet 2-1\n\n1. Item 1\n1. Item 2\n\n### Markdown Tables\n\n| Column 1  | Column 2  | Column 3 |\n|:----------|:----------|:---------|\n|Item 1     | Item 2    | Item 3   |\n\n### Other formats\n\n$\text{This is a math block: } f(x) = ax^2+bx+c$\n\n```javascript\nconst hello = "Hello world";\n```\n\n> Note: This content is a quote\n>> Nested quote\n\n## Shortcuts\n\n- **Ctrl + S**: Save\n- **Ctrl + P**: Toggle preview\n- **Ctrl + Q**: Switch to document\n- **Ctrl + B**: Bold formatting\n- **Ctrl + I**: Italic formatting\n- **Ctrl + U**: Underline formatting\n- **Ctrl + K**: Insert link\n- **Ctrl + M**: Insert image\n\n## Snippets\n\n- **!m**: Insert a math block (LaTeX)\n- **!def**: Insert a definition block\n- **!thm**: Insert a theorem block\n- **!center**: Center the content\n- **!red**: Insert a red block\n- **!green**: Insert a green block\n- **!blue**: Insert a blue block\n- **!yellow**: Insert a yellow block\n- **!details**: Insert a details block\n',
  content_html:
    '<h1 id="welcome-to-alexandrie-!-%F0%9F%9A%80" tabindex="-1"><a class="header-anchor" href="#welcome-to-alexandrie-!-%F0%9F%9A%80" aria-hidden="true">#</a> Welcome to Alexandrie ! 🚀</h1>\n<h2 id="formatting-options" tabindex="-1"><a class="header-anchor" href="#formatting-options" aria-hidden="true">#</a> Formatting options</h2>\n<p>Lorem <strong>ipsum dolor</strong> <em>sit amet</em>, consectetur <u>adipiscing elit</u>. <mark>But not sad.</mark></p>\n<h3 id="different-content-blocks" tabindex="-1"><a class="header-anchor" href="#different-content-blocks" aria-hidden="true">#</a> Different content blocks</h3>\n<div class="blue custom-block"><p class="custom-block-title">Blue</p>\n<p>A blue block</p>\n</div>\n<div class="red custom-block"><p class="custom-block-title">Red</p>\n<p>A red block</p>\n</div>\n<div class="green custom-block"><p class="custom-block-title">Green</p>\n<p>A green block</p>\n</div>\n<div class="grey custom-block"><p class="custom-block-title">Grey</p>\n<p>A grey block</p>\n</div>\n<div class="yellow custom-block"><p class="custom-block-title">Yellow</p>\n<p>A yellow block</p>\n</div>\n<div class="turquoise custom-block"><p class="custom-block-title">Turquoise</p>\n<p>A turquoise block</p>\n</div>\n<details class="details custom-block no-print"><summary>Details</summary>\n<p>A details block</p>\n</details>\n<div class="no-print">\n<p>This content will not be printed</p>\n</div>\n<div class="center">\n<p>This content is centered</p>\n</div>\n<div class="markdown-container">\n		<strong style="display: inline-flex; align-items: baseline;" class="red title">\n			<svg style="align-self: center;" class="svg-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"> <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path></svg>Red Info</strong><p>Block of content (ex: definition)</p>\n</div>\n<div class="markdown-container">\n		<strong style="display: inline-flex; align-items: baseline;" class="blue title">\n			<svg style="align-self: center;" class="svg-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"> <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path></svg>Blue Info</strong><p>Block of content (ex: property)</p>\n</div>\n<div class="markdown-container">\n		<strong style="display: inline-flex; align-items: baseline;" class="turquoise title">\n			<svg style="align-self: center;" class="svg-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"> <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path></svg>Turquoise Info</strong><p>Block of content (ex: theorem)</p>\n</div>\n<div class="markdown-container">\n		<strong style="display: inline-flex; align-items: baseline;" class="u title">\n			<svg style="align-self: center;" class="svg-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"> <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path></svg>Info without background</strong><p>Block of content (ex: info, tip, note)</p>\n</div>\n<div class="markdown-container">\n		<strong style="display: inline-flex; align-items: baseline;" class="yellow title">\n			<svg style="align-self: center;" class="svg-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"> <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"> </path> </svg>Warning Info</strong><p>Block of content (ex: warning)</p>\n</div>\n<h3 id="bullet-and-numbered-lists%3A" tabindex="-1"><a class="header-anchor" href="#bullet-and-numbered-lists%3A" aria-hidden="true">#</a> Bullet and Numbered Lists:</h3>\n<ul>\n<li>Bullet 1</li>\n<li>Bullet 2\n<ul>\n<li>Sub-bullet 2-1</li>\n</ul>\n</li>\n</ul>\n<ol>\n<li>Item 1</li>\n<li>Item 2</li>\n</ol>\n<h3 id="markdown-tables" tabindex="-1"><a class="header-anchor" href="#markdown-tables" aria-hidden="true">#</a> Markdown Tables</h3>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">Column 1</th>\n<th style="text-align:left">Column 2</th>\n<th style="text-align:left">Column 3</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left">Item 1</td>\n<td style="text-align:left">Item 2</td>\n<td style="text-align:left">Item 3</td>\n</tr>\n</tbody>\n</table>\n<h3 id="other-formats" tabindex="-1"><a class="header-anchor" href="#other-formats" aria-hidden="true">#</a> Other formats</h3>\n<p><span class="katex-container"><i><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>This&nbsp;is&nbsp;a&nbsp;math&nbsp;block:&nbsp;</mtext><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi></mrow><annotation encoding="application/x-tex">\text{This is a math block: } f(x) = ax^2+bx+c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">This&nbsp;is&nbsp;a&nbsp;math&nbsp;block:&nbsp;</span></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.9474em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">b</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">c</span></span></span></span></span></i></span></p>\n<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> hello = <span class="hljs-string">"Hello world"</span>;\n</code></pre>\n<blockquote>\n<p>Note: This content is a quote</p>\n<blockquote>\n<p>Nested quote</p>\n</blockquote>\n</blockquote>\n<h2 id="shortcuts" tabindex="-1"><a class="header-anchor" href="#shortcuts" aria-hidden="true">#</a> Shortcuts</h2>\n<ul>\n<li><strong>Ctrl + S</strong>: Save</li>\n<li><strong>Ctrl + P</strong>: Toggle preview</li>\n<li><strong>Ctrl + Q</strong>: Switch to document</li>\n<li><strong>Ctrl + B</strong>: Bold formatting</li>\n<li><strong>Ctrl + I</strong>: Italic formatting</li>\n<li><strong>Ctrl + U</strong>: Underline formatting</li>\n<li><strong>Ctrl + K</strong>: Insert link</li>\n<li><strong>Ctrl + M</strong>: Insert image</li>\n</ul>\n<h2 id="snippets" tabindex="-1"><a class="header-anchor" href="#snippets" aria-hidden="true">#</a> Snippets</h2>\n<ul>\n<li><strong>!m</strong>: Insert a math block (LaTeX)</li>\n<li><strong>!def</strong>: Insert a definition block</li>\n<li><strong>!thm</strong>: Insert a theorem block</li>\n<li><strong>!center</strong>: Center the content</li>\n<li><strong>!red</strong>: Insert a red block</li>\n<li><strong>!green</strong>: Insert a green block</li>\n<li><strong>!blue</strong>: Insert a blue block</li>\n<li><strong>!yellow</strong>: Insert a yellow block</li>\n<li><strong>!details</strong>: Insert a details block</li>\n</ul>',
};

export { MIME_TYPES_IMAGE, OTHER_MIME_TYPES, ACCEPTED_MIME_TYPES, COOKIE_CONFIG, DEFAULT_DOCUMENT };
