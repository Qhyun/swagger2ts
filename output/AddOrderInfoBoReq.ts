import { OrderBoutiqueBO } from './OrderBoutiqueBO';
import { OrderBusinessBO } from './OrderBusinessBO';
import { OrderCarBuyerBO } from './OrderCarBuyerBO';
import { OrderCarOwnerBO } from './OrderCarOwnerBO';
import { OrderCarUserBO } from './OrderCarUserBO';
import { OrderCouponBO } from './OrderCouponBO';
import { OrderFinanceBO } from './OrderFinanceBO';
import { OrderInsureBO } from './OrderInsureBO';
import { OrderIntroducerBO } from './OrderIntroducerBO';
import { OrderOnlineBO } from './OrderOnlineBO';
import { OrderOptionalBo } from './OrderOptionalBo';
import { OrderOtherBusinessBO } from './OrderOtherBusinessBO';
import { OrderPresentBO } from './OrderPresentBO';
import { OrderPriceBO } from './OrderPriceBO';
import { OrderRemarkBO } from './OrderRemarkBO';
import { OrderServiceBO } from './OrderServiceBO';
import { SpecialDecorativeBo } from './SpecialDecorativeBo';
import { OrderUsedCarBO } from './OrderUsedCarBO';

export class AddOrderInfoBoReq {
    /**
     * 代理制订单标识：0否 1是
     */
    agencySystemFlag?: string;
    /**
     * 授权销售店代码
     */
    authDealerCode?: string;
    /**
     * 授权销售店名称
     */
    authDealerName?: string;
    /**
     * 订单精品信息
     */
    boutiqueBOS?: Array<OrderBoutiqueBO>;
    /**
     * 水平业务信息
     */
    businessBO?: OrderBusinessBO;
    /**
     * 流程区分 8:自动匹配2.0模式
     */
    buyCarOnlineFlag?: number;
    /**
     * 购车人信息
     */
    carBuyerBO?: OrderCarBuyerBO;
    /**
     * 车主信息
     */
    carOwnerBO?: OrderCarOwnerBO;
    /**
     * 使用人信息
     */
    carUserBO?: OrderCarUserBO;
    /**
     * 订单优惠券信息
     */
    couponBOS?: Array<OrderCouponBO>;
    /**
     * 客户ID
     */
    customerCode?: string;
    /**
     * 店代码
     */
    dealerCode?: string;
    /**
     * 交付体验店代码
     */
    deliverDealerCode?: string;
    /**
     * 交付体验店名称
     */
    deliverDealerName?: string;
    /**
     * 交车顾问代码
     */
    deliveryConsultantCode?: string;
    /**
     * 交车顾问名称
     */
    deliveryConsultantName?: string;
    /**
     * 引擎
     */
    engine?: string;
    /**
     * 预计交车日
     */
    estimateDeliveryDate?: string;
    /**
     * 排气量
     */
    exhaust?: string;
    /**
     * 订单金融信息
     */
    financeBO?: OrderFinanceBO;
    /**
     * 变速箱
     */
    gearbox?: string;
    /**
     * 车辆等级代码
     */
    gradeCode?: string;
    /**
     * 录入人代码
     */
    inputUserCode?: string;
    /**
     * 录入人姓名
     */
    inputUserName?: string;
    /**
     * 订单保险信息
     */
    insureBOS?: Array<OrderInsureBO>;
    /**
     * 台数
     */
    numbers?: number;
    /**
     * 线上订单标识： 0不是 1是
     */
    onlineOrderFlag?: string;
    /**
     * 仅订单来源为“线上购车“，填写该字段；0：普通意向金订单；1：代理制线上订单（大定） 2：排产定订单 3：威飒模式
     */
    onlineOrderMode?: string;
    /**
     * 草稿箱ID
     */
    orderDraftId?: number;
    /**
     * 订单生成系统（1：DMS、2：GMS）
     */
    orderGenSystem?: string;
    /**
     * 介绍人信息
     */
    orderIntroducerBO?: OrderIntroducerBO;
    /**
     * 厂家订单号
     */
    orderNo?: string;
    /**
     * 线上订单信息
     */
    orderOnlineBO?: OrderOnlineBO;
    /**
     * 订单选装信息
     */
    orderOptionalBOS?: Array<OrderOptionalBo>;
    /**
     * 订单二级来源代码
     */
    orderSecondSourceCode?: number;
    /**
     * 订单二级来源名称
     */
    orderSecondSourceName?: string;
    /**
     * 订单来源（0：电网销、1：展厅、2：户外活动、3：参加活动、4：线上购车、5：转介绍、6：其他）
     */
    orderSource?: string;
    /**
     * 订单其他业务信息
     */
    otherBusinessBOS?: Array<OrderOtherBusinessBO>;
    /**
     * 订单赠送业务信息
     */
    presentBOS?: Array<OrderPresentBO>;
    /**
     * 订单价格信息
     */
    priceBO?: OrderPriceBO;
    /**
     * 公共交通标识
     */
    publicTransportFlag?: string;
    /**
     * 订单备注信息
     */
    remarkBOS?: Array<OrderRemarkBO>;
    /**
     * 资源标识 0: 已获取厂家订单 1:未获取厂家订单；未获取为供需自动生成厂家订单流程-新增已获取为自动配车1.0【威飒2.0既有流程】
     */
    resourceIdentify?: number;
    /**
     * 销售顾问代码
     */
    salesConsultantCode?: string;
    /**
     * 销售顾问名称
     */
    salesConsultantName?: string;
    /**
     * 购买类型/销售区分（1：个人；2：单位）
     */
    salesDiff?: string;
    /**
     * 订单服务信息
     */
    serviceBOS?: Array<OrderServiceBO>;
    /**
     * 特装信息
     */
    specialDecorativeBo?: SpecialDecorativeBo;
    /**
     * 特装标识 0否 1是
     */
    specialDecorativeFlag?: number;
    /**
     * 更新指标标识
     */
    updateIndicatorFlag?: string;
    /**
     * 二手车业务信息
     */
    usedCarBO?: OrderUsedCarBO;
    /**
     * 车辆颜色
     */
    vehicleColor?: string;
    /**
     * 车辆颜色代码
     */
    vehicleColorCode?: string;
    /**
     * 车辆等级/车辆版本(车型显示)
     */
    vehicleGrade?: string;
    /**
     * 车型
     */
    vehicleModel?: string;
    /**
     * 车型code
     */
    vehicleModelCode?: string;
    /**
     * 车型图片路径
     */
    vehicleModelPicture?: string;
    /**
     * 车名（车种）
     */
    vehicleName?: string;
    /**
     * 车名（车种）代码
     */
    vehicleNameCode?: string;
    /**
     * sfxCode
     */
    vehicleSfxCode?: string;
    /**
     * 车辆用途（0：一般车辆、1：丰桔、2：广汽网约车、3：短租车）
     */
    vehicleUse?: string;
}