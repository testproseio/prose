module.exports = {"login":"Authorize on GitHub","docheader":{"editing":"Editing","error":"Error","preview":"Previewing"},"navigation":{"newFile":"New File","edit":"Edit","preview":"Preview","settings":"Settings","meta":"Meta Data","save":"Save","login":"Authorize with GitHub","about":"About","develop":"Developers","logout":"Logout"},"heading":{"explore":"Explore Projects"},"actions":{"unsaved":"You have unsaved Changes. Are you sure you want to leave?","draft":{"toPost":"Draft to Post"},"publishing":{"publish":"Publish","published":"Published","unpublish":"Unpublish","unpublished":"Unpublished"},"change":{"noChange":"No Changes","submit":"Changes to Submit","save":"Save"},"delete":{"title":"Delete","warn":"Are you sure you want to delete this file?","error":"Error during deletion. Please wait 30 seconds and try again."},"upload":{"uploading":"Uploading {file}","uploaded":"Uploaded {file}"},"save":{"title":"Save","saved":"Saved","saving":"Saving","patch":"Submitting Request","fileNameError":"Needs a Filename","submission":"Request Submitted","metaError":"Error! Metadata not Found"},"error":"Error. Try again in 30 Seconds","restore":{"restoring":"Restoring","restored":"Restored"},"commits":{"created":"Created {filename}","updated":"Updated {filename}","deleted":"Deleted {filename}","toDraft":"Created draft of {filename}","fromDraft":"Created post from a draft of {filename}"}},"loading":{"repos":"Loading Profile","repo":"Loading Project","file":"Loading File","preview":"Previewing File","creating":"Creating new post"},"main":{"start":{"content":"Prose is a content editor for GitHub designed for managing websites.","learn":"Learn more"},"repos":{"filter":"Filter Projects","repo":"View Project","site":"View Site","sharedFrom":"Shared from an account","forkedFrom":"Forked from another project"},"repo":{"filter":"Filter Files","edit":"Edit"},"new":{"body":"## A New Post\\n\\nEnter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.\n"},"file":{"metaTitle":"Review your changes:","rawMeta":"Raw Metadata","metaDescription":"Additions are highlighted in green. Deletions are crossed out.","back":"Done"},"upgrade":{"content":"Prose requires features not available to your browser","download":"Download a Modern Browser"}},"notification":{"loginDescription":"Please login with your GitHub account to access that project.","create":"Create it","home":"Back to Main Page","back":"Go Back","error":{"label":"Error","github":"Error while loading data from Github. This might be a temporary issue. Please try again later.","exists":"This file does not exist","notFound":"Page not Found"}},"sidebar":{"repos":{"groups":"Groups"},"repo":{"branch":"Switch Branch","drafts":"View Drafts","history":{"label":"Most Recent History","actions":{"restore":"Restore?"}},"create":"Create New File"},"save":{"label":"Describe your Changes","cancel":"Cancel","save":"Commit","submit":"Submit Change Request"},"settings":{"title":"Options","delete":"Delete This File","translate":"Translate to","draft":"Create Draft"}},"dialogs":{"link":{"title":"Insert Link","insertLocal":"Insert a Local Link","insert":"Insert"},"media":{"title":"Insert Image","back":"Back","description":"Upload images by dragging &amp; Dropping or </br>\n{input} <a>selecting one</a>\n","help":"Images uploaded are added to the current directory or one specified in the Image URL path above.","helpMedia":"Images uploaded are added to the 'Choose Existing' directory or one specified in the Image URL field.","choose":"Choose Existing"},"help":{"blockElements":{"title":"Block Elements","content":{"paragraphs":{"title":"Paragraphs &amp; Breaks","content":"<p>To create a paragraph, simply create a block of text that is not separated by one or more blank lines. Blocks of text separated by one or more blank lines will be parsed as paragraphs.</p><p>If you want to create a line break, end a line with two or more spaces, then hit Return/Enter.</p>\n"},"headers":{"title":"Headers","content":"<p>Markdown supports two header formats. The wiki editor uses the &ldquo;atx&rsquo;-style headers. Simply prefix your header text with the number of <code>#</code> characters to specify heading depth. For example: <code># Header 1</code>, <code>## Header 2</code> and <code>### Header 3</code> will be progressively smaller headers. You may end your headers with any number of hashes.</p>\n"},"blockquotes":{"title":"Blockquotes","content":"<p>Markdown creates blockquotes email-style by prefixing each line with the <code>&gt;</code>. This looks best if you decide to hard-wrap text and prefix each line with a <code>&gt;</code> character, but Markdown supports just putting <code>&gt;</code> before your paragraph.</p>\n"},"lists":{"title":"Lists","content":"<p>Markdown supports both ordered and unordered lists. To create an ordered list, simply prefix each line with a number (any number will do &mdash; this is why the editor only uses one number.) To create an unordered list, you can prefix each line with <code>*</code>, <code>+</code> or <code>-</code>.</p> List items can contain multiple paragraphs, however each paragraph must be indented by at least 4 spaces or a tab.\n"},"codeBlocks":{"title":"Code Blocks","content":"<p>Markdown wraps code blocks in pre-formatted tags to preserve indentation in your code blocks. To create a code block, indent the entire block by at least 4 spaces or one tab. Markdown will strip the extra indentation you&rsquo;ve added to the code block.</p>\n"},"horizontalRules":{"title":"Horizontal Rules","content":"<p>Horizontal rules are created by placing three or more hyphens, asterisks or underscores on a line by themselves. Spaces are allowed between the hyphens, asterisks or underscores.</p>\n"}}},"spanElements":{"title":"Span Elements","content":{"links":{"title":"Links","content":"<p>Markdown has two types of links: <strong>inline</strong> and <strong>reference</strong>. For both types of links, the text you want to display to the user is placed in square brackets. For example, if you want your link to display the text &ldquo;GitHub&rdquo;, you write <code>[GitHub]</code>.</p><p>To create an inline link, create a set of parentheses immediately after the brackets and write your URL within the parentheses. (e.g., <code>[GitHub](http://github.com/)</code>). Relative paths are allowed in inline links.</p><p>To create a reference link, use two sets of square brackets. <code>[my internal link][internal-ref]</code> will link to the internal reference <code>internal-ref</code>.</p>\n"},"emphasis":{"title":"Emphasis","content":"<p>Asterisks (<code>*</code>) and underscores (<code>_</code>) are treated as emphasis and are wrapped with an <code>&lt;em&gt;</code> tag, which usually displays as italics in most browsers. Double asterisks (<code>**</code>) or double underscores (<code>__</code>) are treated as bold using the <code>&lt;strong&gt;</code> tag. To create italic or bold text, simply wrap your words in single/double asterisks/underscores. For example, <code>**My double emphasis text**</code> becomes <strong>My double emphasis text</strong>, and <code>*My single emphasis text*</code> becomes <em>My single emphasis text</em>.</p>\n"},"code":{"title":"Code","content":"<p>To create inline spans of code, simply wrap the code in backticks (<code>`</code>). Markdown will turn <code>`myFunction`</code> into <code>myFunction</code>.</p>\n"},"images":{"title":"Images","content":"<p>Markdown image syntax looks a lot like the syntax for links; it is essentially the same syntax preceded by an exclamation point (<code>!</code>). For example, if you want to link to an image at <code>http://github.com/unicorn.png</code> with the alternate text <code>My Unicorn</code>, you would write <code>![My Unicorn](http://github.com/unicorn.png)</code>.</p>\n"}}},"miscellaneous":{"title":"Miscellaneous","content":{"automaticLinks":{"title":"Automatic Links","content":"<p>If you want to create a link that displays the actual URL, markdown allows you to quickly wrap the URL in <code>&lt;</code> and <code>&gt;</code> to do so. For example, the link <a href=\"javascript:void(0);\">http://github.com/</a> is easily produced by writing <code>&lt;http://github.com/&gt;</code>.</p>\n"},"escaping":{"title":"Escaping","content":"<p>If you want to use a special Markdown character in your document (such as displaying literal asterisks), you can escape the character with the backslash (<code>\\\\</code>). Markdown will ignore the character directly after a backslash.\n"}}}}},"about":{"content":"# About\nProse provides a beatifully simple content authoring environment for\n[CMS-free websites](http://developmentseed.org/blog/2012/07/27/build-cms-free-websites/).\nIt's a web-based interface for managing content on\n[GitHub](http://github.com). Use it to create, edit, and delete files,\nand save your changes directly to GitHub. Host your website on\n[GitHub Pages](http://pages.github.com) for free, or set up your own\n[GitHub webhook server](http://developmentseed.org/blog/2013/05/01/introducing-jekyll-hook/).\n\nProse has advanced support for [Jekyll](http://jekyllrb.com/) sites and\n[markdown content](http://daringfireball.net/projects/markdown/).\nProse detects markdown posts in Jekyll sites and provides syntax\nhighlighting, a formatting toolbar, and draft previews in the site's\nfull layout.\n\nDevelopers can configure Jekyll sites to take advantage of these and\nmany more features that customize the content editing experience.\n\n## Configuring\n\nProse can be configured per repository with additional metadata in a\nJekyll site's `_config.yml` file or a separate `prose.yml` file. We offer\nProse.io as a hosted service for the latest version, or you can download\nthe source code and host it on your own. For for developer documentation,\nsee [the wiki page on GitHub](https://github.com/prose/prose/wiki).\n\n## Developing\n\nProse is an open source project. We encourage you to contribute and\nhelp us improve this application or adapt it to your needs. For\ninstructions on developing Prose, see the\n[Prose contributing guidelines](https://github.com/prose/prose/blob/gh-pages/CONTRIBUTING.md).\n\n## Getting Help\n\nWe do not offer support for Prose at this time, however if you are a\ncontent editor using Prose, you should contact the developer who gave\nyou access to it. To report technical problems with Prose, please\n[file an issue on GitHub](https://github.com/prose/prose/issues).\n\n## Credits\n\nProse is developed and maintained by\n[Development Seed](http://developmentseed.org), a creative data\nvisualization and mapping team based in Washington, DC.\n"}};