exports.listArticles = async(req, res, next) => {
    try {
        // 处理请求
        res.send("get /");
    } catch (err) {
        next(err);
    }
}

exports.feedArticles = async (req, res, next) => {
    try {
        // 处理请求
        res.send("get /articles/feed");
    } catch (err) {
        next(err);
    }
}

exports.getArticle = async (req, res, next) => {
    try {
        // 处理请求
        res.send("get /articles/:slug");
    } catch (err) {
        next(err);
    }
}
exports.createArticle = async (req, res, next) => {
    try {
        // 处理请求
        res.send("post /articles");
    } catch (err) {
        next(err);
    }
}
exports.updateArticle = async (req, res, next) => {
    try {
        // 处理请求
        res.send("put /articles/:slug");
    } catch (err) {
        next(err);
    }
}

exports.deleteArticle = async (req, res, next) => {
    try {
        // 处理请求
        res.send("delete /articles/:slug");
    } catch (err) {
        next(err);
    }
}
exports.addComments =async (req, res, next) => {
    try {
        // 处理请求
        res.send("post /articles/:slug/comments");
    } catch (err) {
        next(err);
    }
}
exports.getComments =async (req, res, next) => {
    try {
        // 处理请求
        res.send("get /articles/:slug/comments");
    } catch (err) {
        next(err);
    }
}
exports.deleteComment =async (req, res, next) => {
    try {
        // 处理请求
        res.send("delete /articles/:slug/comments/:id");
    } catch (err) {
        next(err);
    }
}
exports.favArticle = async (req, res, next) => {
    try {
        // 处理请求
        res.send("post /articles/:slug/favorite");
    } catch (err) {
        next(err);
    }
}
exports.unfavArticle = async (req, res, next) => {
    try {
        // 处理请求
        res.send("delete /articles/:slug/favorite");
    } catch (err) {
        next(err);
    }
}
