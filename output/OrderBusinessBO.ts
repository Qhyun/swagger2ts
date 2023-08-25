
export class OrderBusinessBO {
    /**
     * 精品业务标识
     */
    boutiqueBusinessFlag?: string;
    /**
     * 精品业务总价
     */
    boutiqueBusinessTotalAmount?: number;
    /**
     * 优惠券业务标识
     */
    couponBusinessFlag?: string;
    /**
     * 优惠券业务总价
     */
    couponBusinessTotalAmount?: number;
    /**
     * 折扣变更标识
     */
    discountChangeFlag?: string;
    /**
     * 预计交车日变更标识
     */
    estimateDeliveryDateChangeFlag?: string;
    /**
     * 金融业务标识
     */
    finBusinessFlag?: string;
    /**
     * 保险业务标识
     */
    insureBusinessFlag?: string;
    /**
     * 保险业务总价
     */
    insureBusinessTotalAmount?: number;
    /**
     * 选装业务标识
     */
    optionalFlag?: string;
    /**
     * 选装总价
     */
    optionalTotalAmount?: number;
    /**
     * 其他业务标识
     */
    otherBusinessFlag?: string;
    /**
     * 其他业务总价
     */
    otherBusinessTotalAmount?: number;
    /**
     * 赠送业务标识
     */
    presentBusinessFlag?: string;
    /**
     * 赠送业务总价
     */
    presentBusinessTotalAmount?: number;
    /**
     * 服务业务标识
     */
    serviceBusinessFlag?: string;
    /**
     * 服务业务总价
     */
    serviceBusinessTotalAmount?: number;
    /**
     * 二手车业务标识
     */
    usedCarBusinessFlag?: string;
    /**
     * 车辆变更标识
     */
    vehicleChangeFlag?: string;
}