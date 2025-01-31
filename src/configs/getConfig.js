const {BaseConfig} = require("./baseConfig");

class GetConfig extends BaseConfig {
    constructor() {
        super('markdown-hako'); // package.jsonの「configuration」を全て格納
    }

    onChange() {}
    
    // 汎用的なgetメソッド
    get(propertyName) {
        return this.read(propertyName);
    }
}

exports.GetConfig = new GetConfig();
