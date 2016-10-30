webpackJsonp([105],{173:function(s,a){s.exports='<section><h1>Navbar</h1> <blockquote> <p>A top navigation panel, similar to <a v-link="{path:\'/tabbar\'}">Tabbar</a>. Dependent on tab-item.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Navbar, TabItem } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Navbar.name, Navbar);\nVue.component(TabItem.name, TabItem);\n</code></pre> <h2>Example</h2> <p>Works with <a v-link="{path:\'/tab-container\'}">tab-container</a></p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-navbar</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"page-part"</span> <span class=hljs-attr>:selected.sync</span>=<span class=hljs-string>"selected"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"1"</span>&gt;</span>option A<span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"2"</span>&gt;</span>option B<span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"3"</span>&gt;</span>option C<span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-navbar</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- tab-container --&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container</span> <span class=hljs-attr>:active.sync</span>=<span class=hljs-string>"selected"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"1"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in 10"</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>"\'content \' + n"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"2"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in 4"</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>"\'content \' + n"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"3"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in 6"</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>"\'content \' + n"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container</span>&gt;</span>\n</code></pre> <h2>API</h2> <h3>navbar</h3> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>fixed</td> <td>if the component is fixed at the top</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>selected</td> <td>id of the selected tab-item</td> <td>*</td> <td></td> <td></td> </tr> </tbody> </table></div><h3>tab-item</h3> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>id</td> <td>id of tab-item</td> <td>*</td> <td></td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <h3>navbar</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>content</td> </tr> </tbody> </table></div><h3>tab-item</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>displayed text</td> </tr> <tr> <td>icon</td> <td>icon</td> </tr> </tbody> </table></div></section>'},300:function(s,a,t){var n,l,p={};l=t(173),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var e="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(e.template=l),e.computed||(e.computed={}),Object.keys(p).forEach(function(s){var a=p[s];e.computed[s]=function(){return a}})},40:function(s,a,t){s.exports=t(300)}});