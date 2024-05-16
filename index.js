const { a } = require('bowser');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

class Scratch3Shose {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'shoske',
            name:'？v1',
            
            blocks: [
                {

                    opcode:'showAlert',
                    blockType:BlockType.COMMAND,
                    
                    text: '[TEXT]を表示する',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue:'やっほー！'
                        }
                    }
                },
                
              
              
                {
                    opcode:'fetchJson',
                    blockType:BlockType.REPORTER,
                    
                    
                    text:'[URL]よりJSONを取得する',
                    arguments: {
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue:'https://'
                        }
                    }
                },
                {
                    opcode:'shoukkun',
                    blockType:BlockType.REPORTER,
                    text:'[HIDA]²',
                    arguments:{
                        HIDA: {
                            type:ArgumentType.NUMBER,
                            defaultValue:'7'
                        }
                    }
                    
                },
                {
                    opcode:'shose',
                    blockType:BlockType.REPORTER,
                    text:'[HIKDA]⁷',
                    arguments:{
                        HIKDA: {
                            type:ArgumentType.NUMBER,
                            defaultValue:'7'
                        }
                    }
                    
                },
                {
                    opcode:'shosu',
                    blockType:BlockType.REPORTER,
                    text:'[HIDAO]の[MI]乗',
                    arguments:{
                        HIDAO: {
                            type:ArgumentType.NUMBER,
                            defaultValue:'7'
                        },
                        MI: {
                            type:ArgumentType.NUMBER,
                            defaultValue:'9'
                        }

                    }
                    
                },
                {
                    opcode:'shgrdosu',
                    blockType:BlockType.REPORTER,
                    text:'[HIDAKO]/[MKI]',
                    arguments:{
                        HIDAKO: {
                            type:ArgumentType.NUMBER,
                            defaultValue:'999'
                        },
                        MKI: {
                            type:ArgumentType.NUMBER,
                            defaultValue:'9'
                        }

                    }
                    
                },
                {
                    opcode: 'parseJson',
                    blockType: BlockType.REPORTER,
                    text: '[DATA]よりキー：[KEY]を取得する',
                    arguments: {
                        DATA: {
                            type: ArgumentType.STRING,
                            defaultValue: '{"key":"value"}'
                        },
                        KEY: {
                            type: ArgumentType.STRING,
                            defaultValue: 'key'
                            
                        }
                    }
                }                
                

                         
               
                


            ]
        };
    }
    showAlert (args) {
        alert(args.TEXT)
    }
    sikun (args) {
        return args.UEN * 7
    }
    shosu (args) {
        return args.HIDAO ** args.MI
    }


   
    fetchJson (args) {
        return fetch(args.URL).then(response =>response.text())

    }
    shoukkun (args) {
        return args.HIDA ** 2
    }
    shose (args) {
        return args.HIKDA ** 7
    }
    shgrdosu (args) {
        return args.HIDAKO / args.MKI

    }
    parseJson (args) {
        return JSON.parse(args.DATA)[args.KEY]

    }
    
    
    

    


}

module.exports = Scratch3Shose;
