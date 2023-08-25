
export class OrderOnlineBO {
    /**
     * 新能源协议文件ID
     */
    additionalProtocolFileId?: string;
    /**
     * 客户订单号
     */
    customerOrderNumber?: string;
    /**
     * 旧系统定金
     */
    deposit?: number;
    /**
     * 电子合同协议文件ID
     */
    eleContractFileId?: string;
    /**
     * 合同签署日
     */
    eleSignConfirmDate?: string;
    /**
     * 发票号
     */
    invoiceNo?: string;
    /**
     * 仅订单来源为“线上购车“，填写该字段；0：普通意向金订单；1：代理制线上订单（大定） 2：排产定订单 3：威飒模式
     */
    onlineOrderMode?: number;
    /**
     * 线上订单号
     */
    onlineOrderNo?: string;
    /**
     * 付款区分 1：微信；2：支付宝
     */
    payType?: number;
    /**
     * 交易金额
     */
    payment?: number;
    /**
     * 交易日期
     */
    paymentDate?: string;
    /**
     * 付款方式 1：全款；2：贷款
     */
    paymentMethod?: number;
    /**
     * 备注
     */
    payremarkContent?: string;
    /**
     * 预计生产日
     */
    preProducedDate?: string;
    /**
     * 审批履历ID
     */
    requestId?: string;
    /**
     * 资源优先序号
     */
    resourceNo?: string;
}