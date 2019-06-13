export class Validator {

    static customTypeMsg:{[key:string]:any} = {};

    static customRuleF:{[key:string]:any} = {};

    static validatorFnInstance = [];

    protected roles:{[key:string]:any} = {};
    // 被验证的数据
    public data;
    // 存储解析的数据
    protected dataMap: Map<string,any> = new Map<string,any>();

    // 注册验证规则
    static registered(){}
    // 解析数据
    private _parseData(){}

}