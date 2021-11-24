/**
 * @Description 存放整个项目中的静态常量，方便统一修改。举个例子，请求后端的接口，后端返回的值需要前端以枚举（key-value）形式进行转换，如果多个页面用到这个枚举值（object），一个页面就写一个，后端一旦修改或添加了字段值，你就需要一个个页面去修改，那就可能出现漏了哪个页面没改到，bug就出现了。所有类似这种与后端定义的枚举值都应该写在这，从这引出去使用。相同的，只要是多个地方要使用同样的枚举值或常量值，都建议在这个文件写。记得要export出去。记得注释！！！记得注释！！！记得注释！！！
 */

// redux中actions的常量
import ACTIONS_CONSTANT from './actionsConstant';

// app名称(示例)
const APP_NAME = "buddhism";

// 后端接口返回成功的code值(示例)
const SUCCESS_CODE = "0";

// 用户注册状态(示例) 比如后端返回的status是1和0，当页面上要显示“已激活”或“未激活”，只需要写 USER_ACTIVE_ENUM[status]
const USER_ACTIVE_ENUM = {
    "0": "未激活",
    "1": "已激活"
}

// 权限枚举值(示例) 比如业务逻辑是有个东西只有管理员和超管能看，如果你在页面上写if(level==3||level==4){ ...do something }过一两个月你再回来看就看不懂了，但你如果写成if(level==AUTHORITY_LEVEL_ENUM.SUPER||level==AUTHORITY_LEVEL_ENUM.ADMIN){ ...do something }就很方便明白代码写啥了
const AUTHORITY_LEVEL_ENUM = {
    "SUPER": "4",// 超级管理员
    "ADMIN": "3",// 管理员
    "VIP":"2",// 会员
    "USER": "1",// 用户
    "VISITOR": "0"// 游客
}

export default {
    ...ACTIONS_CONSTANT,
    APP_NAME,
    SUCCESS_CODE,
    USER_ACTIVE_ENUM,
    AUTHORITY_LEVEL_ENUM,
}