
export class OrderFinanceBO {
    /**
     * 额外费用
     */
    addCost?: number;
    /**
     * 交付后GMS同步标识
     */
    afterDeliveryGmsSyncFlag?: string;
    /**
     * 分行名称
     */
    branchName?: string;
    /**
     * 客户利率
     */
    customerInterestRate?: number;
    /**
     * 客户订单号
     */
    customerOrderNumber?: string;
    /**
     * 客户费率
     */
    customerRate?: number;
    /**
     * 首付金额
     */
    downPayAmount?: number;
    /**
     * 首付比例
     */
    downPayRatio?: number;
    /**
     * 金融申请状态编码
     */
    finApplicationStatusCode?: string;
    /**
     * 金融申请状态名称
     */
    finApplicationStatusName?: string;
    /**
     * 金融申请流水号
     */
    finApplyNumber?: string;
    /**
     * 金融机构编号（GTMC编码）
     */
    finGtmcCode?: string;
    /**
     * 金融订单号
     */
    finOrderNumber?: string;
    /**
     * 金融机构代码
     */
    finOrgCode?: string;
    /**
     * 金融机构名称
     */
    finOrgName?: string;
    /**
     * 尾款数额
     */
    finalPayAmount?: number;
    /**
     * 尾款比率
     */
    finalPayRatio?: number;
    /**
     * GTMC申请受理号（新）
     */
    gtmcApplicationNumber?: string;
    /**
     * GTMC申请受理号（旧）
     */
    gtmcApplicationNumberOld?: string;
    /**
     * GTMC产品名称
     */
    gtmcProductName?: string;
    /**
     * GTMC产品编号
     */
    gtmcProductNo?: string;
    /**
     * 发票价格
     */
    invoicePrice?: number;
    /**
     * 贷款金额
     */
    loanAmount?: number;
    /**
     * 产品利率
     */
    productInterestRate?: number;
    /**
     * 金融产品名称
     */
    productName?: string;
    /**
     * 金融产品编号
     */
    productNo?: string;
    /**
     * 产品费率
     */
    productRate?: number;
    /**
     * 产品类型
     */
    productType?: string;
    /**
     * 产品类型名称
     */
    productTypeName?: string;
    /**
     * 费率/利率标记
     */
    rateMark?: string;
    /**
     * 还款期数
     */
    repaymentPeriod?: number;
    /**
     * 销售店代码
     */
    salesStoreNo?: string;
    /**
     * 支行名称
     */
    subBranchName?: string;
}