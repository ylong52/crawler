// 使用 import 替换 require
import Readability from 'readability';
import { JSDOM } from 'jsdom';

class ContentExtractor {
    async extractContent(html) {
        try {
            const dom = new JSDOM(html, {
                contentType: 'text/html',
                pretendToBeVisual: true,
            });

            const article = new Readability(dom.window.document).parse();

            return article.content || null;
        } catch (error) {
            console.error('[ContentExtractor] Error extracting content:', error);
            return null;
        }
    }
}

export default ContentExtractor;