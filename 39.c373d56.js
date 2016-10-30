webpackJsonp([39],{240:function(s,a){s.exports='<section><h1>Header</h1> <blockquote> <p>Top navigation bar.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Header } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Header.name, Header);\n</code></pre> <h2>Usage</h2> <p>Fixed at the top of the page</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-header</span> <span class=hljs-attr>fixed</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"fixed top"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-header</span>&gt;</span>\n</code></pre> <p><code>left</code> or <code>right</code> slot</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-header</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"long long long long title"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>v-link</span>=<span class=hljs-string>"\'/\'"</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"back"</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"left"</span>&gt;</span>back<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"more"</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"right"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-header</span>&gt;</span>\n</code></pre> <p>Multiple buttons</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-header</span> <span class=hljs-attr>title</span>=<span class=hljs-string>"multiple button"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"left"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>v-link</span>=<span class=hljs-string>"\'/\'"</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"back"</span>&gt;</span>back<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>@click</span>=<span class=hljs-string>"handleClose"</span>&gt;</span>close<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"more"</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"right"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-header</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>fixed</td> <td>if the header is fixed on top</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>title</td> <td>title of the header</td> <td>String</td> <td></td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>left</td> <td>HTML content on the left</td> </tr> <tr> <td>right</td> <td>HTML content on the right</td> </tr> </tbody> </table></div></section>'},33:function(s,a,t){s.exports=t(367)},367:function(s,a,t){var n,l,p={};l=t(240),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var e="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(e.template=l),e.computed||(e.computed={}),Object.keys(p).forEach(function(s){var a=p[s];e.computed[s]=function(){return a}})}});