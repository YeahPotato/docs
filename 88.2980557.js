webpackJsonp([88],{190:function(t,o){t.exports="<section><h1>Popup</h1> <blockquote> <p>A popup box with customized contents.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Popup } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n\nVue.component(Popup.name, Popup);\n</code></pre> <h2>Example</h2> <p><code>position</code> defines the location of the popup. If it's <code>bottom</code>, when you switch on the popup, it'll slide into the screen from the bottom and become fixed at the bottom. The sliding animation alters with <code>position</code>, and you don't need to configure it manually.</p> <p>Sync <code>visible</code> with one of your vue instance variables. Toggle it to switch on/off the popup.</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-popup</span>\n  <span class=hljs-attr>:visible.sync</span>=<span class=hljs-string>\"popupVisible\"</span>\n  <span class=hljs-attr>position</span>=<span class=hljs-string>\"bottom\"</span>&gt;</span>\n  ...\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-popup</span>&gt;</span>\n</code></pre> <p>If the <code>position</code> attribute is omitted, the popup will be located at the center of the viewport (and of course you can relocate it using CSS). In this case, you may want to set its popup-transition attribute to <code>popup-fade</code> so that it'll have a fading effect when switched on/off.</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-popup</span>\n  <span class=hljs-attr>:visible.sync</span>=<span class=hljs-string>\"popupVisible\"</span>\n  <span class=hljs-attr>popup-transition</span>=<span class=hljs-string>\"popup-fade\"</span>&gt;</span>\n  ...\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-popup</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>visible</td> <td>visibility of the popup</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>position</td> <td>location of the popup. If omitted, the popup will be centered</td> <td>String</td> <td>'top'<br>'right'<br>'bottom'<br>'left'</td> <td></td> </tr> <tr> <td>pop-transition</td> <td>CSS transition of the popup. Configurable only when <code>position</code> is omitted</td> <td>String</td> <td>'popup-fade'</td> <td></td> </tr> <tr> <td>modal</td> <td>if a modal pops with the popup</td> <td>Boolean</td> <td></td> <td>true</td> </tr> <tr> <td>closeOnClickModal</td> <td>if the popup turns off when the modal is clicked</td> <td>Boolean</td> <td></td> <td>true</td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>content of the popup</td> </tr> </tbody> </table></div></section>"},317:function(t,o,s){var e,p,a={};p=s(190),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;p&&(n.template=p),n.computed||(n.computed={}),Object.keys(a).forEach(function(t){var o=a[t];n.computed[t]=function(){return o}})},42:function(t,o,s){t.exports=s(317)}});