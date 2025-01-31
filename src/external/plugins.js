const {GetConfig} = require("../configs/getConfig");

exports.plugins = [
    $('markdown-it-attrs'), // プレビューから{}部分を削除する
    $('markdown-it-table-of-contents'), // 目次を生成しる
    $('markdown-it-footnote'), // [^1]で脚注を生成する
    $('markdown-it-sup'), // 上付き文字を生成する
    $('markdown-it-sub'), // 下付き文字を生成する
    $('markdown-it-kbd'), // キーボードを表現する
    $('markdown-it-underline'), // 下線部を生成する
    $('markdown-it-mark'), // 文脈上重要な箇所を強調する
    $('markdown-it-mojicolor'), // 文字色を変更する
].filter(p => !!p);

function $(name, ...config) {
    let 
        pluginEnable = name + ".enable",
        pluginOptions = name + ".options",
        options = Object.assign({}, ...config) // configをオブジェクトに変換
    
    if (!GetConfig.get(pluginEnable)) {        
        return undefined
    }

    if (GetConfig.get(pluginOptions)) {        
        options = GetConfig.get(pluginOptions) // 設定で上書き
    }
    
    return {
        plugin: name,
        options: options,
    };
}
