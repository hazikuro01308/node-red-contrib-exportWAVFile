module.exports = function (RED) {
    var fs = require('fs');

    //. ノードの処理内容
    function ExportWAV(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.filename = config.filename || "";

        var AudioContext = require('web-audio-api').AudioContext
        , context = new AudioContext

        this.on('input', function (msg) {

          /*
          //ファイル名が設定されているか確認
          var filename = msg.filename || this.filename;

          if (filename === '') {
              node.warn('No filename specified');
          } else {
              //. WAVファイルを生成する
              var crateFileName = filename + ".wav";
              var data = msg.payload;

              fs.writeFile(crateFileName, data, function (err) {
                  node.error(err, msg);
              });

              msg.payload = str2;
              node.send(msg);
          }*/

          node.send(msg);
        });
      
    }

    /*
    function createWavData(data){
        var buffer = new ArrayBuffer(44 + data.length * 2);
        var view = new DataView(buffer);
        writeString(view, 0, 'RIFF');  // RIFFヘッダ
        view.setUint32(4, 32 + data.length * 2, true); // これ以降のファイルサイズ
        writeString(view, 8, 'WAVE'); // WAVEヘッダ
        writeString(view, 12, 'fmt '); // fmtチャンク
        view.setUint32(16, 16, true); // fmtチャンクのバイト数
        view.setUint16(20, 1, true); // フォーマットID
        view.setUint16(22, 1, true); // チャンネル数
        view.setUint32(24, sampleRate, true); // サンプリングレート
        view.setUint32(28, sampleRate * 2, true); // データ速度
        view.setUint16(32, 2, true); // ブロックサイズ
        view.setUint16(34, 16, true); // サンプルあたりのビット数
        writeString(view, 36, 'data'); // dataチャンク
        view.setUint32(40, data.length * 2, true); // 波形データのバイト数
        floatTo16BitPCM(view, 44, data); // 波形データ
        return view;
    }

    function writeString(view, offset, string) {
        for (var i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    }

    function floatTo16BitPCM(output, offset, input) {
        for (var i = 0; i < input.length; i++, offset += 2) {
            var s = Math.max(-1, Math.min(1, input[i]));
            output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        }
    }*/

    //. ReverseNode 関数を実行する exportWAVFile ノードとして登録
    RED.nodes.registerType("exportWAVFile", ReverseNode);
}