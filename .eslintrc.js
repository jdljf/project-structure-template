module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: [
    "plugin:vue/essential"
    // "@vue/prettier"
  ],
  plugins: ["vue"],
  rules: {
    /**
     * 和 javaScript 代码中可能出现的错误或逻辑错误有关的规则
     */
    "no-cond-assign": ["error", "always"], // 禁止条件表达式中出现赋值操作符
    "no-dupe-args": "error", // 禁止 function 定义中出现重名参数
    "no-dupe-keys": "error", // 禁止对象字面量中出现重复的 key
    "no-duplicate-case": "error", // 禁止出现重复的 case 标签
    "no-empty": ["error", { allowEmptyCatch: true }], // 禁止出现空语句块,允许出现空的 catch 子句
    "no-extra-semi": "error", // 禁止不必要的分号
    "no-unreachable": "error", // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    "use-isnan": "error", // 要求使用 isNaN() 检查 NaN
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    /**
     * 统一风格
     */
    "array-bracket-spacing": ["error", "never"], // 强制数组方括号中两边使用空格
    "block-spacing": "error", // 强制右花括号和在同一行的前一个 token 之间有空格
    "keyword-spacing": ["error", { before: true }], // 强制在关键字前后使用空格
    "no-array-constructor": "error", // 禁用 Array 构造函数
    "no-trailing-spaces": "error", // 禁用行尾空格
    "no-whitespace-before-property": "error", // 禁止属性前有空白
    "one-var-declaration-per-line": ["error", "always"], // 强制每个变量声明都换行
    "object-property-newline": "error", // 强制对象属性换行
    // quotes: ['error', 'double'], // 强制字符串使用双引号
    "switch-colon-spacing": ["error", { after: true, before: false }], // 强制 switch 语句中的 case 和 default 子句的冒号左边没空格右边有
    "space-infix-ops": "error", // 要求中缀操作符周围有空格
    // 'space-before-function-paren': 'error', // 强制函数圆括号之前有一个空格

    /**
     * 关于最佳实践的规则
     */
    // 强制数组方法的回调函数中的return语句的使用，但允许隐式使用 return 不包含任何表达式地返回 undefined
    "array-callback-return": ["error", { allowImplicit: true }],
    "block-scoped-var": "error", // 强制把变量的使用限制在其定义的作用域范围内
    curly: "error", // 强制所有控制语句使用一致的括号风格
    "guard-for-in": "error", // 要求 for-in 循环中有一个 if 语句
    "no-empty-function": "error", // 禁止出现空函数
    "no-empty-pattern": "error", // 禁止使用空解构模式
    "no-extra-bind": "error", // 禁止不必要的 .bind() 调用
    "no-extra-label": "error", // 禁用不必要的标签
    "no-floating-decimal": "error", // 禁止数字字面量中使用前导和末尾小数点
    "no-implicit-coercion": "error", // 禁止使用短符号进行类型转换
    "no-labels": "error", // 禁用标签语句

    /**
     * 变量声明有关的规则
     */
    "no-delete-var": "error", // 禁止删除变量
    "no-label-var": "error", // 不允许标签与变量同名
    "no-shadow": "error", // 禁止变量声明与外层作用域的变量同名
    "no-undef-init": "error", //禁止将变量初始化为 undefined
    "no-unused-vars": "error", // 禁止出现未使用过的变量
    "no-use-before-define": "error", //未定义前不能使用
    "no-undefined": "error", // 禁止将 undefined 作为标识符

    /**
     * es6 有关的规则
     */
    "arrow-spacing": 2, // 强制箭头函数的箭头前后使用一致的空格
    "constructor-super": "error", // 要求在构造函数中有 super() 的调用
    "generator-star-spacing": ["error", { before: true, after: false }], // 强制 generator 函数中 * 号周围使用一致的空格
    "no-class-assign": "error" // 禁止修改 const 声明的变量
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
