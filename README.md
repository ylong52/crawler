# Crawlee + CheerioCrawler + JavaScript project

This template is a production ready boilerplate for developing with `CheerioCrawler`. Use this to bootstrap your projects using the most up-to-date code.

If you're looking for examples or want to learn more visit:

- [Tutorial](https://crawlee.dev/docs/guides/cheerio-crawler-guide)
- [Documentation](https://crawlee.dev/api/cheerio-crawler/class/CheerioCrawler)
- [Examples](https://crawlee.dev/docs/examples/cheerio-crawler)

- 学习地址
  https://crawlee.dev/docs/examples


运行
- npm start
- 项目功能运行采集一个静态页面的内容


Crawlee.js 是一个用于 Node.js 的网络爬虫和浏览器自动化库，具有以下特点：
- 统一的接口：为 HTTP 爬取和无头浏览器爬取提供单一接口，方便开发者根据需求在两种模式之间切换，而无需为不同的爬取方式编写大量不同的代码。
- 持久化队列：拥有持久化的 URL 队列，支持广度优先和深度优先两种遍历方式，能够确保任务的有序执行，并且在程序中断或出现故障时不会丢失进度。
- 可插拔存储：支持可插拔的存储解决方案，无论是表格数据还是文件都能方便地存储，开发者可以轻松地将数据存储到各种数据库或文件系统中，满足不同的存储需求。
- 自动缩放：能够根据系统可用资源自动管理并发，实现自动缩放，充分利用服务器资源，提高爬取效率，同时避免因资源过度使用导致系统崩溃。
- 代理轮换和会话管理：集成了代理轮换和会话管理功能，通过智能地轮换代理，使爬虫更具隐蔽性，降低被目标网站封禁的风险，同时有效地管理会话，确保爬取过程的稳定性。
- 可定制的生命周期：通过钩子函数可定制爬虫的生命周期，开发者可以在特定事件之前或之后执行自定义操作，例如在请求发送前设置请求头、在数据提取后进行数据清洗等，增加了爬虫的灵活性和可扩展性。
- 命令行工具：提供命令行工具（CLI），用于快速创建项目脚手架，简化了项目的初始化过程，方便开发者快速开始一个新的爬虫项目。
- 可配置的路由、错误处理和重试：支持可配置的请求路由，能够根据不同的 URL 模式或其他条件来处理请求；同时具有完善的错误处理机制和重试策略，当遇到网络错误、页面加载失败等问题时，能够自动进行重试，确保爬取任务的顺利进行。
- 易于部署：提供了 Dockerfile，方便将爬虫项目部署到各种生产环境中，实现快速部署和容器化管理。
- 强大的 HTTP 爬取功能：支持零配置的 HTTP/2 协议，即使使用代理也能轻松应对；自动生成类似浏览器的请求头和 TLS 指纹，模拟真实浏览器行为，提高爬虫的隐蔽性；集成了快速的 HTML 解析器 Cheerio 和 JSDOM，方便对 HTML 页面进行解析和数据提取，还可以用于抓取 JSON API 数据。
- 真实浏览器爬取支持：支持 JavaScript 渲染和截图功能，能够处理需要 JavaScript 动态加载的页面；支持无头模式和有头模式，方便开发者进行调试和测试；零配置生成类似人类的指纹，进一步提高爬虫的隐蔽性；自动管理浏览器实例，无需开发者手动处理复杂的浏览器启动、关闭等操作；可以使用 Playwright 和 Puppeteer 等库，并且提供统一的接口，支持多种浏览器，如 Chrome、Firefox、WebKit 等。
- 用 TypeScript 编写：使用 TypeScript 编写，具有良好的类型系统，即使开发者不使用 TypeScript，也能在 IDE 中获得更好的代码自动完成和类型检查等功能，提高代码的可读性和可维护性。