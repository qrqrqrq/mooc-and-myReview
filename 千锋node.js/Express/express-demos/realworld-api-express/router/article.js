const express = require("express");
const articleController = require('../controller/article')

const router = express.Router();

// List Articles
router.get("/", articleController.listArticles);

// Feed Articles
router.get("/feed", articleController.feedArticles);

// Get Article
router.get("/:slug", articleController.getArticle);

// Create Article
router.post("/", articleController.createArticle);

// Update Article
router.put("/:slug", articleController.updateArticle);

// Delete Article
router.delete("/:slug", articleController.deleteArticle);

// Add Comments to an Article
router.post("/:slug/comments", articleController.addComments);

// Get Comments from an Article
router.get("/:slug/comments", articleController.getComments );

// Delete Comment
router.delete("/:slug/comments/:id", articleController.deleteComment );

// Favorite Article
router.post("/:slug/favorite", articleController.favArticle);

// Unfavorite Article
router.delete("/:slug/favorite", articleController.unfavArticle );

module.exports = router;

