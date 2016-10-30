webpackJsonp([103],{175:function(s,a){s.exports='<section><h1>Button</h1> <blockquote> <p>按钮，提供几种基础样式和尺寸，可自定义图标。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Button } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Button.name, Button);\n</code></pre> <h2>例子</h2> <p>改变颜色</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"default"</span>&gt;</span>default<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"primary"</span>&gt;</span>primary<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"danger"</span>&gt;</span>danger<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n</code></pre> <p>改变大小</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"small"</span>&gt;</span>small<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"large"</span>&gt;</span>large<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"normal"</span>&gt;</span>normal<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n</code></pre> <p>禁用按钮</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>disabled</span>&gt;</span>disabled<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n</code></pre> <p>幽灵按钮</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>plain</span>&gt;</span>plain<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n</code></pre> <p>带图标</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"back"</span>&gt;</span>back<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"more"</span>&gt;</span>更多<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n</code></pre> <p>自定义图标</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"../assets/100x100.png"</span> <span class=hljs-attr>height</span>=<span class=hljs-string>"20"</span> <span class=hljs-attr>width</span>=<span class=hljs-string>"20"</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"icon"</span>&gt;</span>\n  带自定义图标\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-button</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>plain</td> <td>幽灵按钮</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>disabled</td> <td>禁用状态</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>type</td> <td>按钮显示样式</td> <td>String</td> <td>default, primary, danger</td> <td>default</td> </tr> <tr> <td>size</td> <td>尺寸</td> <td>String</td> <td>small, normal, large</td> <td>normal</td> </tr> <tr> <td>icon</td> <td>图标</td> <td>String</td> <td>more, back</td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>显示的文本内容</td> </tr> <tr> <td>icon</td> <td>自定义显示的图标</td> </tr> </tbody> </table></div></section>'},302:function(s,a,t){var n,l,p={};l=t(175),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var e="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(e.template=l),e.computed||(e.computed={}),Object.keys(p).forEach(function(s){var a=p[s];e.computed[s]=function(){return a}})},90:function(s,a,t){s.exports=t(302)}});