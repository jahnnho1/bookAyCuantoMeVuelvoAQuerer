import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_sWy1iNKM.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.</p>\n<h2 id=\"headings\">Headings</h2>\n<p>The following HTML <code>&#x3C;h1></code>—<code>&#x3C;h6></code> elements represent six levels of section headings. <code>&#x3C;h1></code> is the highest section level while <code>&#x3C;h6></code> is the lowest.</p>\n<h1 id=\"h1\">H1</h1>\n<h2 id=\"h2\">H2</h2>\n<h3 id=\"h3\">H3</h3>\n<h4 id=\"h4\">H4</h4>\n<h5 id=\"h5\">H5</h5>\n<h6 id=\"h6\">H6</h6>\n<h2 id=\"paragraph\">Paragraph</h2>\n<p>Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.</p>\n<p>Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.</p>\n<h2 id=\"images\">Images</h2>\n<h4 id=\"syntax\">Syntax</h4>\n<pre class=\"astro-code github-dark mockup-code\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">![</span><span style=\"color:#DBEDFF;text-decoration:underline\">Alt text</span><span style=\"color:#E1E4E8\">](</span><span style=\"color:#E1E4E8;text-decoration:underline\">./full/or/relative/path/of/image</span><span style=\"color:#E1E4E8\">)</span></span>\n<span class=\"line\"></span></code></pre>\n<h4 id=\"output\">Output</h4>\n<p><img src=\"/home.webp\" alt=\"blog placeholder\"></p>\n<h2 id=\"blockquotes\">Blockquotes</h2>\n<p>The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a <code>footer</code> or <code>cite</code> element, and optionally with in-line changes such as annotations and abbreviations.</p>\n<h3 id=\"blockquote-without-attribution\">Blockquote without attribution</h3>\n<h4 id=\"syntax-1\">Syntax</h4>\n<pre class=\"astro-code github-dark mockup-code\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code><span class=\"line\"><span style=\"color:#85E89D\">> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  </span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">> </span><span style=\"color:#E1E4E8;font-weight:bold\">**Note**</span><span style=\"color:#85E89D\"> that you can use </span><span style=\"color:#E1E4E8;font-style:italic\">_Markdown syntax_</span><span style=\"color:#85E89D\"> within a blockquote.</span></span>\n<span class=\"line\"></span></code></pre>\n<h4 id=\"output-1\">Output</h4>\n<blockquote class=\"alert\">\n<p>Tiam, ad mint andaepu dandae nostion secatur sequo quae.<br>\n<strong>Note</strong> that you can use <em>Markdown syntax</em> within a blockquote.</p>\n</blockquote>\n<h3 id=\"blockquote-with-attribution\">Blockquote with attribution</h3>\n<h4 id=\"syntax-2\">Syntax</h4>\n<pre class=\"astro-code github-dark mockup-code\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code><span class=\"line\"><span style=\"color:#85E89D\">> Don't communicate by sharing memory, share memory by communicating.&#x3C;br></span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">> — &#x3C;cite>Rob Pike[</span><span style=\"color:#DBEDFF;text-decoration:underline\">^1</span><span style=\"color:#85E89D\">]&#x3C;/cite></span></span>\n<span class=\"line\"></span></code></pre>\n<h4 id=\"output-2\">Output</h4>\n<blockquote class=\"alert\">\n<p>Don’t communicate by sharing memory, share memory by communicating.<br>\n— <cite>Rob Pike<sup><a href=\"#user-content-fn-1\" id=\"user-content-fnref-1\" data-footnote-ref=\"\" aria-describedby=\"footnote-label\">1</a></sup></cite></p>\n</blockquote>\n<h2 id=\"tables\">Tables</h2>\n<h4 id=\"syntax-3\">Syntax</h4>\n<pre class=\"astro-code github-dark mockup-code\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">| Italics   | Bold     | Code   |</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">| --------- | -------- | ------ |</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">| </span><span style=\"color:#E1E4E8;font-style:italic\">_italics_</span><span style=\"color:#E1E4E8\"> | </span><span style=\"color:#E1E4E8;font-weight:bold\">**bold**</span><span style=\"color:#E1E4E8\"> | </span><span style=\"color:#79B8FF\">`code`</span><span style=\"color:#E1E4E8\"> |</span></span>\n<span class=\"line\"></span></code></pre>\n<h4 id=\"output-3\">Output</h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Italics</th><th>Bold</th><th>Code</th></tr></thead><tbody><tr><td><em>italics</em></td><td><strong>bold</strong></td><td><code>code</code></td></tr></tbody></table>\n<h2 id=\"code-blocks\">Code Blocks</h2>\n<h4 id=\"syntax-4\">Syntax</h4>\n<p>we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash</p>\n<pre class=\"astro-code github-dark mockup-code\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">```cpp</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">#include &#x3C;bits/stdc++.h></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">using namespace std;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">const int N = 1e5 + 5;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">int n, k, a[N];</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">long long ans;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">vector&#x3C;int> v[N];</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">int main()</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">{</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    scanf(\"%d%d\", &#x26;n, &#x26;k);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    for (int i = 1; i &#x3C;= n; i++)</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        scanf(\"%d\", &#x26;a[i]);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        v[i % k].push_back(a[i]);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    for (int i = 0; i &#x3C; k; i++)</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        sort(v[i].rbegin(), v[i].rend());</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    for (int i = 0; i &#x3C; k; i++)</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        for (int j = 0; j + 1 &#x3C; v[i].size(); j += 2)</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            ans += v[i][j] + v[i][j + 1];</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    printf(\"%lld\\n\", ans);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    return 0;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">```</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Output</p>\n<pre class=\"astro-code github-dark mockup-code\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"cpp\"><code><span class=\"line\"><span style=\"color:#F97583\">#include</span><span style=\"color:#9ECBFF\"> &#x3C;bits/stdc++.h></span></span>\n<span class=\"line\"><span style=\"color:#F97583\">using</span><span style=\"color:#F97583\"> namespace</span><span style=\"color:#B392F0\"> std</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">const</span><span style=\"color:#F97583\"> int</span><span style=\"color:#E1E4E8\"> N </span><span style=\"color:#F97583\">=</span><span style=\"color:#79B8FF\"> 1</span><span style=\"color:#F97583\">e</span><span style=\"color:#79B8FF\">5</span><span style=\"color:#F97583\"> +</span><span style=\"color:#79B8FF\"> 5</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">int</span><span style=\"color:#E1E4E8\"> n, k, a[N];</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">long</span><span style=\"color:#F97583\"> long</span><span style=\"color:#E1E4E8\"> ans;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">vector</span><span style=\"color:#F97583\">&#x3C;int></span><span style=\"color:#E1E4E8\"> v[N];</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">int</span><span style=\"color:#B392F0\"> main</span><span style=\"color:#E1E4E8\">()</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">{</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">    scanf</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"</span><span style=\"color:#79B8FF\">%d%d</span><span style=\"color:#9ECBFF\">\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#F97583\">&#x26;</span><span style=\"color:#E1E4E8\">n, </span><span style=\"color:#F97583\">&#x26;</span><span style=\"color:#E1E4E8\">k);</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    for</span><span style=\"color:#E1E4E8\"> (</span><span style=\"color:#F97583\">int</span><span style=\"color:#E1E4E8\"> i </span><span style=\"color:#F97583\">=</span><span style=\"color:#79B8FF\"> 1</span><span style=\"color:#E1E4E8\">; i </span><span style=\"color:#F97583\">&#x3C;=</span><span style=\"color:#E1E4E8\"> n; i</span><span style=\"color:#F97583\">++</span><span style=\"color:#E1E4E8\">)</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    {</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">        scanf</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"</span><span style=\"color:#79B8FF\">%d</span><span style=\"color:#9ECBFF\">\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#F97583\">&#x26;</span><span style=\"color:#E1E4E8\">a[i]);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        v[i </span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\"> k].</span><span style=\"color:#B392F0\">push_back</span><span style=\"color:#E1E4E8\">(a[i]);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    }</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    for</span><span style=\"color:#E1E4E8\"> (</span><span style=\"color:#F97583\">int</span><span style=\"color:#E1E4E8\"> i </span><span style=\"color:#F97583\">=</span><span style=\"color:#79B8FF\"> 0</span><span style=\"color:#E1E4E8\">; i </span><span style=\"color:#F97583\">&#x3C;</span><span style=\"color:#E1E4E8\"> k; i</span><span style=\"color:#F97583\">++</span><span style=\"color:#E1E4E8\">)</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">        sort</span><span style=\"color:#E1E4E8\">(v[i].</span><span style=\"color:#B392F0\">rbegin</span><span style=\"color:#E1E4E8\">(), v[i].</span><span style=\"color:#B392F0\">rend</span><span style=\"color:#E1E4E8\">());</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    for</span><span style=\"color:#E1E4E8\"> (</span><span style=\"color:#F97583\">int</span><span style=\"color:#E1E4E8\"> i </span><span style=\"color:#F97583\">=</span><span style=\"color:#79B8FF\"> 0</span><span style=\"color:#E1E4E8\">; i </span><span style=\"color:#F97583\">&#x3C;</span><span style=\"color:#E1E4E8\"> k; i</span><span style=\"color:#F97583\">++</span><span style=\"color:#E1E4E8\">)</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">        for</span><span style=\"color:#E1E4E8\"> (</span><span style=\"color:#F97583\">int</span><span style=\"color:#E1E4E8\"> j </span><span style=\"color:#F97583\">=</span><span style=\"color:#79B8FF\"> 0</span><span style=\"color:#E1E4E8\">; j </span><span style=\"color:#F97583\">+</span><span style=\"color:#79B8FF\"> 1</span><span style=\"color:#F97583\"> &#x3C;</span><span style=\"color:#E1E4E8\"> v[i].</span><span style=\"color:#B392F0\">size</span><span style=\"color:#E1E4E8\">(); j </span><span style=\"color:#F97583\">+=</span><span style=\"color:#79B8FF\"> 2</span><span style=\"color:#E1E4E8\">)</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            ans </span><span style=\"color:#F97583\">+=</span><span style=\"color:#E1E4E8\"> v[i][j] </span><span style=\"color:#F97583\">+</span><span style=\"color:#E1E4E8\"> v[i][j </span><span style=\"color:#F97583\">+</span><span style=\"color:#79B8FF\"> 1</span><span style=\"color:#E1E4E8\">];</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    }</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">    printf</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"</span><span style=\"color:#79B8FF\">%lld\\n</span><span style=\"color:#9ECBFF\">\"</span><span style=\"color:#E1E4E8\">, ans);</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    return</span><span style=\"color:#79B8FF\"> 0</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"list-types\">List Types</h2>\n<h3 id=\"ordered-list\">Ordered List</h3>\n<h4 id=\"syntax-5\">Syntax</h4>\n<pre class=\"astro-code github-dark mockup-code\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code><span class=\"line\"><span style=\"color:#FFAB70\">1.</span><span style=\"color:#E1E4E8\"> First item</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">2.</span><span style=\"color:#E1E4E8\"> Second item</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">3.</span><span style=\"color:#E1E4E8\"> Third item</span></span>\n<span class=\"line\"></span></code></pre>\n<h4 id=\"output-4\">Output</h4>\n<ol>\n<li>First item</li>\n<li>Second item</li>\n<li>Third item</li>\n</ol>\n<h3 id=\"unordered-list\">Unordered List</h3>\n<h4 id=\"syntax-6\">Syntax</h4>\n<pre class=\"astro-code github-dark mockup-code\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code><span class=\"line\"><span style=\"color:#FFAB70\">-</span><span style=\"color:#E1E4E8\"> List item</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">-</span><span style=\"color:#E1E4E8\"> Another item</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">-</span><span style=\"color:#E1E4E8\"> And another item</span></span>\n<span class=\"line\"></span></code></pre>\n<h4 id=\"output-5\">Output</h4>\n<ul>\n<li>List item</li>\n<li>Another item</li>\n<li>And another item</li>\n</ul>\n<h3 id=\"nested-list\">Nested list</h3>\n<h4 id=\"syntax-7\">Syntax</h4>\n<pre class=\"astro-code github-dark mockup-code\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code><span class=\"line\"><span style=\"color:#FFAB70\">-</span><span style=\"color:#E1E4E8\"> Fruit</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">  -</span><span style=\"color:#E1E4E8\"> Apple</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">  -</span><span style=\"color:#E1E4E8\"> Orange</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">  -</span><span style=\"color:#E1E4E8\"> Banana</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">-</span><span style=\"color:#E1E4E8\"> Dairy</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">  -</span><span style=\"color:#E1E4E8\"> Milk</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">  -</span><span style=\"color:#E1E4E8\"> Cheese</span></span>\n<span class=\"line\"></span></code></pre>\n<h4 id=\"output-6\">Output</h4>\n<ul>\n<li>Fruit\n<ul>\n<li>Apple</li>\n<li>Orange</li>\n<li>Banana</li>\n</ul>\n</li>\n<li>Dairy\n<ul>\n<li>Milk</li>\n<li>Cheese</li>\n</ul>\n</li>\n</ul>\n<h2 id=\"other-elements--abbr-sub-sup-kbd-mark\">Other Elements — abbr, sub, sup, kbd, mark</h2>\n<h4 id=\"syntax-8\">Syntax</h4>\n<pre class=\"astro-code github-dark mockup-code\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"markdown\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;abbr title=\"Graphics Interchange Format\">GIF&#x3C;/abbr> is a bitmap image format.</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">H&#x3C;sub>2&#x3C;/sub>O</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">X&#x3C;sup>n&#x3C;/sup> + Y&#x3C;sup>n&#x3C;/sup> = Z&#x3C;sup>n&#x3C;/sup></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">Press &#x3C;kbd>&#x3C;kbd>CTRL&#x3C;/kbd>+&#x3C;kbd>ALT&#x3C;/kbd>+&#x3C;kbd>Delete&#x3C;/kbd>&#x3C;/kbd> to end the session.</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">Most &#x3C;mark>salamanders&#x3C;/mark> are nocturnal, and hunt for insects, worms, and other small creatures.</span></span>\n<span class=\"line\"></span></code></pre>\n<h4 id=\"output-7\">Output</h4>\n<p><abbr title=\"Graphics Interchange Format\">GIF</abbr> is a bitmap image format.</p>\n<p>H<sub>2</sub>O</p>\n<p>X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup></p>\n<p>Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.</p>\n<p>Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.</p>\n<section data-footnotes=\"\" class=\"footnotes\"><h2 class=\"sr-only\" id=\"footnote-label\">Footnotes</h2>\n<ol>\n<li id=\"user-content-fn-1\">\n<p>The above quote is excerpted from Rob Pike’s <a href=\"https://www.youtube.com/watch?v=PAAkCSZUG1c\">talk</a> during Gopherfest, November 18, 2015. <a href=\"#user-content-fnref-1\" data-footnote-backref=\"\" aria-label=\"Back to reference 1\" class=\"data-footnote-backref\">↩</a></p>\n</li>\n</ol>\n</section>";

				const frontmatter = {"title":"Markdown Style Guide","description":"Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.","pubDate":"Jul 01 2024","image":"/home.webp","tags":["Makrdown"],"badge":"Guide"};
				const file = "/home/clymo/proyectos/lectorLibro/src/content/blog/markdown-style-guide.md";
				const url = undefined;
				function rawContent() {
					return "\nHere is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.\n\n## Headings\n\nThe following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.\n\n# H1\n\n## H2\n\n### H3\n\n#### H4\n\n##### H5\n\n###### H6\n\n## Paragraph\n\nXerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.\n\nItatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.\n\n## Images\n\n#### Syntax\n\n```markdown mockup-code\n![Alt text](./full/or/relative/path/of/image)\n```\n\n#### Output\n\n![blog placeholder](/home.webp)\n\n## Blockquotes\n\nThe blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.\n\n### Blockquote without attribution\n\n#### Syntax\n\n```markdown\n> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  \n> **Note** that you can use _Markdown syntax_ within a blockquote.\n```\n\n#### Output\n\n> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  \n> **Note** that you can use _Markdown syntax_ within a blockquote.\n\n### Blockquote with attribution\n\n#### Syntax\n\n```markdown\n> Don't communicate by sharing memory, share memory by communicating.<br>\n> — <cite>Rob Pike[^1]</cite>\n```\n\n#### Output\n\n> Don't communicate by sharing memory, share memory by communicating.<br>\n> — <cite>Rob Pike[^1]</cite>\n\n[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.\n\n## Tables\n\n#### Syntax\n\n```markdown\n| Italics   | Bold     | Code   |\n| --------- | -------- | ------ |\n| _italics_ | **bold** | `code` |\n```\n\n#### Output\n\n| Italics   | Bold     | Code   |\n| --------- | -------- | ------ |\n| _italics_ | **bold** | `code` |\n\n## Code Blocks\n\n#### Syntax\n\nwe can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash\n\n````markdown\n```cpp\n#include <bits/stdc++.h>\nusing namespace std;\nconst int N = 1e5 + 5;\nint n, k, a[N];\nlong long ans;\nvector<int> v[N];\nint main()\n{\n    scanf(\"%d%d\", &n, &k);\n    for (int i = 1; i <= n; i++)\n    {\n        scanf(\"%d\", &a[i]);\n        v[i % k].push_back(a[i]);\n    }\n    for (int i = 0; i < k; i++)\n        sort(v[i].rbegin(), v[i].rend());\n    for (int i = 0; i < k; i++)\n    {\n        for (int j = 0; j + 1 < v[i].size(); j += 2)\n        {\n            ans += v[i][j] + v[i][j + 1];\n        }\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}\n```\n````\n\nOutput\n\n```cpp\n#include <bits/stdc++.h>\nusing namespace std;\nconst int N = 1e5 + 5;\nint n, k, a[N];\nlong long ans;\nvector<int> v[N];\nint main()\n{\n    scanf(\"%d%d\", &n, &k);\n    for (int i = 1; i <= n; i++)\n    {\n        scanf(\"%d\", &a[i]);\n        v[i % k].push_back(a[i]);\n    }\n    for (int i = 0; i < k; i++)\n        sort(v[i].rbegin(), v[i].rend());\n    for (int i = 0; i < k; i++)\n    {\n        for (int j = 0; j + 1 < v[i].size(); j += 2)\n        {\n            ans += v[i][j] + v[i][j + 1];\n        }\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}\n```\n\n## List Types\n\n### Ordered List\n\n#### Syntax\n\n```markdown\n1. First item\n2. Second item\n3. Third item\n```\n\n#### Output\n\n1. First item\n2. Second item\n3. Third item\n\n### Unordered List\n\n#### Syntax\n\n```markdown\n- List item\n- Another item\n- And another item\n```\n\n#### Output\n\n- List item\n- Another item\n- And another item\n\n### Nested list\n\n#### Syntax\n\n```markdown\n- Fruit\n  - Apple\n  - Orange\n  - Banana\n- Dairy\n  - Milk\n  - Cheese\n```\n\n#### Output\n\n- Fruit\n  - Apple\n  - Orange\n  - Banana\n- Dairy\n  - Milk\n  - Cheese\n\n## Other Elements — abbr, sub, sup, kbd, mark\n\n#### Syntax\n\n```markdown\n<abbr title=\"Graphics Interchange Format\">GIF</abbr> is a bitmap image format.\n\nH<sub>2</sub>O\n\nX<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>\n\nPress <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.\n\nMost <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.\n```\n\n#### Output\n\n<abbr title=\"Graphics Interchange Format\">GIF</abbr> is a bitmap image format.\n\nH<sub>2</sub>O\n\nX<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>\n\nPress <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.\n\nMost <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"headings","text":"Headings"},{"depth":1,"slug":"h1","text":"H1"},{"depth":2,"slug":"h2","text":"H2"},{"depth":3,"slug":"h3","text":"H3"},{"depth":4,"slug":"h4","text":"H4"},{"depth":5,"slug":"h5","text":"H5"},{"depth":6,"slug":"h6","text":"H6"},{"depth":2,"slug":"paragraph","text":"Paragraph"},{"depth":2,"slug":"images","text":"Images"},{"depth":4,"slug":"syntax","text":"Syntax"},{"depth":4,"slug":"output","text":"Output"},{"depth":2,"slug":"blockquotes","text":"Blockquotes"},{"depth":3,"slug":"blockquote-without-attribution","text":"Blockquote without attribution"},{"depth":4,"slug":"syntax-1","text":"Syntax"},{"depth":4,"slug":"output-1","text":"Output"},{"depth":3,"slug":"blockquote-with-attribution","text":"Blockquote with attribution"},{"depth":4,"slug":"syntax-2","text":"Syntax"},{"depth":4,"slug":"output-2","text":"Output"},{"depth":2,"slug":"tables","text":"Tables"},{"depth":4,"slug":"syntax-3","text":"Syntax"},{"depth":4,"slug":"output-3","text":"Output"},{"depth":2,"slug":"code-blocks","text":"Code Blocks"},{"depth":4,"slug":"syntax-4","text":"Syntax"},{"depth":2,"slug":"list-types","text":"List Types"},{"depth":3,"slug":"ordered-list","text":"Ordered List"},{"depth":4,"slug":"syntax-5","text":"Syntax"},{"depth":4,"slug":"output-4","text":"Output"},{"depth":3,"slug":"unordered-list","text":"Unordered List"},{"depth":4,"slug":"syntax-6","text":"Syntax"},{"depth":4,"slug":"output-5","text":"Output"},{"depth":3,"slug":"nested-list","text":"Nested list"},{"depth":4,"slug":"syntax-7","text":"Syntax"},{"depth":4,"slug":"output-6","text":"Output"},{"depth":2,"slug":"other-elements--abbr-sub-sup-kbd-mark","text":"Other Elements — abbr, sub, sup, kbd, mark"},{"depth":4,"slug":"syntax-8","text":"Syntax"},{"depth":4,"slug":"output-7","text":"Output"},{"depth":2,"slug":"footnote-label","text":"Footnotes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
