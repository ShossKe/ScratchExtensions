const { a } = require('bowser');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

class Scratch3Shosuke {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'shosuke',
            name:'上西君？v1',
            
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
                    opcode:'uenisikun',
                    blockType: BlockType.REPORTER,
                    text: '上西君[UEN]',
                    
                    arguments: {
                        UEN: {
                            type: ArgumentType.NUMBER,
                            defaultValue:'9'
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
                    opcode:'shosukekun',
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
                    opcode:'shosuke',
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
    uenisikun (args) {
        return args.UEN * 7
    }
    shosu (args) {
        return args.HIDAO ** args.MI
    }


   
    fetchJson (args) {
        return fetch(args.URL).then(response =>response.text())

    }
    shosukekun (args) {
        return args.HIDA ** 2
    }
    shosuke (args) {
        return args.HIKDA ** 7
    }
    shgrdosu (args) {
        return args.HIDAKO / args.MKI

    }
    parseJson (args) {
        return JSON.parse(args.DATA)[args.KEY]

    }
    
    
    

    


}

module.exports = Scratch3Shosuke;