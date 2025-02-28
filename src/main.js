// For more information, see https://crawlee.dev/
import { CheerioCrawler, Dataset } from 'crawlee';
import * as cheerio from 'cheerio';

// 从 startUrls 中解析出域名
const startUrl = "https://leledati.com";

const targetDomain = startUrl.match(/https?:\/\/([^/]+)/)[1]; // 提取域名
// const targetDomain = new URL(startUrl).hostname; // 获取目标域名

const crawler = new CheerioCrawler({
    async requestHandler({ request, response, body }) {
        const $ = cheerio.load(body);

        const links = $('a').map((i, el) => el.attribs.href).get();

        // 过滤无效链接（如 null 或非 http/https 链接）
        const validLinks = links.filter((link) => link && link.startsWith('http'));

        // 进一步过滤，只保留目标域名的链接
        const targetLinks = validLinks.filter((link) => {
            const linkDomain = new URL(link).hostname;
            return linkDomain === targetDomain;
        });

      
        // 提取正文内容（直接从 body 中提取文本）
        let articleContent = body.trim()
        if (articleContent.length > 0) {
            articleContent = articleContent.replace(/<[^>]*>/g, '').trim()
            articleContent = articleContent.replace(/\t+/g, '\t');
            articleContent = articleContent.replace(/(\n\t)+/g, '\n\t');
            articleContent = articleContent.replace(/\s+/g, ' ');
        }

        // 如果链接匹配目标域名，才将数据保存到 Dataset 中
        if (targetLinks.length > 0) {
            await Dataset.pushData({
                url: request.loadedUrl,
                links: targetLinks,
                body: articleContent || 'No content extracted'
            });
        }
        
        // 将提取的链接加入到爬取队列中
        await crawler.addRequests(targetLinks.map((link) => ({ url: link })));
    }
});

// 启动爬虫
crawler.run([{ url: startUrl }]);