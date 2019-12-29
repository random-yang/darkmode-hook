<h1 align=center>darkmode-hook</h1>

<p align=center>一个能让你的页面快速获取🌗<strong>darkmode</strong>功能的js小插件</p>

[实际效果](https://officialyoungx.github.io/darkmode-hook/dist)
### 引入

**npm**
```bash
npm i @yangcongming/darkmode-hook -s
```

**`<script>`tag引入**
```html
<script src="path/to/src/index.js"></script>
```

### 如何使用

```javascript
import DarkmodeHook from "@yangcongming/darkmode-hook";
const darkmode = new DarkmodeHook();
// turn on the darkmode
darkmode.turnOn();
// turn off
darkmode.turnOff();
```

### 配置项

 