const express = require('express');
const router = express.Router();
const {addToCart, getCatItems, removeCartItem} = require('../controller/CartController');

router.use(express.json());

router.post('/', addToCart); // 장바구니 담기
router.get('/', getCatItems); // 장바구니 아이템 목록 조회 / 선택한 장바구니 아이템 목록 조회
router.delete('/:id', removeCartItem); // 장바구니 도서 삭제

module.exports = router;