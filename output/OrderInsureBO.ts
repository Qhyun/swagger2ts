
export class OrderInsureBO {
    /**
     * 交付后GMS同步标识
     */
    afterDeliveryGmsSyncFlag?: string;
    /**
     * 保险订单号
     */
    insureOrderNumber?: string;
    /**
     * 保险机构代码
     */
    insureOrgCode?: string;
    /**
     * 保险机构名称
     */
    insureOrgName?: string;
    /**
     * 险种
     */
    insureType?: string;
    /**
     * 险种名称
     */
    insureTypeName?: string;
    /**
     * 价格
     */
    price?: number;
}