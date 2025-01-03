const express = require('express');
const { order, getOrders, getOrdersDetil } = require('../controller/OrderController');
const router = express.Router();

router.use(express.json());

router.post('/', order); // 주문 하기
router.get('/', getOrders); // 주문 목록 조회
router.get('/:id', getOrdersDetil); // 주문 상세 상품 조회

module.exports = router;