/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/02/hello-world/index.html","ef5da9ff674587748fdf614587f4a5d8"],["/404.html","35952a984009e84588087449189eebf4"],["/about/index.html","6af6452d27647839098555fdb4bcdbc3"],["/archives/2023/05/index.html","f37afc4a96452fa6f0ec782cd1bd860e"],["/archives/2023/index.html","ffa0a0500cd6a8fd80e3b1cc26240419"],["/archives/index.html","1cf0bf0598c1b58d9975a37da70f1520"],["/categories/index.html","c0d10a3d16e5d7b5b73e924486985b65"],["/categories/text/index.html","70d3249c5b67f22e87382499a62c1d6f"],["/css/archive.css","e1d461b71ac9f1e579e631ce280f16eb"],["/css/categories.css","fe0f58974b804520152267fb913b2cef"],["/css/code-highlighting.css","e648d58de27132936a5dda043d4522ac"],["/css/components.css","a65485b66f882ab88f8854f6897e227a"],["/css/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/css/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/css/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/css/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/css/footer.css","ccfae6706b910afd09ad8259a08a03b8"],["/css/giscus.css","d6c6f912fa48456f31e600bc64d403f9"],["/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["/css/index.css","8b5037fd31d3fce6c0024bef54df7fee"],["/css/loading/loading-bar.css","ad2bdf0af981e2d81e076fee64c3edfe"],["/css/main.css","33554fa745dc0f0b8dbfe02a20cb93a0"],["/css/nav.css","09afc4cc9ef9ce93552121abd09764e3"],["/css/paginator.css","242dd16b685d0c81ed54e639326a2cce"],["/css/post-list.css","9b566948a15b4afcaf9da69b3b420017"],["/css/post.css","4480e287a168820b0ea39ab8a9de4dd2"],["/css/rainbow-banner.css","3d7d6155eb2e1c6486097ac1fc38852c"],["/css/search.css","d6d857314aef00de6d704d11ba7f5239"],["/css/style.css","34b6495a56d9afeedcf3255f02578cfd"],["/css/tags.css","197e6f947a5b327dbdf92ff9a8c4a7d0"],["/css/toc.css","64c3a98ad52e2eab2465171871cc2cd3"],["/css/typography.css","b829d386ff8ed81fc5ede26afded1b79"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fancybox/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/fancybox/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/background.jpg","ec5cbabaa6895dd14b3c704e841e4259"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/touxiang.jpg","7de6ecce66e203f384f6d61c05faddfe"],["/index.html","f521075ffcbb7da9da0ed3e229c747d4"],["/js/jquery-3.4.1.min.js","220afd743d9e9643852e31a135a9f3ae"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/script.js","899039a2fd4a5c7a164d7ae5bfc78073"],["/js/search.js","97caee367fb8db66c343b88eca28ce47"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/link/index.html","07206958da0ee3ab6f22e8610097aaf7"],["/sw-register.js","416389937a1f5da79fb2496c12b1d56b"],["/tags/index.html","5d71b17c12dc24966e87b7ee2a4179ce"],["/tags/text/index.html","e938955f75b93302e9d664807b99bdd5"],["/theme-img/discord-mark-dark.svg","2d20a45d79110dc5bf947137e9d99b66"],["/theme-img/discord-mark-light.svg","145dc557845548a36a82337912ca3ac5"],["/theme-img/github-mark-dark.png","ef7a02b69836dc8b6a732a54c4200dcb"],["/theme-img/github-mark-light.png","472739dfb5857b1f659f4c4c6b4568d0"],["/theme-img/mastodon-logo-black.svg","4a0c7dea075732c638df5935c9463ac6"],["/theme-img/mastodon-logo-white.svg","4a9f078e2c069318da2fd5ccdf13f3c3"],["/theme-img/patreon-logo-black.png","f25136604124f53ff0d01e40319a16d4"],["/theme-img/patreon-logo-white.png","2d214e28c1c456285b1b06affaf4553e"],["/theme-img/search-dark.svg","0f6b11e76872cd009c7f02e8b170ceb9"],["/theme-img/search-light.svg","8e18b0598a9009c44038ba5eefc43cb6"],["/theme-img/tags-dark.svg","cbc167b669261a45f283e780c012657a"],["/theme-img/tags-light.svg","0d0c56f644921d8f0fae4a7236fb1456"],["/壁纸/index.html","26661d22b652e33a01d48593d5039ef1"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
